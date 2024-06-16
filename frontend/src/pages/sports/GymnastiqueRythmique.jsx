import React from 'react';
import "../../styles/sports.css";

const GymnastiqueRythmique = () => {
  return (
    <div>
        <div className='header gymnastiqueRythmique'>
            <div className='nom-sport'>
                <h1>GYMNASTIQUE RYTHMIQUE</h1>
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
                <p>La Gymnastique Rythmique, discipline esthétique et   chorégraphique, développe le rythme, l’habilité, la souplesse et la   coordination. <br/>Ballons, Cordes, Cerceaux, Rubans et Massues :<br/><br/>La manipulation de ces engins fait appel à la grâce,   l’expressivité et la créativité.</p>
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
                    <h4>4 - 5 ANS LOISIR</h4>
                    <p><b>SALLE GYMNASTIQUE</b><br /><br />Gymnase Jean Fournier 7 Rue des Portiers, 92260 Fontenay-aux-Roses</p>
                    <p><b>MERCREDI 15H30-16H30</b></p>
                </div>
                <hr className='ligne'></hr>
                <div className='entrainement-ligne'>
                    <h4>6 - 8 ANS LOISIR</h4>
                    <p><b>SALLE GYMNASTIQUE</b><br /><br />Gymnase Jean Fournier 7 Rue des Portiers, 92260 Fontenay-aux-Roses</p>
                    <p><b>MERCREDI 14H30-15H30</b></p>
                </div>
                <hr className='ligne'></hr>
                <div className='entrainement-ligne'>
                    <h4>8 - 10 ANS LOISIR</h4>
                    <p><b>SALLE GYMNASTIQUE</b><br /><br />Gymnase Jean Fournier 7 Rue des Portiers, 92260 Fontenay-aux-Roses</p>
                    <p><b>MERCREDI 13H00-14H30</b></p>
                </div>
                <hr className='ligne'></hr>
                <div className='entrainement-ligne'>
                    <h4>7 - 11 ANS LOISIR</h4>
                    <p><b>HALLE</b><br /><br />Stade du Panorama 21 Bd du Moulin de la Tour, 92260 Fontenay-aux-Roses</p>
                    <p><b>SAMEDI 14H30-16H00</b></p>
                </div>
                <hr className='ligne'></hr>
                <div className='entrainement-ligne'>
                    <h4>- DE 10 ANS COMPÉTITION</h4>
                    <p><b>HALLE</b><br /><br />Stade du Panorama 21 Bd du Moulin de la Tour, 92260 Fontenay-aux-Roses</p>
                    <p><b>SAMEDI 09H00-11H00</b></p>
                </div>
                <hr className='ligne'></hr>
                <div className='entrainement-ligne'>
                    <h4>10 - 14 ANS COMPÉTITION</h4>
                    <p><b>HALLE</b><br /><br />Stade du Panorama 21 Bd du Moulin de la Tour, 92260 Fontenay-aux-Roses</p>
                    <p><b>SAMEDI 11H00-13H00</b></p>
                </div>
                <hr className='ligne'></hr>
                <div className='entrainement-ligne'>
                    <h4>GR ADULTES LOISIR</h4>
                    <p><b>HALLE</b><br /><br />Stade du Panorama 21 Bd du Moulin de la Tour, 92260 Fontenay-aux-Roses</p>
                    <p><b>SAMEDI 13H00-14H30</b></p>
                </div>
                <hr className='ligne'></hr>
                <div className='entrainement-ligne'>
                    <h4>COMPÉTIITON</h4>
                    <p><b>HALLE</b><br /><br />Gymnase collège Les Ormeaux 15 Rue d'Estienne d'Orves, 92260 Fontenay-aux-Roses</p>
                    <p><b>LUNDI 18H00-20H00</b></p>
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
            <div>
                <div className='ligne-cotisations'>
                    <div className='case-cotisation'>
                        <p><b>1 HEURE</b></p>
                        <p className='prix-cotisation'><b>270€</b></p>
                    </div>
                    <div className='case-cotisation'>
                        <p><b>1 HEURE ET DEMI</b></p>
                        <p className='prix-cotisation'><b>396€</b></p>
                    </div>
                    <div className='case-cotisation'>
                        <p><b>2 HEURES</b></p>
                        <p className='prix-cotisation'><b>420€</b></p>
                    </div>
                </div>
                <div className='ligne-cotisations'>
                    <div className='case-cotisation'>
                        <p><b>3 HEURES</b></p>
                        <p className='prix-cotisation'><b>532€</b></p>
                    </div>
                    <div className='case-cotisation'>
                        <p><b>4 HEURES</b></p>
                        <p className='prix-cotisation'><b>624€</b></p>
                    </div>
                    <div className='case-cotisation'>
                        <p><b>GR ADULTES</b></p>
                        <p className='prix-cotisation'><b>210€</b></p>
                    </div>
                </div>
                <h4>Remise de 10% à partir du 2ème enfant lors de l'inscription en ligne sur MonClub avec le code de remise FRATERIE10.</h4>
            </div>
            <h2>CONTACTS / RENSEIGNEMENTS</h2>
            <hr className='ligne-titre'></hr>
            <div className='contacts'>
                <h4>PRÉSIDENTE MYRIAM MONTLOUIS : </h4>
                <span className='label'>Mail : </span>
                <span className='email'> asf92.gym.rythmique@gmail.com</span>
            </div>
        </div>
    </div>
  );
};

export default GymnastiqueRythmique;