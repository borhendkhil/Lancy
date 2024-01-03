import React, { useState } from 'react';
import "./clienthome.css";
import Navbar from './navbar';

function ClientHome (){
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");
    const [description, setDescription] = useState("");
    

    const handleSubmit = (event) => {
        event.preventDefault();

        const token = localStorage.getItem("token");
        const data = {
            id_client: localStorage.getItem("UserID"),
            title: title,
            category: category,
            description: description,
            etat: "annonce",
            date: new Date()
           
        };
        console.log(data);

        fetch("http://localhost:8080/auth/annonce", {
            method: "POST",
           
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(result => {
           
            console.log(result);
            alert("Votre projet a été publié avec succès");
        })
        .catch(error => {
         
            
        });
    };

    return (
        <div><Navbar Role={"client"}/>
        <div className="container2">
            
            <div className="style-title">
                <div className="vertical-line"></div>
                <h2 className="title">Publier un projet</h2>
            </div>

            <form onSubmit={handleSubmit}>
                <div className="input-group">
                    <input type="text" id="title" name="title" placeholder="Titre" required value={title} onChange={(event) => setTitle(event.target.value)} />
                </div>

                <div className="input-group">
                    <div className="style-title">
                        <div className="vertical-line"></div>
                        <h2 className="title">Sélectionnez la catégorie qui se rapproche le plus de votre besoin</h2>
                    </div>
                    <select id="category" name="category" required value={category} onChange={(event) => setCategory(event.target.value)}>
                        <option value="">Choisir une catégorie</option>
                        <option value="Developpment web">Developpment web</option>
                        <option value="Developpment mobile">Developpment mobile</option>
                        <option value="Design Graphique">Design Graphique</option>
                    </select>
                </div>

                <div className="input-group">
                    <div className="style-title">
                        <div className="vertical-line"></div>
                        <h2 className="title">Expliquez en détail votre projet</h2>
                    </div>
                    <textarea id="description" name="description" rows="5" required value={description} onChange={(event) => setDescription(event.target.value)}></textarea>
                </div>

                

                <button type="submit" className="btn">Publier un projet</button>
            </form>
        </div>
        </div>
    );
};

export default ClientHome;

