import { Container, Paper } from '@mui/material';
import React, { useState, useEffect } from 'react';

function Postule() {
  const [annoce, setAnnoce] = useState([]);
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
        setAnnoce(result);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <Container>
      <h1>LES ANNONCES</h1>
      <Paper elevation={3} style={paperStyle}>
        {annoce.map(annoce => (
          <Paper elevation={3} style={paperStyle} key={annoce.id}>
            title: {annoce.title}
            description: {annoce.description}
          </Paper>
        ))}
      </Paper>
    </Container>
  );
}

export default Postule;
