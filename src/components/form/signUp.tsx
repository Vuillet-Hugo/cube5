import { z } from "zod";
import AutoForm, { AutoFormSubmit } from "../ui/auto-form";
import axios from "axios";
const apiUrl = import.meta.env.VITE_API_URL;

const formSchema = z.object({
  email: z.string().email().max(100).describe("Email"),
  password: z.string().min(8).max(100).describe("Mot de passe"),
  passwordConfirmation: z
    .string()
    .min(8)
    .max(100)
    .describe("Confirmation du mot de passe"),
  identity: z
    .object({
      civilite: z.enum(["Homme", "Femme", "Autre"]).describe("Genre"),
      nom: z.string().min(2).max(10).describe("Prénom"),
      prenom: z.string().min(2).max(100).describe("Nom"),
      telephone: z.number().describe("Téléphone"),
    })
    .describe("Informations générales"),

  bornIdentity: z
    .object({
      dateNaissance: z.date().describe("Date de naissance"),
    })
    .describe("Informations de naissance"),
  location: z
    .object({
      adresse: z.string().max(100).describe("Adresse"),
      codePostal: z.string().length(5).describe("Code postal"),
      ville: z.string().max(100).describe("Ville"),
    })
    .describe("Adresse"),
  qualifications: z.object({
    diploma: z
      .object({
        meilleurDiplome: z.string().max(100).describe("Dernier diplôme"),
        niveau: z.enum(["Bac", "Bac+2", "Bac+3", "Bac+5"]).describe("Niveau"),
      })
      .describe("Diplôme"),
    chainesCompetences: z
      .array(
        z.object({
          competence: z.string().max(100).describe("Compétence"),
          niveau: z
            .enum(["Débutant", "Intermédiaire", "Avancé"])
            .describe("Niveau"),
        })
      )
      .describe("Compétences"),
  }),
  cgu: z.boolean().describe("J'accepte les CGU"),
});

function formatedDate(date: Date) {
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear();
  return `${day}-${month}-${year}`;
}

function formatedUser(values: any) {
  return {
    civilite: values.identity.civilite,
    nom: values.identity.nom,
    prenom: values.identity.prenom,
    telephone: values.identity.telephone,
    email: values.email,
    password: values.password,
    dateNaissance: formatedDate(values.bornIdentity.dateNaissance),
    adresse: values.location.adresse,
    codePostal: values.location.codePostal,
    ville: values.location.ville,
    meilleurDiplome: values.qualifications.diploma.meilleurDiplome,
    chainesCompetences: values.qualifications.chainesCompetences,
    cgu: values.cgu,
    isSpeaker: true,
  };
}

const createUser = async (values: any): Promise<any> => {
  const user = formatedUser(values);
  try {
    const response = await axios.post(`${apiUrl}authentification/signup`, user);
    if (response.data.code === 1) {
      alert(response.data.message);
    } else {
      alert(response.data.message);
    }
    return;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const SignUpForm = () => {
  return (
    <AutoForm
      formSchema={formSchema}
      onSubmit={(values) => {
        createUser(values);
      }}
      fieldConfig={{
        email: {
          inputProps: {
            type: "email",
            required: true,
          },
        },
        password: {
          inputProps: {
            type: "password",
            required: true,
          },
        },
        passwordConfirmation: {
          inputProps: {
            type: "password",
            required: true,
          },
        },
        cgu: {
          fieldType: "switch",
          inputProps: {
            required: true,
          },
        },
      }}
    >
      <AutoFormSubmit className="text-black">
        Valider l'inscription
      </AutoFormSubmit>
    </AutoForm>
  );
};
