import React, { useState } from 'react';
import './offer.css';

export function Offer() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
       
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

;
