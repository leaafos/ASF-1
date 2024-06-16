import React from 'react';
import "../../styles/sports.css";

const Yoga = () => {
  return (
    <div>
        <div className='header yoga'>
            <div className='nom-sport'>
                <h1>YOGA</h1>
            </div>
            <div className='saison'>
                <h2>SAISON 2024-2025</h2>
            </div>
        </div>
        <div className='infos'>
            <h2>QUELQUES INFORMATIONS</h2>
            <hr className='ligne-titre'></hr>
            <div className='methodes'>
                <h4>COURS ENSEIGNÉS </h4>
                <p>Hatha yoga dans la lignée de Madras (Professeur diplômée FNEY)<br/><br/>La séance (1h15) débute par une mise en route musculaire et respiratoire progressive, sur le chemin du lâcher-prise.<br/>Elle se poursuit par la pratique posturale qui mobilise les cinq sens de la colonne vertébrale de façon dynamique et statique, dans le respect de chaque pratiquant.<br/><br/>L'accent est mis sur l'attention permanente au souffle et au ressenti.<br/>Les bénéfices de cette séquence d'exercices sont pleinement intégrés lors de la détente.<br/>Puis le travail respiratoire est le prélude à l'assise, grâce au calme intérieur et à la verticalité que la séance a permis d'apprivoiser.</p>
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
                    <h4>18 ANS ET +</h4>
                    <p><b>SALLE BIEN ÊTRE</b><br /><br />Gymnase du Parc 92260 Fontenay-aux-Roses</p>
                    <p><b>MARDI 18H30-19H45 <br/>MARDI 20H30-21H15 <br/>MERCREDI 12H15-13H30 <br/>JEUDI 10H30-11H45 <br/>VENDREDI 17H30-18H45 <br/>VENDREDI 19H00-20H15 <br/></b></p>
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
                        <p><b>18 À 25 ANS</b></p>
                        <p className='prix-cotisation'><b>235€</b></p>
                    </div>
                    <div className='case-cotisation'>
                        <p><b>ADULTES</b></p>
                        <p className='prix-cotisation'><b>290€</b></p>
                    </div>
                </div>
            </div>
            <h2>CONTACTS / RENSEIGNEMENTS</h2>
            <hr className='ligne-titre'></hr>
            <div className='contacts'>
                <h4>PRÉSIDENT JEAN FRANCOIS BRESSE</h4>
                <span className='label'>Mail : </span>
                <span className='email'> jeff.bresse@orange.fr</span>
            </div>
            <div className='contacts'>
                <h4>PROFESSEUR (DIPLÔMÉE FNEY) MME VERNARDET : </h4>
                <span className='label'>Mail : </span>
                <span className='email'> av_vernardet@sfr.fr</span>
            </div>
            <div className='contacts'>
                <h4>POUR D'AUTRES RENSEIGNEMENTS OU FAIRE UNE SÉANCE D'ESSAI, ENVOYEZ UN MAIL À L'ADRESSE :</h4>
                <span className='label'>Mail : </span>
                <span className='email'> fontyoga@gmail.com</span>
            </div>
        </div>
    </div>
  );
};

export default Yoga;