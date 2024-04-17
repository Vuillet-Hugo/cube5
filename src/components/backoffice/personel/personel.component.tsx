import axios from "axios";
import { useEffect, useState } from "react";

// css :
import "./personel.style.css";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card";

export default function Personel() {
  const [loader, setLoader] = useState<boolean>(true);
  const [user, setUser] = useState<any>({});

  const [token, setToken] = useState<string>(
    localStorage.getItem("token") || ""
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
    <section className="w-100 flex justify-start flex-col grow">
      <div className="w-100 h-100">
        <div className="text-5xl ml-12 mt-12">Informations personnel</div>
        <Separator className="w-60 mt-3 ml-14 bg-primary-foreground h-1" />
        {loader ? (
          <div className="loader"></div>
        ) : (
          <>
            <div className="flex justify-around w-100 m-10">
              <Card className="w-2/6 border border-primary">
                <CardContent>
                  <div>
                    <span className="text-2xl">Identité :</span>
                    <Separator className="w-1/6 bg-primary-foreground" />
                    <p>{user.nom}</p>
                    <p>{user.prenom}</p>
                  </div>
                  <div>
                    <span className="text-2xl">Email :</span>
                    <Separator className="w-1/6 bg-primary-foreground" />
                    <p>{user.email}</p>
                  </div>
                  <div>
                    <div>
                      <span className="text-2xl">Date de naissance :</span>
                      <Separator className="w-1/6 bg-primary-foreground" />
                      <p>{user.dateNaissance}</p>
                    </div>
                    <div>
                      <span className="text-2xl">Téléphone :</span>
                      <Separator className="w-1/6 bg-primary-foreground" />
                      <p>{user.telephone}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="w-2/6 border border-primary">
                <CardContent>
                  <div>
                    <span className="text-2xl">Adresse :</span>
                    <Separator className="w-1/6 bg-primary-foreground" />
                    <div>
                      <p>{user.adresse}</p>
                      <p>{user.ville}</p>
                      <p>{user.codePostal}</p>
                    </div>
                  </div>
                  <div>
                    <div>
                      <h4 className="text-2xl">Diplôme le plus élevé :</h4>
                      <Separator className="w-1/6 bg-primary-foreground" />
                      <p>{user.diplome}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="flex w-100 justify-center">
              <Card className="w-5/6 border border-primary">
                <CardContent>
                  <div>
                    <h4 className="text-2xl">Compétences :</h4>
                    <Separator className="w-1/6 bg-primary-foreground" />
                    <ul>
                      {user.chainesCompetences.map((skill: any) => {
                        return (
                          <li>
                            <span className="text-xl">Niveau :</span>
                            <p>{skill.niveau}</p>
                            <span className="text-xl">Nom :</span>
                            <p>{skill.competence}</p>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xl">Status</h4>
                    <ul>
                      {user.isSpeaker && <li>Intervenant</li>}
                      {user.isStudent && <li>Étudiant</li>}
                      {user.isStaff && <li>Équipe pédagoqique CESI</li>}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
