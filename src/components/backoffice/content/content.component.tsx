import { Dispatch, useEffect, useState } from "react";
import axios from "axios";

// css :
import "./content.style.css";
import ListQualifications from "./listQualifications/listQualifications.component";
import ListModules from "./listModules/listModules.component";
import PopupEdit from "./listQualifications/popup/popupedit/popupedit.component";
import LoaderComponent from "@/components/shared/loader/loader.component";
import PopupDelete from "./listQualifications/popup/popupdelete/popupdelete.component";
import PopupEditModule from "./listModules/popup/popupedit/popupedit.component";
import PopupDeleteModule from "./listModules/popup/popupdelete/popupdelete.component";

export interface IFormQualification {
  _id?: string;
  nomFormation: string;
  description: string;
  niveauFormation: number;
  dateDebut: string;
  dateFin: string;
  reference: string;
  modules: IFormModule[];
}

export interface IFormModule {
  _id?: string;
  nomModule: string;
  dureeModule: string;
  reference: string;
}

export default function GestionContent() {
  const [token] = useState<string | null>(localStorage.getItem("token") || null);
  const [editMode, setEditingMode] = useState<number | undefined>(undefined);
  const [deleteMode, setDeletingMode] = useState<number | undefined>(undefined);
  const [editModeModule, setEditingModeModule] = useState<number | undefined>(undefined);
  const [deleteModeModule, setDeletingModeModule] = useState<number | undefined>(undefined);
  const [listSelected, setListSelected] = useState<string>("qualifications" || "modules");
  const [modules, setModules] = useState<IFormModule[]>([]);
  const [loaderQualification, setLoaderQualification] = useState<boolean>(false);
  const [loaderModule, setLoaderModule] = useState<boolean>(false);
  const [qualifications, setQualifications] = useState<IFormQualification[]>([]);
  const [formQualification, setFormQualification] = useState<IFormQualification>({
    nomFormation: "",
    description: "",
    niveauFormation: 0,
    dateDebut: "",
    dateFin: "",
    reference: "",
    modules: [],
  });
  const [formModule, setFormModule] = useState<IFormModule>({
    nomModule: "",
    dureeModule: "",
    reference: "",
  });

  // handle change for formQualification and formModule :
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>,
    setState:
      | Dispatch<React.SetStateAction<IFormQualification>>
      | Dispatch<React.SetStateAction<IFormModule>>
  ) => {
    const { name, value } = e.target;
    setState((prev: any) => ({ ...prev, [name]: value }));
  };

  // add module to formQualification :
  const handleModuleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedModuleId = e.target.value;
    const selectedModule = modules.find((module) => module._id === selectedModuleId);
    if (selectedModule) {
      setFormQualification((prevState: IFormQualification) => ({
        ...prevState,
        modules: [...prevState.modules, selectedModule],
      }));
    }
  };

  // remove module selected from formQualification :
  const handleRemoveModule = (indexToRemove: number) => {
    setFormQualification((prevState: IFormQualification) => ({
      ...prevState,
      modules: prevState.modules.filter((_, index) => index !== indexToRemove),
    }));
  };

  // request POST for qualification :
  const handleQualification = () => {
    setLoaderQualification(true);
    const formattedDateDebut = new Date(formQualification.dateDebut).toLocaleDateString("fr-FR");
    const formattedDateFin = new Date(formQualification.dateFin).toLocaleDateString("fr-FR");
    axios({
      method: "post",
      url: `${import.meta.env.VITE_API_URL}qualifications`,
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      data: {
        ...formQualification,
        dateDebut: formattedDateDebut,
        dateFin: formattedDateFin,
      },
    }).then((res: any) => {
      if (res.data.code === 1) {
        setTimeout(() => {
          setLoaderQualification(false);
          const confirmation = window.confirm(
            "Ajout de la formation effectuée avec succès. Voulez-vous continuer ?"
          );
          if (confirmation) fetchQualifications();
        }, 1000);
      }
    });
  };

  // request POST for module :
  const handleModule = () => {
    setLoaderModule(true);
    axios({
      method: "post",
      url: `${import.meta.env.VITE_API_URL}modules`,
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      data: formModule,
    }).then((res: any) => {
      if (res.data.code === 1) {
        setTimeout(() => {
          setLoaderModule(false);
          const confirmation = window.confirm(
            "Ajout du module effectuée avec succès. Voulez-vous continuer ?"
          );
          if (confirmation) fetchModules();
        }, 1000);
      }
    });
  };
  const fetchModules = async () => {
    axios({
      method: "get",
      url: `${import.meta.env.VITE_API_URL}modules`,
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res: any) => {
      if (res.data.code === 1) setModules(res.data.payload);
    });
  };
  const fetchQualifications = async () => {
    axios({
      method: "get",
      url: `${import.meta.env.VITE_API_URL}qualifications`,
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res: any) => {
      if (res.data.code === 1) setQualifications(res.data.payload);
    });
  };

  // useEffect one time : fetch modules for formQualification :
  useEffect(() => {
    fetchModules();
    fetchQualifications();
  }, []);
  return (
    <section className="gestioncontent-box">
      {editMode != undefined ? (
        <PopupEdit
          qualification={qualifications[editMode as number]}
          modules={modules}
          setFormQualification={setFormQualification}
          editSetter={setEditingMode}
          fetchQualif={fetchQualifications}
        />
      ) : null}
      {deleteMode != undefined ? (
        <PopupDelete
          qualification={qualifications[deleteMode as number]}
          deleteSetter={setDeletingMode}
          fetchQualif={fetchQualifications}
        />
      ) : null}
      {editModeModule != undefined ? (
        <PopupEditModule
          module={modules[editModeModule as number]}
          setFormQualification={setFormQualification}
          editSetter={setEditingModeModule}
          fetchMod={fetchModules}
        />
      ) : null}
      {deleteModeModule != undefined ? (
        <PopupDeleteModule
          module={modules[deleteModeModule as number]}
          deleteSetter={setDeletingModeModule}
          fetchMod={fetchModules}
        />
      ) : null}
      <form className="qualification-form">
        <h4>Ajouter une qualification</h4>
        <div className="row">
          <label htmlFor="nomFormation">Nom de la qualitification</label>
          <input
            type="text"
            name="nomFormation"
            onChange={(e) => handleChange(e, setFormQualification)}
          />
        </div>
        <div className="row">
          <label htmlFor="description">Description de la formation</label>
          <textarea name="description" onChange={(e) => handleChange(e, setFormQualification)} />
        </div>
        <div className="row">
          <label htmlFor="niveauFormation">Niveau de la formation</label>
          <input
            type="text"
            name="niveauFormation"
            onChange={(e) => handleChange(e, setFormQualification)}
          />
        </div>
        <div className="row">
          <label htmlFor="dateDebut">Date de début de la formation</label>
          <input
            type="date"
            name="dateDebut"
            onChange={(e) => handleChange(e, setFormQualification)}
          />
        </div>
        <div className="row">
          <label htmlFor="dateFin">Date de fin de la formation</label>
          <input
            type="date"
            name="dateFin"
            onChange={(e) => handleChange(e, setFormQualification)}
          />
        </div>
        <div className="row">
          <label htmlFor="reference">Référence de la formation</label>
          <input
            type="text"
            name="reference"
            onChange={(e) => handleChange(e, setFormQualification)}
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
        {formQualification.modules.length > 0 && (
          <div className="modules">
            <ul>
              {formQualification.modules.map((module, index) => (
                <li key={index}>
                  <p>{module.nomModule}</p>
                  <button type="button" onClick={() => handleRemoveModule(index)}>
                    X
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
        <button
          className={loaderQualification ? "loading" : ""}
          type="button"
          onClick={handleQualification}
        >
          {loaderQualification ? <LoaderComponent /> : "Ajouter la qualification"}
        </button>
      </form>
      {/*  */}
      <form className="module-form">
        <h4>Ajouter un module</h4>
        <div className="row">
          <label htmlFor="nomModule">Nom du module</label>
          <input type="text" name="nomModule" onChange={(e) => handleChange(e, setFormModule)} />
        </div>
        <div className="row">
          <label htmlFor="dureeModule">Durée du module</label>
          <input type="text" name="dureeModule" onChange={(e) => handleChange(e, setFormModule)} />
        </div>
        <div className="row">
          <label htmlFor="reference">Référence du module</label>
          <input type="text" name="reference" onChange={(e) => handleChange(e, setFormModule)} />
        </div>
        <button className={loaderModule ? "loading" : ""} type="button" onClick={handleModule}>
          {loaderModule ? <LoaderComponent /> : "Ajouter le module"}
        </button>
      </form>
      <div className="list-data-box">
        <div className="panel">
          <button
            className={listSelected === "qualifications" ? "selected" : "not-selected"}
            onClick={() => setListSelected("qualifications")}
          >
            Liste des formations
          </button>
          <button
            className={listSelected === "modules" ? "selected" : "not-selected"}
            onClick={() => setListSelected("modules")}
          >
            Liste des modules
          </button>
        </div>
        <div className="bottom">
          {listSelected === "qualifications" ? (
            <ListQualifications
              qualifications={qualifications}
              editSetter={setEditingMode}
              deleteSetter={setDeletingMode}
            />
          ) : (
            <ListModules
              modules={modules}
              editSetter={setEditingModeModule}
              deleteSetter={setDeletingModeModule}
            />
          )}
        </div>
      </div>
    </section>
  );
}
