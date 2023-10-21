import React, { useState } from 'react';
import './offer.css';

export function Offer() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [data, setData] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('http://localhost:8080/annonce', {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify({
                title: title,
                description: description
              })
        })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error(error));
        console.log(`Title: ${title}, Description: ${description}`);
    };


    return (
        <div>
            <h1>Create an Offer</h1>
            <form onSubmit={handleSubmit}>
                
                    <p class="label">Title</p>
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
               
                    <p class="label">Description</p>
           
               
                    <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
                
                   
                <button type="submit">Add offer</button>
            </form>
        </div>
    );
}
