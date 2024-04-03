import { formatedDate } from "@/helpers/formatedDate";
import { SpeakerForm } from "@/types/types.d";

export function formatedUser(values: SpeakerForm) {
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
