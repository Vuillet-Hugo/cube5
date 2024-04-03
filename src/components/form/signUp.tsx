import { z } from "zod";
import AutoForm, { AutoFormSubmit } from "../ui/auto-form";

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
      gender: z.enum(["Homme", "Femme", "Autre"]).describe("Genre"),
      firstName: z.string().min(2).max(100).describe("Prénom"),
      lastName: z.string().min(2).max(100).describe("Nom"),
      phone: z.number().int().positive().describe("Téléphone"),
    })
    .describe("Informations générales"),

  bornIdentity: z
    .object({
      birthDate: z.date().describe("Date de naissance"),
      country: z.string().max(100).describe("Pays de naissance"),
    })
    .describe("Informations de naissance"),
  location: z
    .object({
      address: z.string().max(100).describe("Adresse"),
      postalCode: z.string().length(5).describe("Code postal"),
      city: z.string().max(100).describe("Ville"),
    })
    .describe("Adresse"),
  diploma: z.string().max(100).describe("Meilleur diplôme"),
  cgu: z.boolean().describe("J'accepte les CGU"),
});

export const SignUpForm = () => {
  return (
    <AutoForm
      formSchema={formSchema}
      fieldConfig={{
        cgu: {
          fieldType: "switch",
        },
      }}
    >
      <AutoFormSubmit className="text-black">Sign Up</AutoFormSubmit>
    </AutoForm>
  );
};
// const {
//     civilite,xx
//     nom,xx
//     prenom,xx
//     email,xx
//     password,xx
//     dateNaissance,xx
//     adresse,xx
//     codePostal,xx
//     ville,xx
//     paysNaissance,xx
//     telephone,xx
//     meilleurDiplome,
//     isAdmin,
//     isSpeaker,
//     isStudent,
//     isStaff,
//   }
