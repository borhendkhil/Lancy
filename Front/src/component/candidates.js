import React, { useEffect, useState } from 'react';

function Candidates() {
    const [postulerData, setPostulerData] = useState([]);
    const token = localStorage.getItem('token');

    // Function to fetch data from an API with authentication
    async function fetchData(url, token) {
        const response = await fetch(url, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        const data = await response.json();
        return data;
    }

    useEffect(() => {
        // Function to get the freelancer name and firstname
        async function getFreelancerDetails(freelancerId, token) {
            const url = `http://localhost:8080/auth/client/${freelancerId}`;
            const data = await fetchData(url, token);
            return data;
        }

        // Function to get the annonce title
        async function getAnnonceTitle(annonceId, token) {
            const url = `http://localhost:8080/auth/annonce/${annonceId}`;
            const data = await fetchData(url, token);
            return data.title;
        }

        // Function to display the postuler details
        async function displayPostulerDetails(token) {
            const url = 'http://localhost:8080/auth/postuler';
            const postulerData = await fetchData(url, token);
            const detailedPostulerData = await Promise.all(postulerData.map(async postuler => {
                const freelancerDetails = await getFreelancerDetails(postuler.id_freelancer, token);
                const annonceTitle = await getAnnonceTitle(postuler.id_annonce, token);
                return { ...postuler, freelancerDetails, annonceTitle };
            }));
            setPostulerData(detailedPostulerData);
        }

        // Call the function to display the postuler details
        displayPostulerDetails(token);
    }, [token]);

    return (
        <div>
            {postulerData.map((postuler) => {
                const { id_freelancer, id_annonce, motivation, date, freelancerDetails, annonceTitle } = postuler;
                const { name, firstname } = freelancerDetails;

                return (
                    <div key={postuler.id}>
                        <p>Freelancer: {name} {firstname}</p>
                        <p>Annonce Title: {annonceTitle}</p>
                        <p>Date: {date}</p>
                        <p>Motivation: {motivation}</p>
                        <hr />
                    </div>
                );
            })}
        </div>
    );
}

export default Candidates;