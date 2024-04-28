import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./parametre.style.css"; // Assurez-vous que ce fichier contient le CSS correct

export default function Settings() {
  const [loader, setLoader] = useState(true);
  const [user, setUser] = useState({
    nom: '',
    prenom: '',
    email: '',
    adresse: '',
    ville: '',
    codePostal: '',
    telephone: '',
    chainesCompetences: [{}], // Exemple d'objet complexe
    isAdmin: false,
    isSpeaker: false,
    isStaff: false,
    cgu: false
  });
  const [token] = useState(localStorage.getItem("token") || "");

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await axios.get('http://localhost:10051/authentification', {
          headers: { Authorization: `Bearer ${token}` }
        });
        setUser(response.data.payload);
        setLoader(false);
      } catch (error) {
        console.error('Erreur lors de la récupération des données utilisateur:', error);
      }
    };
    fetchUserDetails();
  }, [token]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser(prevUser => ({ ...prevUser, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoader(true);

    try {
      const response = await axios({
        method: 'patch',
        url: 'http://localhost:10051/authentification',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        data: user
      });

      if (response.status === 200) {
        alert('Mise à jour réussie!');
      } else {
        throw new Error('La mise à jour a échoué');
      }
    } catch (error) {
      console.error('Erreur lors de la mise à jour:', error);
      alert('Erreur lors de la mise à jour.');
    } finally {
      setLoader(false);
    }
  };

  const excludeKeys = ['chainesCompetences', 'isAdmin', 'isSpeaker', 'isStaff', 'cgu']; // Clés à exclure

  return (
    <section className="settings gestioncontent-box">
      <form onSubmit={handleSubmit} className="qualification-form">
        <h2 className="settings-title">Paramètres de l'utilisateur</h2>
        {Object.entries(user).filter(([key, _]) => !excludeKeys.includes(key)).map(([key, value]) => (
          <div className="row" key={key}>
            <label htmlFor={key}>{key.charAt(0).toUpperCase() + key.slice(1)}</label>
            <input
              type={key.includes("email") ? "email" : "text"}
              id={key}
              name={key}
              value={value}
              onChange={handleChange}
            />
          </div>
        ))}
        <button type="submit" disabled={loader} className={loader ? "loading" : ""}>
          {loader ? 'Mise à jour...' : 'Mettre à jour'}
        </button>
      </form>
    </section>
  );
}
