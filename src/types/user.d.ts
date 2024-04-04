export interface chaineCompetence {
  niveau: string;
  competence: string;
}

export type FormatedSpeaker = {
  civilite: string;
  nom: string;
  prenom: string;
  telephone: string;
  email: string;
  password: string;
  dateNaissance: string;
  adresse: string;
  codePostal: string;
  ville: string;
  meilleurDiplome: string;
  chainesCompetences: chaineCompetence[];
  cgu: boolean;
  isSpeaker: true;
};

export type SpeakerForm = {
  identity: {
    civilite: string;
    nom: string;
    prenom: string;
    telephone: number;
  };
  email: string;
  password: string;
  passwordConfirmation: string;
  bornIdentity: {
    dateNaissance: Date;
  };
  location: {
    adresse: string;
    codePostal: string;
    ville: string;
  };
  qualifications: {
    diploma: {
      meilleurDiplome: string;
    };
    chainesCompetences: chaineCompetence[];
  };
  cgu: boolean;
};
