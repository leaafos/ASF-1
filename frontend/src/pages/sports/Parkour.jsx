import React from 'react';
import "../../styles/sports.css";

const Parkour = () => {
  return (
    <div>
        <div className='header parkour'>
            <div className='nom-sport'>
                <h1>PARKOUR</h1>
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
                <p>Le parkour, ou art du déplacement est une discipline   sportive acrobatique qui consiste à franchir des obstacles urbains ou   naturels, par des mouvements rapides et agiles (course à pied, sauts, gestes   d’escalade, déplacements en équilibre, etc.) et sans l'aide de matériel.</p>
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
                    <h4>9 - 16 ANS</h4>
                    <p><b>SALLE GYMNASTIQUE</b><br /><br />Gymnase Jean Fournier 7 Rue des Potiers, 92260 Fontenay-aux-Roses</p>
                    <p><b>SAMEDI 13H00-15H00</b></p>
                </div>
                <hr className='ligne'></hr>
                <div className='entrainement-ligne'>
                    <h4>16 ANS ET +</h4>
                    <p><b>SALLE GYMNASTIQUE</b><br /><br />Gymnase Jean Fournier 7 Rue des Potiers, 92260 Fontenay-aux-Roses</p>
                    <p><b>SAMEDI 15H00-17H00</b>< br/><i>(SOUS RESERVE DU NOMBRE DE PARTICIPANTS)</i></p>
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
                <div className='ligne-cotisations'>
                    <div className='case-cotisation'>
                        <p><b>9-17 ANS ET + /ADULTES</b></p>
                        <p className='prix-cotisation'><b>300€</b></p>
                    </div>
                </div>
            </div>
            <h2>CONTACTS / RENSEIGNEMENTS</h2>
            <hr className='ligne-titre'></hr>
            <div className='contacts'>
                <h4>PROFESSEUR LANDRY LOUIS ROSE : </h4>
                <span className='label'>Mail : </span>
                <span className='email'> landrycoach@yahoo.fr</span>
            </div>
        </div>
    </div>
  );
};

export default Parkour;