import React, { useState } from 'react';
import "./clienthome.css";
import Navbar from './navbar';

function ClientHome (){
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");
    const [description, setDescription] = useState("");
    const [budget, setBudget] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        const token = localStorage.getItem("token");
        const data = {
            title: title,
            category: category,
            description: description,
            budget: budget
        };

        fetch("/publish", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(result => {
            // Handle the response from the API
            console.log(result);
        })
        .catch(error => {
            // Handle any errors
            console.error(error);
        });
    };

    return (
        <div> <Navbar Role={"client"}/>
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
                    <textarea id="description" name="description" rows="5" required value={description} onChange={(event) => setDescription(event.target.value)}></textarea>
                </div>

                <div className="input-group">
                    <div className="style-title">
                        <div className="vertical-line"></div>
                        <h2 className="title">Quel est votre budget ? </h2>
                    </div>
                    <input type="text" id="budget" name="budget" required value={budget} onChange={(event) => setBudget(event.target.value)} />
                </div>

                <button type="submit" className="btn">Publier un projet</button>
            </form>
        </div>
        </div>
    );
};

export default ClientHome;

