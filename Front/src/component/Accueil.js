import React from 'react';
import "./Accueil.css";
function Accueil (){
  return (
    <div className="container">
      <div className="style-title">
        <div className="vertical-line"></div>
        <h2 className="title">Publier un projet</h2>
      </div>

      <form action="/publish" method="post">
        <div className="input-group">
          <input type="text" id="title" name="title" placeholder="Titre" required />
        </div>

        <div className="input-group">
          <div className="style-title">
            <div className="vertical-line"></div>
            <h2 className="title">Sélectionnez la catégorie qui se rapproche le plus de votre besoin</h2>
          </div>
          <select id="category" name="category" required>
            <option value="">Choisir une catégorie</option>
            <option value="1">Catégorie 1</option>
            <option value="2">Catégorie 2</option>
            <option value="3">Catégorie 3</option>
          </select>
        </div>

        <div className="input-group">
          <div className="style-title">
            <div className="vertical-line"></div>
            <h2 className="title">Expliquez en détail votre projet</h2>
          </div>
          <textarea id="description" name="description" rows="5" required></textarea>
        </div>

        <div className="input-group">
          <div className="style-title">
            <div className="vertical-line"></div>
            <h2 className="title">Quel est votre budget ? </h2>
          </div>
          <input type="text" id="budget" name="budget" required />
        </div>

        <button type="submit" className="btn">Publier un projet</button>
      </form>
    </div>
  );
};

export default Accueil;
