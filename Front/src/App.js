import React from 'react';
import { Home } from './component/home';


/*import { Postule } from './component/Postule';
import { Appbar } from './component/appBar';
*/

import './App.css';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './component/navbar';
import SignInUpForm from './component/auth';


function App() {

   /* hethi el set up mta3 page postule 
     <Route path='/postule' Component={Postule} />
    
     */
  return (
   
    <div className="App">
    

  
   <Router>
    <Routes>
    <Route path='/' Component={Home} />
    <Route path='/auth' Component={SignInUpForm} />

  
   

    </Routes>
   </Router>
   
 
    </div>
    
  );
}

export default App;
