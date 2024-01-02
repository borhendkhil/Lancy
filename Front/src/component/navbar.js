import React, { useContext,useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import the Link component from react-router-dom
import logo from '../res/logohor.png';
import './navbar.css';

const Navbar = ({ Role }) => {
    const isAuthenticated = localStorage.getItem('token');
    return (
        <nav>
            <div>
                <Link to="/"> 
                    <img src={logo} alt="Logo" />
                </Link>
            </div>
            <div>
                <ul>
                    {Role === 'Freelance' ? (
                        <>
                            <li><Link className='auth' to="/auth">SE CONNECTER</Link></li>
                            <li>CONTACTER-NOUS</li>
                        </>
                    ) : (
                        <>
                            <li>ITEM 1</li>
                            <li>ITEM 2</li>
                        </>
                    )}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
