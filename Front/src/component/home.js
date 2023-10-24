import React from 'react';
import './home.css';
import { useNavigate} from 'react-router-dom';


export function Home() {
    const navigate = useNavigate();
    function offer () {
       navigate('/offer');
        }
    return (
        <div>
      
            <h1>Home page</h1>
            <div class="button" onClick={()=>offer()}>Create an offer</div>
            
        </div>
    );
}
;
