import React, { useEffect, useState } from "react";
import axios from "axios";

// css :
import "./formations.style.css";

export function FormationsPage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchQualifications = async () => {
      try {
        const response = await axios.get("http://localhost:10051/qualifications");
        setData(response.data.payload);
      } catch (err) {
        console.log(err);
      }
    };
    fetchQualifications();
  }, []);

  return (
    <section className="formations-box">
      <h4>Nos Formations</h4>
      <ul>
        {data.length > 0 &&
          data.map((row: any, index: number) => {
            return (
              <li key={index}>
                <h5>{row.nomFormation}</h5>
                <p>{row.description}</p>
                <hr />
                <div className="row">
                  <span>Date de la formation :</span>
                  <div>
                    <p>{row.dateDebut}</p>
                    <p>{row.dateFin}</p>
                  </div>
                </div>
                <div className="level">
                  <span>Liste des modules :</span>
                  {row.modules.length > 0 && (
                    <>
                      <ul>
                        {row.modules.map((moduleRow: any, moduleIndex: number) => (
                          <li key={moduleIndex}>
                            <h6>{moduleRow.nomModule}</h6>
                            <p>{moduleRow.dureeModule}</p>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                </div>
                <div className="required">
                  <span>Niveau de formation</span>
                  <p>{row.niveauFormation}</p>
                </div>
                <div className="accept">
                  <button onClick={() => console.log("click")}>Se préinscrire</button>
                </div>
              </li>
            );
          })}
      </ul>
    </section>
  );
}
