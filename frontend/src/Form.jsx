import React, { useState } from "react";
import TextField from "./TextField";
import "./style.css";

function Formulaire() {
  const [nom, setNom] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ici, vous pouvez ajouter la logique de gestion de la soumission du formulaire, par exemple,
    // envoyer les données à un serveur ou effectuer une action en fonction des valeurs saisies.
    console.log("Nom:", nom);
    console.log("Email:", email);
    console.log("Message:", message);
    // Réinitialisation des champs après la soumission du formulaire
    setNom("");
    setEmail("");
    setMessage("");
  };

  return (
    <div align="center">
      <form class="form" onSubmit={handleSubmit}>
        <React.StrictMode>
          <TextField />
        </React.StrictMode>
        <img class="submit" alt="ENVOYER" src="./send.svg" tabIndex="0"/>
      </form>
    </div>
  );
}

export default Formulaire;
