import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom'; 
import logo from '../res/logohor.png';
import './navbar.css';

const Navbar = ({ Role }) => {
    
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
                            <li className="dropdown">
                                Projets
                                <div className="dropdown-content">
                                    <a href="#">Project 1</a>
                                    <a href="#">Project 2</a>
                                    <a href="#">Project 3</a>
                                </div>
                            </li>
                            <li className="dropdown">
                                Profile
                                <div className="dropdown-content">
                                    <a href="#">View Profile</a>
                                    <a href="#">Edit Profile</a>
                                </div>
                            </li>
                        </>
                    ) : Role === 'client' ? (
                        <>
                            <li className="dropdown">
                                Projets
                                <div className="dropdown-content">
                                    <a href="#">Project 1</a>
                                    <a href="#">Project 2</a>
                                    <a href="#">Project 3</a>
                                </div>
                            </li>
                            <li className="dropdown">
                                Profile
                                <div className="dropdown-content">
                                <Link>Modifer profile</Link>
                                    <Link>Message</Link>
                                    <div>Se deconnecter</div>

                                </div>
                            </li>
                        </>
                    ) : (
                        <>
                            <li><Link className='auth' to="/auth">SE CONNECTER</Link></li>
                            <li className='contact'>CONTACTER-NOUS</li>
                        </>
                    )}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
