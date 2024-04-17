import { Dispatch, useEffect, useState } from "react";
import axios from "axios";

// interfaces :
import { IFormQualification } from "../../../content.component";
import LoaderComponent from "@/components/shared/loader/loader.component";
// css :
import "./popupdelete.style.css";

interface PopupDeleteQualificationProps {
  qualification: IFormQualification;
  deleteSetter: Dispatch<React.SetStateAction<number | undefined>>;
  fetchQualif: () => Promise<void>;
}

export default function PopupDelete(props: PopupDeleteQualificationProps) {
  const { qualification, deleteSetter, fetchQualif } = props;
  const [token] = useState<string | null>(localStorage.getItem("token") || null);
  const [loader, setLoader] = useState(false);

  const handleDeleteQualification = () => {
    setLoader(true);
    axios({
      method: "delete",
      url: `${import.meta.env.VITE_API_URL}qualifications/${qualification._id}`,
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
            fetchQualif();
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
            onClick={() => handleDeleteQualification()}
          >
            {loader ? <LoaderComponent /> : "Valider"}
          </button>
        </div>
      </div>
    </>
  );
}
