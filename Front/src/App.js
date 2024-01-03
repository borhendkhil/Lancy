import React, { useEffect } from 'react';
import { Home } from './component/home';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './component/navbar';
import SignInUpForm from './component/auth';
import ClientHome from './component/clienthome';
import Freehome from './component/freehome';

function App() {
  
  let Role = localStorage.getItem('Role');

  if (Role === "FREELANCER") {
    return (
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" Component={Freehome} />
            <Route path="/auth" Component={SignInUpForm} />
          </Routes>
        </Router>
      </div>
    );
  } else if (Role === "CLIENT") {
    return (
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" Component={ClientHome} />
            <Route path="/auth" Component={SignInUpForm} />
          </Routes>
        </Router>
      </div>
    );
  } else {
    return (
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" Component={Home} />
            <Route path="/auth" Component={SignInUpForm} />
          </Routes>
        </Router>
      </div>
    );
  }
}

export default App;
