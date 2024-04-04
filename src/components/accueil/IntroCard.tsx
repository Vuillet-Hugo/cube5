import { ChevronRight } from "lucide-react";
import { Card, CardTitle, CardContent } from "../ui/card";

export default function IntroCard() {
  return (
    <div className="flex justify-around h-1/2 mt-10">
      <Card className="w-2/5 p-10 border-primary">
        <CardTitle>
          Campus d’enseignement supérieur et de formation professionnelle, CESI
          c’est :
        </CardTitle>
        <CardContent className="text-xl mt-5">
          <ul>
            <li className="flex mb-5">
              <ChevronRight color="#00738A" /> Une grande école d’ingénieurs
            </li>
            <li className="flex mb-5">
              <ChevronRight color="#00738A" />
              Un membre de la conférence des Grandes Ecoles
            </li>
            <li className="flex mb-5">
              <ChevronRight color="#00738A" />
              Plus de 28 000 étudiants
            </li>
            <li className="flex mb-5">
              <ChevronRight color="#00738A" />
              25 campus dotés d’équipements de pointe
            </li>
            <li className="flex mb-5">
              <ChevronRight color="#00738A" />
              Un réseau de 60 000 diplômés
            </li>
          </ul>
        </CardContent>
      </Card>
      <Card className="w-2/5 p-10 border-primary">
        <CardTitle>À travers son offre de formation :</CardTitle>
        <CardContent className="text-xl mt-5">
          CESI accompagne ses étudiants, alternants et salariés stagiaires de la
          formation professionnelle dans les secteurs : Industrie et Innovation,
          Informatique & Numérique, QSE et Développement Durable et BTP & Génie
          Civil. Convaincue de la nécessité de concilier sciences dures et
          sciences humaines, CESI se distingue également par une offre de
          formation en Ressources Humaines & Management.
        </CardContent>
      </Card>
    </div>
  );
}
