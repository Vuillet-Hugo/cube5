import { Card, CardTitle } from "../ui/card";
import { Separator } from "../ui/separator";

export default function Actualites() {
  return (
    <div className="flex justify-center mt-10">
      <Card className="flex flex-row w-5/6 p-5 border-primary">
        <div className="flex flex-col w-1/2  mr-16">
          <img src="public/actualites.png" alt="actualités" className="h-3/5" />
          <div>
            <CardTitle className="text-3xl mt-5 mb-2 text-primary">
              Les Causeries CESI : du 24 octobre au 30 avril 2024
            </CardTitle>
            <div className="text-xl">
              Au mois d’octobre, les Causeries CESI reprennent ! Cycle de conférences gratuites
              animées par des experts et professionnels depuis 10 ans. Les Causeries CESI exposent
              les enjeux d’évolution...
            </div>
          </div>
        </div>
        <div className="flex flex-col w-1/2">
          <div className="h-1/4">
            <div className="text-xl text-primary">ACTUALITÉS Publié le 27 mars 2024</div>
            <div className="text-lg">
              Rouen mobilité intelligente pour tous : avec le projet TIGA, CESI s’engage dans le
              développement de modes de déplacement à grande échelle
            </div>
          </div>
          <Separator className="mb-5 bg-primary-foreground" />
          <div className="h-1/4">
            <div className="text-xl text-primary"> ACTUALITÉS Publié le 27 mars 2024</div>
            <div className="text-lg">
              MobE : quand CESI fait des déplacements quotidiens des étudiants un programme
              ambitieux d’économies d’énergie
            </div>
          </div>
          <Separator className="mb-5 bg-primary-foreground" />
          <div className="h-1/4">
            <div className="text-xl text-primary">ACTUALITÉS Publié le 25 mars 2024</div>
            <div className="text-lg">
              Retour sur le Workshop IoT - CESI Arras et l'Université Strathmore à Nairobi
            </div>
          </div>
          <Separator className="mb-5 bg-primary-foreground" />
          <div className="h-1/4">
            <div className="text-xl text-primary">ACTUALITÉS Publié le 23 mars 2024</div>
            <div className="text-lg">
              Parcoursup : l'accompagnement personnalisé de CESI pour vos démarches
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
