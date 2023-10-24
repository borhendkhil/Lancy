import React from 'react';
import { Home } from './component/home';
import { Offer } from './component/offer';
/*import { Postule } from './component/Postule';
import { Appbar } from './component/appBar';
*/

import './App.css';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


function App() {

   /* hethi el set up mta3 page postule 
     <Route path='/postule' Component={Postule} />
    
     */
  return (
    <div className="App">
      
   <Router>
    <Routes>
    <Route path='/' Component={Home} />
    <Route path='/offer' Component={Offer} />
  
   

    </Routes>
   </Router>
    </div>
  );
}

export default App;
