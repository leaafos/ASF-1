import React from 'react';
import "../../styles/sports.css";

const Karate = () => {
  return (
    <div>
        <div className='header karate'>
            <div className='nom-sport'>
                <h1>KARATE</h1>
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
                <p>« La voie de la main vide »<br/><br/>Le Karaté   est un art martial Japonais qui consiste en l’utilisation de techniques à la   fois offensives et défensives faisant appel à toutes les parties du corps :   mains, pieds, etc.<br/><br/>Le Karaté   enfant est un véritable outil d’éveil et d’éducation. Les enchainements de   techniques lui permettent de développer réflexes, coordination et de se   repérer dans l’espace. La concentration, inhérente au Karaté, permet à   l’enfant de canaliser son énergie. Son évolution sportive et la socialisation   due à la pratique augmente sa confiance en lui.</p>
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
                    <h4>9 - 14 ANS</h4>
                    <p><b>DOJO 1 </b><br /><br />Gymnase Jean Fournier 7 Rue des Potiers, 92260 Fontenay-aux-Roses<br/><br/><b>SALLE ARTS MARTIAUX</b><br /><br/>Collège les Ormeaux 15 Rue d'Estienne d'ORves, 92260 Fontenay-aux-Roses</p>
                    <p><b>LUNDI 18H00-19H00 <br/><br/><br/><br/>JEUDI 18H00 - 19H00</b></p>
                </div>
                <hr className='ligne'></hr>
                <div className='entrainement-ligne'>
                    <h4>15 ANS ET + ADULTES</h4>
                    <p><b>DOJO 1</b><br /><br />Gymnase Jean Fournier 7 Rue des Potiers, 92260 Fontenay-aux-Roses <br/><br/><b>SALLE ARTS MARTIAUX</b><br /><br/>Collège les Ormeaux 15 Rue d'Estienne d'ORves, 92260 Fontenay-aux-Roses</p>
                    <p><b>LUNDI 19H00-20H30< br/><br/><br/><br/>JEUDI 19H00 - 20H30</b></p>
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
                        <p><b>6 - 14 ANS</b></p>
                        <p className='prix-cotisation'><b>230€</b></p>
                    </div>
                    <div className='case-cotisation'>
                        <p><b>15 ET + ADULTES</b></p>
                        <p className='prix-cotisation'><b>250€</b></p>
                    </div>
                </div>
                <h4><b>LICENSE COMPRISE - 37€</b></h4>
            </div>
            <h2>CONTACTS / RENSEIGNEMENTS</h2>
            <hr className='ligne-titre'></hr>
            <div className='contacts'>
                <h4>PROFESSEUR IDIR GUEDJALI :</h4>
                <span className='label'>Mail : </span>
                <span className='email'> guedjaliidir@yahoo.fr</span>
                <span className='label'>Téléphone : </span>
                <span className='email'>07 62 18 25 04</span>
            </div>
        </div>
    </div>
  );
};

export default Karate;