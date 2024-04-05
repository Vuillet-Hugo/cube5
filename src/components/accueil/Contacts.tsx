import { z } from "zod";
import AutoForm, { AutoFormSubmit } from "../ui/auto-form";
import { Card, CardTitle } from "../ui/card";
import { Separator } from "../ui/separator";

const formSchema = z.object({
  email: z.string().email().max(100).describe("Email"),
  message: z.string().max(100).describe("Message"),
});

export default function Contacts() {
  return (
    <div className="w-100 flex justify-center mt-10">
      <Card className="flex flex-row w-5/6 items-center border-primary">
        <div className="w-1/3 m-5">
          {" "}
          <CardTitle className="text-2xl text-primary">
            TRAVAILLER CHEZ CESI
          </CardTitle>{" "}
          <div className="text-xl mt-5">
            Rejoignez nos 1 300 collaborateurs passionnés par leur métier qui
            transmettent leur savoir-faire et accompagnent les 28 000 étudiants
            formés chaque année par CESI au sein de nos 25 campus répartis sur
            l’ensemble du territoire français.
          </div>
        </div>{" "}
        <Separator
          orientation="vertical"
          className="h-4/5 bg-primary-foreground"
        />
        <div className="w-1/3 m-5">
          {" "}
          <CardTitle className="text-2xl text-primary">
            CESI RECRUTE
          </CardTitle>{" "}
          <div className="text-xl mt-5">
            Postulez en ligne sur notre site internet. Si vous correspondez au
            profil recherché, vous serez contacté par un de nos recruteurs en
            région.
          </div>
        </div>{" "}
        <Separator
          orientation="vertical"
          className="h-4/5 bg-primary-foreground"
        />
        <div className="w-1/3 m-5">
          {" "}
          <CardTitle className="text-2xl text-primary">
            NOUS CONTACTER
          </CardTitle>{" "}
          <div>
            <AutoForm formSchema={formSchema}>
              <AutoFormSubmit className="bg-primary-foreground text-white">
                Envoyer
              </AutoFormSubmit>
            </AutoForm>
          </div>
        </div>
      </Card>
    </div>
  );
}
