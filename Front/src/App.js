import React, { useEffect } from 'react';
import { Home } from './component/home';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './component/navbar';
import SignInUpForm from './component/auth';

function App() {
  let IsAuthenticated = false;
  useEffect(() => {
    const fetchCurrentUser = async () => {
      try {
        const response = await fetch('http://localhost:8080/auth/currentUserId', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
          method: 'GET',
          mode: 'no-cors',
        });
        if (response.ok) {
          localStorage.setItem('IsAuthenticated', 'true');
        
        }
      } catch (error) {
        console.error('Error fetching current user:', error);
      }
    };

    fetchCurrentUser();
  }, []);

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

export default App;
