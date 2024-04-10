import { formatedDate } from "@/helpers/formatedDate";
import { StudentFormType } from "@/types/user";

export function formatedUserStudent(values: StudentFormType) {
  return {
    civilite: values.identity.civilite,
    nom: values.identity.nom,
    prenom: values.identity.prenom,
    telephone: values.identity.telephone,
    email: values.email,
    dateNaissance: formatedDate(values.identity.dateNaissance),
    pays: values.identity.pays,
    adresse: values.location.adresse,
    codePostal: values.location.codePostal,
    ville: values.location.ville,
    meilleurDiplome: values.qualifications.diploma.meilleurDiplome,
    niveau: values.qualifications.diploma.niveau,
    pdf: values.qualifications.cv,
    isStudent: true,
  };
}