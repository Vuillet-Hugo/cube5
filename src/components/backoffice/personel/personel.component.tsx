import axios from "axios";
import { useEffect, useState } from "react";

// css :
import "./personel.style.css";

export default function Personel() {
  const [loader, setLoader] = useState<boolean>(true);
  const [user, setUser] = useState<any>({});

  const [token, setToken] = useState<string>(
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYmYiOjE3MTI3MzYxNTEsImlhdCI6MTcxMjczNjE1MSwianRpIjoidW5pcXVlX2lkIiwiZGF0YSI6eyJlbWFpbCI6InRlc3RAZ21haWwuY29tIn19.siVoC5rxu7tDJsSDwaBThIzIrWG6EO09mDeTZQBOQVc"
  );

  useEffect(() => {
    const getUser = async () => {
      await axios({
        method: "get",
        url: "http://localhost:10051/authentification",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }).then((res: any) => {
        console.log(res.data);
        if (res.data.code === 1) {
          setUser(res.data.payload);
          setTimeout(() => setLoader(false), 300);
        }
      });
    };

    getUser();
  }, []);

  console.log(loader);

  return (
    <section className="personel-box">
      <div className="container">
        <h4>Informations personnel</h4>
        {loader ? (
          <div className="loader"></div>
        ) : (
          <>
            <div className="names">
              <div className="row">
                <span>Identité :</span>
                <p>{user.civilite}</p>
                <p>{user.nom}</p>
                <p>{user.prenom}</p>
              </div>
              <div className="row">
                <span>Email :</span>
                <p>{user.email}</p>
              </div>
              <div className="row">
                <div>
                  <span>Date de naissance :</span>
                  <p>{user.dateNaissance}</p>
                </div>
                <div>
                  <span>Téléphone :</span>
                  <p>{user.telephone}</p>
                </div>
              </div>
            </div>
            <div className="places">
              <span>Adresse :</span>
              <div>
                <p>{user.adresse}</p>
                <p>{user.ville}</p>
                <p>{user.codePostal}</p>
              </div>
            </div>
            <div className="skills">
              <div className="row">
                <h4>Diplôme le plus élevé</h4>
                <p>{user.diplome}</p>
              </div>
              <div className="row">
                <h4>Compétences</h4>
                <ul>
                  {user.chainesCompetences.map((skill: any) => {
                    return (
                      <li>
                        <span>Niveau :</span>
                        <p>{skill.niveau}</p>
                        <span>Nom :</span>
                        <p>{skill.competence}</p>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
            <div className="status">
              <h4>Status</h4>
              <ul>
                {user.isSpeaker && <li>Intervenant</li>}
                {user.isStudent && <li>Étudiant</li>}
                {user.isStaff && <li>Équipe pédagoqique CESI</li>}
              </ul>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
