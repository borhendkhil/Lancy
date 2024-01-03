import React, { useContext, useEffect } from 'react';
import { Link,  } from 'react-router-dom'; 
import logo from '../res/logohor.png';
import './navbar.css';


const Navbar = ({ Role }) => {
   



    const handleLogout = () => {
        const confirmLogout = window.confirm("Are you sure you want to logout?");
        if (confirmLogout) {
            localStorage.removeItem('Role');
            localStorage.removeItem('userId');
            localStorage.removeItem('token');
            window.location.href = '/';
        }
    };

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
                                Profile
                                <div className="dropdown-content">
                                    
                                    <a href="/parametres">Edit Profile</a>
                                    <div onClick={handleLogout}>Se deconnecter</div>
                                </div>
                            </li>
                        </>
                    ) : Role === 'client' ? (
                        <>
                            <li className="dropdown">
                                <a href="/projects">Projets</a>
                            </li>
                            <li className="dropdown">
                                Profile
                                <div className="dropdown-content">
                                <div className="dropdown-content">
                                <a href="/parametres">Edit Profile</a>
                                    <div onClick={handleLogout}>Se deconnecter</div>
                                </div>
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
