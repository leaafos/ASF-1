import React from 'react';
import "../../styles/sports.css";

const Handball = () => {
  return (
    <div>
        <div className='header handball'>
            <div className='nom-sport'>
                <h1>HANDBALL</h1>
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
                <p>Le handball est un sport d'équipe dynamique et intense qui combine rapidité, agilité et stratégie. Joué sur un terrain intérieur rectangulaire, le handball met en scène deux équipes de sept joueurs chacune, visant à marquer des buts en lançant un ballon dans le but adverse tout en défendant le leur. Ce sport exige des compétences en passe, en tir et en défense, tout en favorisant la coopération et l'esprit d'équipe.<br/><br/>Notre section de handball au sein de l'association sportive offre un environnement stimulant et accueillant pour tous les âges et niveaux. Nos entraîneurs expérimentés se consacrent à développer les compétences techniques individuelles telles que le dribble, la passe, et le tir, ainsi qu'à renforcer les tactiques de jeu collectif.<br/><br/>Les entraînements sont conçus pour améliorer la condition physique, la coordination et la prise de décision rapide. Nous mettons également l'accent sur le fair-play et l'esprit de camaraderie. Des matchs amicaux et des tournois internes sont régulièrement organisés, ainsi que des participations à des compétitions locales et régionales.<br/><br/>Que vous soyez débutant cherchant à découvrir les bases du handball ou joueur expérimenté visant à perfectionner votre technique et votre stratégie, notre section de handball vous propose des programmes adaptés et une ambiance conviviale. Rejoignez-nous pour partager la passion du handball et vivre des moments inoubliables sur le terrain !</p>
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
                    <h4>PREMIERS PAS 2019/2020</h4>
                    <p><b>HALLE</b><br /><br />Gymnase du Parc, 7 Avenue du Parc, 92260 Fontenay-aux-Roses</p>
                    <p><b>SAMEDI 09H00-10H00</b></p>
                </div>
                <hr className='ligne'></hr>
                <div className='entrainement-ligne'>
                    <h4>MINI HAND 2017/2018</h4>
                    <p><b>HALLE</b><br /><br />Gymnase du Parc, 7 Avenue du Parc, 92260 Fontenay-aux-Roses</p>
                    <p><b>SAMEDI 13H00-14H30</b></p>
                </div>
                <hr className='ligne'></hr>
                <div className='entrainement-ligne'>
                    <h4>M9 MIXTE 2015/2016</h4>
                    <p><b>HALLE</b><br /><br />Gymnase du Parc, 7 Avenue du Parc, 92260 Fontenay-aux-Roses</p>
                    <p><b>SAMEDI 14H00-16H00</b></p>
                </div>
                <hr className='ligne'></hr>
                <div className='entrainement-ligne'>
                    <h4>M11 MIXTE 2013/2014</h4>
                    <p><b>HALLE</b><br /><br />Gymnase du Parc 7 Avenue du Parc, 92260 Fontenay-aux-Roses<br/><br/><b>HALLE</b><br /><br/>Stade du Panorama 21 Bd du Moulin de la Tour, 92260 Fontenay-aux-Roses</p>
                    <p>Équipe 1 : <i>(parc)</i><br/><b>MARDI 17H00-18H15<br/>JEUDI 17H00-18H15</b><br/><br/>Équipe 2 :<br/><b>LUNDI 17H00-18H15</b><br/><i>(panorama)</i><br/><b>VENDREDI 17H00-18H15</b><br/><i>(parc)</i></p>
                </div>
                <hr className='ligne'></hr>
                <div className='entrainement-ligne'>
                    <h4>M13 MASCULIN 2011/2012</h4>
                    <p><b>HALLE</b><br /><br/>Stade du Panorama 21 Bd du Moulin de la Tour, 92260 Fontenay-aux-Roses<br/><br/><b>HALLE</b><br /><br />Gymnase du Parc 7 Avenue du Parc, 92260 Fontenay-aux-Roses</p>
                    <p>Equipe 1 :<br/><b>LUNDI 18H15-19H30<br/>MERCREDI 18H15-19H30</b><br/><i> (panorama)</i><br/><b>VENDREDI 18H15-19H30</b><br/><i> (parc)</i><br/><br/>Equipe 2 : <i>(panorama)</i><br/><b>LUNDI 18H15-19H30</b><br/><b>MERCREDI 18H15-19H30</b><br/></p>
                </div>
                <hr className='ligne'></hr>
                <div className='entrainement-ligne'>
                    <h4>M15 MASCULIN 2009/2010</h4>
                    <p><b>HALLE</b><br /><br/>Gymnase René Rousseau (Malakoff) 10bis Av. Augustin Dumont, 92260 Fontenay-aux-Roses<br/><br/><b>HALLE</b><br /><br/>Gymnase du Parc 7 Avenue du Parc, 92260 Fontenay-aux-Roses<br/><br/><b>HALLE</b><br /><br/>Stade du Panorama 21 Bd du Moulin de la Tour, 92260 Fontenay-aux-Roses</p>
                    <p>Équipe 1 : <br/><b>MARDI 19H30-21H00<br/><i>(René Rousseau)</i><br/>JEUDI 18H15-19H30</b><br/><b>VENDREDI 19H30-21H00</b><br/><i>(parc)</i><br/><br/>Équipe 2 : <i>(panorama)</i><br/><b>MARDI 19H30-21H00</b><br/><i>(René Rousseau)</i><br/><b>JEUDI 18H15-19H30</b><br/><i>(parc)</i><br/><br/>Équipe 3 : <i>(panorama)</i><br/><b>LUNDI 19H30-21H00<br/>MERCREDI 17H00-18H15</b></p>
                </div>
                <hr className='ligne'></hr>
                <div className='entrainement-ligne'>
                    <h4>M18 MASCULIN 2006/2007/2008</h4>
                    <p><b>HALLE</b><br /><br/>Gymnase René Rousseau (Malakoff) 10bis Av. Augustin Dumont, 92260 Fontenay-aux-Roses<br/><br/><b>HALLE</b><br /><br />Gymnase du Parc 7 Avenue du Parc, 92260 Fontenay-aux-Roses<br/><br/><b>HALLE</b><br /><br/>Stade du Panorama 21 Bd du Moulin de la Tour, 92260 Fontenay-aux-Roses</p>
                    <p>Équipe 1 :<br/><b>MARDI 19H30-21H00<br/>JEUDI 19H30-21H00</b><br/><br/>Équipe 2 :<br/><b>MERCREDI 19H30-21H00</b></p>
                </div>
                <hr className='ligne'></hr>
                <div className='entrainement-ligne'>
                    <h4>M18 MASCULIN 2006/2007/2008</h4>
                    <p><b>HALLE</b><br /><br />Gymnase du Parc 7 Avenue du Parc, 92260 Fontenay-aux-Roses<br/><br/><b>HALLE</b><br /><br/>Stade du Panorama 21 Bd du Moulin de la Tour, 92260 Fontenay-aux-Roses</p>
                    <p>Équipe 1 :<br/><b>LUNDI 21H00-22H3</b><br/><i>(panorama)</i><br/><b>MARDI 21H00-22H30<br/>JEUDI 21H00-22H30</b><br/><i>(parc)</i><br/><br/>Équipe 2 :<br/><b>LUNDI 21H00-22H00<br/>MERCREDI 21H00-22H30</b><br/><i>(panorama)</i><br/><b>VENDREDI 21H00-22H30</b><br/><i>(parc)</i></p>
                </div>
                <hr className='ligne'></hr>
                <div className='entrainement-ligne'>
                    <h4>LOISIRS ADULTES</h4>
                    <p><b>HALLE</b><br /><br />Gymnase du Parc 7 Avenue du Parc, 92260 Fontenay-aux-Roses</p>
                    <p><b>SAMEDI 10H00-12H00</b></p>
                </div>
                <hr className='ligne'></hr>
                <div className='entrainement-ligne'>
                    <h4>HAND'FIT MIXTE</h4>
                    <p><b>HALLE</b><br /><br />Gymnase du Parc 7 Avenue du Parc, 92260 Fontenay-aux-Roses</p>
                    <p><b>SAMEDI 10H00-12H00<br/>SAMEDI 09H00-10H00</b></p>
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
                        <p><b>PREMIERS PAS / MINI HAND (3 - 4 ANS)</b></p>
                        <p className='prix-cotisation'><b>150€</b></p>
                    </div>
                    <div className='case-cotisation'>
                        <p><b>MOINS DE 9 ANS</b></p>
                        <p className='prix-cotisation'><b>190€</b></p>
                    </div>
                    <div className='case-cotisation'>
                        <p><b>MOINS DE 11 ANS</b></p>
                        <p className='prix-cotisation'><b>200€</b></p>
                    </div>
                </div>
                <div className='ligne-cotisations'>
                    <div className='case-cotisation'>
                        <p><b>MOINS DE 13 ANS</b></p>
                        <p className='prix-cotisation'><b>205€</b></p>
                    </div>
                    <div className='case-cotisation'>
                        <p><b>MOINS DE 15 ANS MASCULINS</b></p>
                        <p className='prix-cotisation'><b>215€</b></p>
                    </div>
                    <div className='case-cotisation'>
                        <p><b>MOINS DE 18 ANS MASCULINS</b></p>
                        <p className='prix-cotisation'><b>225€</b></p>
                    </div>
                </div>
                <div className='ligne-cotisations'>
                    <div className='case-cotisation'>
                        <p><b>PLUS DE 15 ANS MASCULINS</b></p>
                        <p className='prix-cotisation'><b>250€</b></p>
                    </div>
                    <div className='case-cotisation'>
                        <p><b>LOISIRS MIXTE</b></p>
                        <p className='prix-cotisation'><b>165€</b></p>
                    </div>
                    <div className='case-cotisation'>
                        <p><b>HANDFIT MIXTE</b></p>
                        <p><i>2 séances - 220€</i></p>
                        <p className='prix-cotisation'><b>190€</b></p>
                        <p><i>La séance</i></p>
                    </div>
                </div>
            </div>
            <h2>CONTACTS / RENSEIGNEMENTS</h2>
            <hr className='ligne-titre'></hr>
            <div className='contacts'>
                <h4>PRÉSIDENT MICHAËL LARONDE : </h4>
                <span className='label'>Mail : </span>
                <span className='email'> contact@asf-handball.org</span>
                <span className='label'>Site Web : </span>
                <span className='email'>hhtp://asf-handball.org</span>
            </div>
        </div>
    </div>
  );
};

export default Handball;