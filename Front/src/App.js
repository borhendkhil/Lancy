import React from 'react';
import { Home } from './pages/home';
import { Offer } from './pages/offer';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
   <Router>
    <Routes>
    <Route path='/' Component={Home} />
    <Route path='/offer' Component={Offer} />
    </Routes>
   </Router>
  );
}

export default App;
