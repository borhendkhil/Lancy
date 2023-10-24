import { Container, Paper, Button } from '@mui/material';
import React, { useState, useEffect } from 'react';

export function Postule() {
  const [annonces, setAnnonces] = useState([]);
  const paperStyle = {
    elevation: 3,
    margin: "10px",
    padding: "15px",
    textAlign: "left"
  };

  useEffect(() => {
    // Fetch data from your API
    fetch('http://localhost:8080/annonce')
      .then((response) => response.json())
      .then((result) => {
        setAnnonces(result);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const handlePostulerClick = (annonceId) => {
    // Handle the "Postuler" action for the selected annonce
    // You can add your logic here, e.g., opening a modal for application submission.
    console.log(`Postuler clicked for annonce ID ${annonceId}`);
  };

  return (
    <Container>
      <h1>LES ANNONCES</h1>
      {annonces.map(annonce => (
        <Paper elevation={3} style={paperStyle} key={annonce.id}>
          <div>
            <strong>Title: {annonce.title}</strong>
          </div>
          <div>
            Description: {annonce.description}
          </div>
       
          <Button
            variant="contained"
            color="primary"
            style={{ backgroundColor: '#FF7704',margin:'10px',position: 'relative',left:'900px'}}
            onClick={() => handlePostulerClick(annonce.id)}

          >
            Postuler
          </Button>
        </Paper>
      ))}
    </Container>
  );
}

;