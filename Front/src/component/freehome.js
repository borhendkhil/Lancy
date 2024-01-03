import React, { useState, useEffect } from 'react';
import Navbar from './navbar';
import './freehome.css';

function FreeHome() {
    const [showCategories, setShowCategories] = useState(false);
    const [annonces, setAnnonces] = useState([]);
    const [applyingForJobId, setApplyingForJobId] = useState(null);
    const [motivation, setMotivation] = useState('');

    useEffect(() => {
        fetch('http://localhost:8080/auth/annonce', {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then(response => response.json())
        .then(data => setAnnonces(data))
        .catch(error => console.error(error));
    }, []);

    const applyForJob = (id_annonce, motivation) => {
        const id_freelancer = localStorage.getItem('UserID');
        const date = new Date().toISOString();
        const body ={ 
                id_annonce: id_annonce,
                id_freelancer: id_freelancer,
                date: date,
                motivation: motivation
        }

        fetch('http://localhost:8080/auth/postuler', {
                method: 'POST',
                headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${localStorage.getItem('token')}`
                },
                body: JSON.stringify(body)
        })
        .then(response => response.json())
        .then(data => {
                if (data.success) {
                        const message = 'Positive response received';
                        document.getElementById('message').textContent = message;
                } else {
                        const message = 'Error response received';
                        document.getElementById('message').textContent = message;
                }
        })
        .catch(error => {
                const message = error.message || 'An error occurred';
                document.getElementById('message').textContent = message;
        });
    };

    return (
        <div>
            <Navbar Role={"Freelance"}/>
            <div className='page-content'>
                <div className="sidebar">
                    <button className="categories-button" onClick={() => setShowCategories(!showCategories)}>
                        Categories
                    </button>
                </div>
                {showCategories && (
                    <div className="categories-list">
                        <label><input type="checkbox" /> Marketing</label>
                        <label><input type="checkbox" /> Design Graphique</label>
                        <label><input type="checkbox" /> Montage Video</label>
                        <label><input type="checkbox" /> Developpment Web</label>
                        <label><input type="checkbox" /> Developpment Mobile</label>
                    </div>
                )}
                <div className="job-offerings">
                    {annonces.map(annonce => (
                        <div className="job" key={annonce.id}>
                            <h2 className="job-title">{annonce.title}</h2>
                            <p className="job-category">{annonce.category}</p>
                            <p className="job-description">{annonce.description}</p>
                            {applyingForJobId === annonce.id ? (
                                <div>
                                    <input type="text" value={motivation} onChange={e => setMotivation(e.target.value)} />
                                    <div className='button' onClick={() => applyForJob(annonce.id, motivation)}>Submit</div>
                                </div>
                            ) : (
                                <div className='button' onClick={() => setApplyingForJobId(annonce.id)}>Postuler</div>
                            )}
                        </div>
                    ))}
                </div>
                <div id="message"></div>
            </div>
        </div>
    );
}

export default FreeHome;
