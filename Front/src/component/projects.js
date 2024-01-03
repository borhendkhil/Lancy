import React, { useEffect, useState } from 'react';
import Navbar from './navbar.js';
import './projects.css';

const Projects = () => {
    const [annonces, setAnnonces] = useState([]);
    const userID = localStorage.getItem('UserID');

    useEffect(() => {
        fetch('http://localhost:8080/auth/annonce', {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
         
            const filteredAnnonces = data.filter(annonce => annonce.id_client == userID);
            setAnnonces(filteredAnnonces);
        })
        .catch(error => console.error(error));
    }, []);

    return (
        <div className="projects-container">
            <Navbar Role={"client"}/>
            
            {annonces.map(annonce => (
                <div key={annonce.id} className="project-card">
                    <h3 className="project-title">{annonce.title}</h3>
                    <p className="project-description">{annonce.description}</p>
                    <p className="project-category">{annonce.category}</p>
                </div>
            ))}
        </div>
    );
};

export default Projects;