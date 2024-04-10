export interface chaineCompetence {
  niveau: string;
  competence: string;
}

export type FormatedSpeaker = {
  civilite: string;
  nom: string;
  prenom: string;
  telephone: number;
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

export type StudentFormType = {
  email: string;
  identity: {
    civilite: string;
    nom: string;
    prenom: string;
    telephone: number;
    dateNaissance: Date;
    pays: string;
  };
  location: {
    adresse: string;
    codePostal: string;
    ville: string;
  };
  qualifications: {
    diploma: {
      meilleurDiplome: string;
      niveau: string;
    };
    cv: File;
  };
};

export type FormatedStudent = {
  email: string;
  civilite: string;
  nom: string;
  prenom: string;
  telephone: number;
  dateNaissance: string;
  pays: string;
  adresse: string;
  codePostal: string;
  ville: string;
  meilleurDiplome: string;
  niveau: string;
  pdf: file;
  // signUpPending: string;
};
