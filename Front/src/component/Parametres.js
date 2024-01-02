import React from 'react';
import './Parametres.css'; 

function Parametres() {
 
  const handleSubmit = (event) => {
    event.preventDefault();
   
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="style-title">
          <div className="vertical-line"></div>
          <h2 className="title">Editer mon profil</h2>
        </div>

        <div className="form-group">
          <input type="text" id="nom" name="nom" required placeholder="Nom" />
          <input type="text" id="prenom" name="prenom" placeholder="Prénom" />
        </div>

        <div className="form-group">
          <input type="text" id="adresse" name="adresse" required placeholder="Adresse" />
          <input type="date" id="date-naissance" name="date-naissance" required placeholder="Date de Naissance" />
        </div>

        <div className="form-group">
          <input type="email" id="email" name="email" required placeholder="Email" />
          <input type="tel" id="telephone" name="telephone" required placeholder="Numéro de téléphone" />
        </div>

        <div className="style-title">
          <div className="vertical-line"></div>
          <h2 className="title">Changement de mot de passe et Photo de Profil</h2>
        </div>

        <div className="password-photo-container">
          <div className="password-group">
            <input type="password" id="password-actual" name="password-actual" required placeholder="Mot de passe actuel" />
            <input type="password" id="password-new" name="password-new" required placeholder="Nouveau mot de passe" />
            <input type="password" id="password-confirm" name="password-confirm" required placeholder="Confirmation mot de passe" />
          </div>
          <div className="photo-group">
            <p>Photo de Profil</p>
            <input type="file" id="photo-profil" name="photo-profil" accept="image/*" required />
          </div>
        </div>

        <button type="submit" className="btn">Enregistrer</button>
      </form>
    </div>
  );
}

export default Parametres;