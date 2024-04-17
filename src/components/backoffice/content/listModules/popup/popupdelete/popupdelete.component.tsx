import { Dispatch, useEffect, useState } from "react";
import axios from "axios";

// interfaces :
import { IFormModule } from "../../../content.component";
import LoaderComponent from "@/components/shared/loader/loader.component";
// css :
import "./popupdelete.style.css";

interface PopupDeleteModuleProps {
  module: IFormModule;
  deleteSetter: Dispatch<React.SetStateAction<number | undefined>>;
  fetchMod: () => Promise<void>;
}

export default function PopupDeleteModule(props: PopupDeleteModuleProps) {
  const { module, deleteSetter, fetchMod } = props;
  const [token] = useState<string | null>(localStorage.getItem("token") || null);
  const [loader, setLoader] = useState(false);

  const handleDeleteModule = () => {
    setLoader(true);
    axios({
      method: "delete",
      url: `${import.meta.env.VITE_API_URL}modules/${module._id}`,
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    }).then((res: any) => {
      if (res.data.code === 1) {
        setTimeout(() => {
          setLoader(false);
          const confirmation = window.confirm(
            "Modification effectuée avec succès. Voulez-vous continuer ?"
          );
          if (confirmation) {
            fetchMod();
            deleteSetter(undefined);
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
      <div className="popup-delete">
        <div className="content">
          <h4>Confirmation de suppression</h4>
          <p>Êtes-vous sûr de vouloir supprimer cet élément ?</p>
        </div>
        <div className="actions">
          <button type="button" onClick={() => deleteSetter(undefined)}>
            Quitter
          </button>
          <button
            type="button"
            className={loader ? "loading" : ""}
            onClick={() => handleDeleteModule()}
          >
            {loader ? <LoaderComponent /> : "Valider"}
          </button>
        </div>
      </div>
    </>
  );
}
