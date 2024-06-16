import React from 'react';
import "../../styles/sports.css";

const Escrime = () => {
  return (
    <div>
        <div className='header escrime'>
            <div className='nom-sport'>
                <h1>ESCRIME</h1>
            </div>
            <div className='saison'>
                <h2>SAISON 2024-2025</h2>
            </div>
        </div>
        <div className='infos'>
            <h2>QUELQUES INFORMATIONS</h2>
            <hr className='ligne-titre'></hr>
            <div className='methodes'>
                <h4>COURS ENSEIGNÉS</h4>
                <p>L’escrime est un sport pour tous. Avec son équipement identique pour tout le monde (un masque, une veste et une arme) il n’exclut pas, permet la mixité et l’égalité des chances.<br/><br/>L’escrime est un sport de combat. Il s’agit de l’art de toucher un   adversaire avec la pointe ou le tranchant (estoc et taille) d’une arme   blanche sur les parties valables sans être touché.<br/><br/>On utilise trois types d’armes : l’épée, le sabre et le fleuret. Ces trois armes sont mixtes. Les épreuves sont individuelles ou par équipes.</p>
            </div>
            <div className='entrainements'>
                <div className='titre-entrainements'>
                    <h2>ENTRAÎNEMENTS</h2>
                    <div>
                        <p><b>Les premières séances d’entrainements se tiendront à partir du Lundi 04 Septembre 2023</b></p>
                    </div>
                </div>
                <hr className='ligne-titre'></hr>
                <div className='entrainement-ligne'>
                    <h4>ENFANTS À PARTIR DE 5 ANS</h4>
                    <p><b>(EN COURS DE MISE À JOUR)</b></p>
                </div>
                <hr className='ligne'></hr>
                <div className='entrainement-ligne'>
                <h4>ADOS/ADULTES</h4>
                    <p><b>(EN COURS DE MISE À JOUR)</b></p>
                </div>
            </div>
            <h2>INSCRIPTIONS</h2>
            <hr className='ligne-titre'></hr>
            <div className='inscription'>
                <h4>INSCRIPTION POSSIBLE VIA LE LIEN SUIVANT :</h4>
                <span className='lien'>
                    <a href="https://asfontenaisienne.monclub.app/">
                       LIEN D'INSCRIPTION 
                    </a>
                </span>
            </div>
            <h2>COTISATIONS</h2>
            <hr className='ligne-titre'></hr>
            <div className='cotisations'>
                <h4>(EN COURS DE MISE À JOUR)</h4>
            </div>
            <h2>CONTACTS / RENSEIGNEMENTS</h2>
            <hr className='ligne-titre'></hr>
            <div className='contacts'>
                <h4>PRÉSIDENTE MARIE NAPOLITANO :</h4>
                <div className='infos-contact'>
                    <span className='label'>Mail : </span>
                    <span className='email'> escrimepourtous@gmail.com</span>
                    <span className='label'>Téléphone : </span>
                    <span className='email'> 06 15 70 80 26</span>
                    <span className='label'>Site Web : </span>
                    <span className='email'> www.escrime-pour-tous.com</span>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Escrime;