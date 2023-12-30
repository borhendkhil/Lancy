import React, { useContext,useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import the Link component from react-router-dom
import logo from '../res/logohor.png';
import './navbar.css';

const Navbar = () => {
    const isAuthenticated = localStorage.getItem('token');
    return (
        <nav>
            <div>
                <img src={logo} alt="Logo" />
            </div>
            <div>
                <ul>
                    
                    <li><Link className='auth' to="/auth">SE CONNECTER</Link></li>

                    <li>CONTACTER-NOUS</li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
