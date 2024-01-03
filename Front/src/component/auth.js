import React, { useState} from 'react';


import "./auth.css";
const SignInUpForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [userType, setUserType] = useState('freelancer');
    const [isSignUpMode, setIsSignUpMode] = useState(false);
    const [authendpoint, setAuthendpoint] = useState('http://localhost:8080/auth/registerFreelancer');
 

    const handleSignUpClick = () => {
        setIsSignUpMode(true);
    };

    const handleSignInClick = () => {
        setIsSignUpMode(false);
    };

    const handleSignUp = () => {
        console.log(firstName);
        console.log(lastName);
        console.log(email);
        console.log(password);

        const userData = {
            name: lastName,
            firstName: firstName,
            mail: email,
            password: password,
            
        };
        if (userType === 'client'){
         setAuthendpoint('http://localhost:8080/auth/register');
         }
        else if (userType === 'freelancer'){
        setAuthendpoint('http://localhost:8080/auth/registerFreelancer');
        }

        fetch(authendpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        })
        .then(response => response.json())
        .then(data => {
            
            
            
            setIsSignUpMode(false);
          
       
          
            
        })
        .catch(error => {
            
            console.error(error);
        });
    };

    const handleSignIn = () => {
        console.log(email);
        console.log(password);

        const userData = {
            mail:email,
            password:password
        };

        fetch('http://localhost:8080/auth/authenticate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        })
        .then(response => response.json())
        .then(data => {
            
            console.log(data.token);
            
            localStorage.setItem('token', data.token);
           
            
            
    
        
           //window.location.href = "/";
            
        })
        .catch(error => {
            
            console.error(error);
        });
    };

    return (
        <div className={`container ${isSignUpMode ? 'sign-up-mode' : ''}`}>
            <div className="forms-container">
                <div className="signin-signup">
                    <form action="#" className="sign-in-form">
                        <h2 className="title">Se connecter</h2>
                        <div className="input-field">
                            <label className="switch"></label>
                            <input type="email" placeholder="Email" onChange={e => setEmail(e.target.value)}/>
                        </div>
                        <div className="input-field">
                            <i className="fas fa-lock"></i>
                            <input type="password" placeholder="Mot de passe"onChange={e => setPassword(e.target.value)} />
                        </div>
                        <div className="btn" onClick={handleSignIn}>Se connecter</div>
                    </form>
                    <form className="sign-up-form">
                        <h2 className="title">S'inscrire</h2>
                        <div className="input-field">
                            <i className="fas fa-user"></i>
                            <input type="text" placeholder="Prenom" onChange={e => setFirstName(e.target.value)} />
                        </div>
                        <div className="input-field">
                            <i className="fas fa-user"></i>
                            <input type="text" placeholder="Nom" onChange={e => setLastName(e.target.value)}/>
                        </div>

                        <div className="input-field">
                            <i className="fas fa-envelope"></i>
                            <input type="email" placeholder="Email" onChange={e => setEmail(e.target.value)}/>
                        </div>
                        <div className="input-field">
                            <i className="fas fa-lock"></i>
                            <input type="password" placeholder="Mot de passe" onChange={e => setPassword(e.target.value)} />
                        </div>

                        <div className="switcher">
                            <input type="radio" id="option1" name="switch" checked={userType === 'client'} onChange={() => setUserType('client')} />
                            <label for="option1">Client</label>

                            <input type="radio" id="option2"  name="switch" checked={userType === 'freelancer'} onChange={() => setUserType('freelancer')} />
                            <label for="option2">Freelancer</label>
                        </div>  
                                                    
                        <div className="btn" onClick={handleSignUp}>S'inscrire</div>
                    </form>
                        </div>
            </div>

            <div className="panels-container">
                <div className="panel left-panel">
                    <div className="content">
                        <h3>Nouveau ici ?</h3>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
                            ex ratione. Aliquid!
                        </p>
                        <button className="btn transparent" id="sign-up-btn" onClick={handleSignUpClick}>
                            S'inscrire
                        </button>
                    </div>

                </div>
                <div className="panel right-panel">
                    <div className="content">
                        <h3>Déjà membre ?</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                            laboriosam ad deleniti.
                        </p>
                        <button className="btn transparent" id="sign-in-btn" onClick={handleSignInClick}>
                            Se connecter
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignInUpForm;
