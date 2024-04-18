import { Dispatch, useState } from "react";
import axios from "axios";

// components :
import { IFormQualification } from "../content.component";

// css :
import "./listQualification.style.css";

interface ListQualificationsProps {
  qualifications: IFormQualification[];
  editSetter: Dispatch<React.SetStateAction<number | undefined>>;
  deleteSetter: Dispatch<React.SetStateAction<number | undefined>>;
}

export default function ListQualifications(props: ListQualificationsProps) {
  const { qualifications, editSetter, deleteSetter } = props;

  const convertToISODate = (dateString: string): string => {
    const [day, month, year] = dateString.split("-");
    return `${year}-${month}-${day}`;
  };

  return (
    <div className="list-qualifications">
      <ul>
        <div>
          <p>Nom de la Formation</p>
          <p>Référence</p>
          <p>Début</p>
          <p>Fin</p>
          <span></span>
          <span></span>
        </div>
        {qualifications &&
          qualifications.map((qualification, index) => (
            <li key={qualification._id}>
              <p>{qualification.nomFormation}</p>
              <p>{qualification.reference}</p>
              <p>{convertToISODate(qualification.dateDebut)}</p>
              <p>{convertToISODate(qualification.dateFin)}</p>
              <button type="button">
                <p onClick={() => editSetter(index)}>...</p>
              </button>
              <button type="button">
                <p onClick={() => deleteSetter(index)}>X</p>
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
}
