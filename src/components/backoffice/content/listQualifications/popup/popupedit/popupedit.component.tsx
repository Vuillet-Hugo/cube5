import { Dispatch, useEffect, useState } from "react";

// css :
import "./popupedit.style.css";

// interfaces :
import { IFormModule, IFormQualification } from "../../../content.component";
import axios from "axios";
import LoaderComponent from "@/components/shared/loader/loader.component";

interface PopupEditQualificationProps {
  qualification: IFormQualification;
  modules: IFormModule[];
  setFormQualification: Dispatch<React.SetStateAction<IFormQualification>>;
  editSetter: Dispatch<React.SetStateAction<number | undefined>>;
  fetchQualif: () => Promise<void>;
}

export default function PopupEdit(props: PopupEditQualificationProps) {
  const { setFormQualification, modules, qualification, editSetter, fetchQualif } = props;
  const [token] = useState<string | null>(localStorage.getItem("token") || null);
  const [loader, setLoader] = useState(false);
  const [editedQualification, setEditedQualification] = useState<IFormQualification>(qualification);

  const convertToISODate = (dateString: string): string => {
    const [day, month, year] = dateString.split("-");
    return `${year}-${month}-${day}`;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const { name, value } = e.target;
    setEditedQualification((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleModuleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedModuleId = e.target.value;
    const selectedModule = modules.find((module) => module._id === selectedModuleId);
    if (selectedModule) {
      setEditedQualification((prevState: IFormQualification) => ({
        ...prevState,
        modules: [...prevState.modules, selectedModule],
      }));
    }
  };

  const handleRemoveModule = (indexToRemove: number) => {
    setEditedQualification((prevState: IFormQualification) => ({
      ...prevState,
      modules: prevState.modules.filter((_, index) => index !== indexToRemove),
    }));
  };

  const handleEditedQualification = () => {
    setLoader(true);
    axios({
      method: "patch",
      url: `${import.meta.env.VITE_API_URL}qualifications/${qualification._id}`,
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      data: editedQualification,
    }).then((res: any) => {
      if (res.data.code === 1) {
        setTimeout(() => {
          setLoader(false);
          const confirmation = window.confirm(
            "Modification effectuée avec succès. Voulez-vous continuer ?"
          );
          if (confirmation) {
            fetchQualif();
            editSetter(undefined);
          }
        }, 1000);
      }
    });
  };
  useEffect(() => {
    document.body.classList.add("lock-scroll");

    return () => {
      document.body.classList.remove("lock-scroll");
    };
  }, []);

  return (
    <>
      <div className="bg"></div>
      <div className="popup-edit">
        <h4>Modifier la Formation</h4>
        <form>
          <div>
            <div className="row">
              <label htmlFor="nomFormation">Nom de la qualitification</label>
              <input
                type="text"
                name="nomFormation"
                placeholder={qualification.nomFormation}
                onChange={handleChange}
              />
            </div>
            <div className="row">
              <label htmlFor="description">Description de la formation</label>
              <textarea
                name="description"
                placeholder={qualification.description}
                onChange={handleChange}
              />
            </div>
            <div className="row">
              <label htmlFor="niveauFormation">Niveau de la formation</label>
              <input
                type="text"
                name="niveauFormation"
                placeholder={qualification.niveauFormation.toString()}
                onChange={handleChange}
              />
            </div>
            <div className="row">
              <label htmlFor="dateDebut">Date de début de la formation</label>
              <input
                type="date"
                name="dateDebut"
                value={convertToISODate(qualification.dateDebut)}
                onChange={handleChange}
              />
            </div>
            <div className="row">
              <label htmlFor="dateFin">Date de fin de la formation</label>
              <input
                type="date"
                name="dateFin"
                value={convertToISODate(qualification.dateFin)}
                onChange={handleChange}
              />
            </div>
          </div>
          <div>
            <div className="row">
              <label htmlFor="reference">Référence de la formation</label>
              <input
                type="text"
                name="reference"
                placeholder={qualification.reference}
                onChange={handleChange}
              />
            </div>
            <div className="row">
              <label htmlFor="modules">Modules</label>
              <select name="modules" onChange={handleModuleChange}>
                {modules.map((module) => {
                  return (
                    <option key={module._id} value={module._id}>
                      {module.nomModule}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="modules">
              <ul>
                {editedQualification.modules.map((module, index) => (
                  <li key={index}>
                    <p>{module.nomModule}</p>
                    <button type="button" onClick={() => handleRemoveModule(index)}>
                      X
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </form>
        <div className="actions">
          <button type="button" onClick={() => editSetter(undefined)}>
            Quitter
          </button>
          <button className={loader ? "loading" : ""} onClick={() => handleEditedQualification()}>
            {loader ? <LoaderComponent /> : "Valider"}
          </button>
        </div>
      </div>
    </>
  );
}
