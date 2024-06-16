import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/construction.css";
import BandeauConstruction from "../images/Construction/bandeau-construction.png";


const Construction = () => {
  return (
    <div>
        <div className='header-construction'>
            <img src={BandeauConstruction} alt="bandeau" ></img>
        </div>
        <div className='contenu-contruction'>
            <h1>BIENTÔT</h1>
            <p>Cette partie du site est en construction, elle sera bientôt disponible.</p>
            <button className='bouton-construction'>
                <Link to="/">
                    <b>RETOUR À L'ACCUEIL</b>
                </Link>
            </button>
        </div>
        

    </div>
  );
};

export default Construction;