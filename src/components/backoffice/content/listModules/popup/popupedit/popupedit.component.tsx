import { Dispatch, useEffect, useState } from "react";

// css :
import "./popupedit.style.css";

// interfaces :
import { IFormModule, IFormQualification } from "../../../content.component";
import axios from "axios";
import LoaderComponent from "@/components/shared/loader/loader.component";

interface PopupEditModuleProps {
  module: IFormModule;
  setFormQualification: Dispatch<React.SetStateAction<IFormQualification>>;
  editSetter: Dispatch<React.SetStateAction<number | undefined>>;
  fetchMod: () => Promise<void>;
}

export default function PopupEditModule(props: PopupEditModuleProps) {
  const { module, editSetter, fetchMod } = props;
  const [token] = useState<string | null>(localStorage.getItem("token") || null);
  const [loader, setLoader] = useState(false);
  const [editedModule, setEditedModule] = useState<IFormModule>(module);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const { name, value } = e.target;
    setEditedModule((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleEditedModule = () => {
    setLoader(true);
    axios({
      method: "patch",
      url: `${import.meta.env.VITE_API_URL}modules/${module._id}`,
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      data: editedModule,
    }).then((res: any) => {
      if (res.data.code === 1) {
        setTimeout(() => {
          setLoader(false);
          const confirmation = window.confirm(
            "Modification effectuée avec succès. Voulez-vous continuer ?"
          );
          if (confirmation) {
            fetchMod();
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
              <label htmlFor="nomFormation">Nom du module</label>
              <input
                type="text"
                name="nomModule"
                placeholder={module.nomModule}
                onChange={handleChange}
              />
            </div>
            <div className="row">
              <label htmlFor="description">Durée du module</label>
              <textarea
                name="dureeModule"
                placeholder={module.dureeModule}
                onChange={handleChange}
              />
            </div>
            <div className="row">
              <label htmlFor="niveauFormation">Référence du module</label>
              <input
                type="text"
                name="reference"
                placeholder={module.reference}
                onChange={handleChange}
              />
            </div>
          </div>
        </form>
        <div className="actions">
          <button type="button" onClick={() => editSetter(undefined)}>
            Quitter
          </button>
          <button className={loader ? "loading" : ""} onClick={() => handleEditedModule()}>
            {loader ? <LoaderComponent /> : "Valider"}
          </button>
        </div>
      </div>
    </>
  );
}
