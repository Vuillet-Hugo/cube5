import { z } from "zod";
import AutoForm, { AutoFormSubmit } from "../ui/auto-form";
import { createUser } from "@/functions/user";
import { formatedUserStudent } from "./formatedStudent";
import { FormatedStudent } from "@/types/user";

const formSchema = z.object({
    email: z.string().email().max(100).describe("Email"),
    identity: z
        .object({
            civilite: z.enum(["Homme", "Femme", "Autre"]).describe("Genre"),
            prenom: z.string().min(2).max(10).describe("Prénom"),
            nom: z.string().min(2).max(100).describe("Nom"),
            telephone: z.number().describe("Téléphone"),
            dateNaissance: z.date().describe("Date de naissance"),
            pays: z.string().max(100).describe("Pays de Naissance"),
        })
        .describe("Informations générales"),
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
        // cv: z.string().max(100).describe("Curriculum Vitae ( PDF )"),
        cv: z.custom<File>().describe("Curriculum Vitae ( PDF )"),
    }),


});
export default function StudentForm() {
    return (
        <AutoForm
            className="mb-10"
            formSchema={formSchema}
            fieldConfig={
                {
                    email: {
                        inputProps: {
                            type: "email",
                            required: true,
                        },
                    },
                    identity: {
                        civilite: {
                            inputProps: {
                                placeholder: "Séléctionner un genre",
                            },
                        },
                    },
                    qualifications: {
                        cv: {
                            inputProps: {
                                type: "file",
                                accept: ".pdf",
                                placeholder: "CV en PDF",
                                required: false,
                            },
                        },
                    },
                }
            }
            onSubmit={
                (values) => {
                    const user = formatedUserStudent(values);
                    createUser(user as FormatedStudent);
                }
            }>
            <AutoFormSubmit>Valider la candidature</AutoFormSubmit>
        </AutoForm>
    );

}