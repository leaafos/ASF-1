import React from 'react';
import "../../styles/sports.css";

const Fitness = () => {
  return (
    <div>
        <div className='header fitness'>
            <div className='nom-sport'>
                <h1>FITNESS / GYM / BIEN ÊTRE</h1>
            </div>
            <div className='saison'>
                <h2>SAISON 2024-2025</h2>
            </div>
        </div>
        <div className='infos'>
            <h2>QUELQUES INFORMATIONS</h2>
            <hr className='ligne-titre'></hr>
            <div className='methodes'>
                <h4>AVANT L'INSCRIPTION</h4>
                <p><b>+ DE 18 ANS ET ADULTES</b><br/><br/><b>Fitness – Gym Fitness : </b>travail de renforcement musculaire général du corps avec petit matériel (haltères, élastibands …) et/ou avec le poids du corps.<br/><br/><b>Fitness / Step :</b> Sur une musique rythmée, vous devez enchaîner les pas d’une chorégraphie créée par le(la) coach : monter et descendre, de face ou de côté, pied à plat ou sur la pointe… En somme, le step se rapproche d’une séance d’aérobic, à la différence près que la hauteur de la planche permet un travail de musculation plus en profondeur et offre une grande variété de mouvements.<br/><br/><b>Fit' ballet : </b>crée le lien entre le Fitness et la Danse Classique en offrant une pratique alliant des mouvements de renforcement de Fitness avec la gestuelle gracieuse du Ballet. C’est une méthode originale d’exercices autant rapides et cardiaques que doux et profonds inspirés par le ballet, la barre au sol, le yoga. C’est une façon fabuleuse et fun d’être fit’, musclé, délié tout en travaillant en longueur et avec grâce. On brûle les calories en renforçant le mental et le physique. Aucune expérience de danse n’est nécessaire.<br/><br/><b>Pilates : </b> renforcement des muscles profonds, responsables de la posture. Les muscles profonds sont les muscles du centre, qui se situent entre les côtes et le bassin, et tout autour de la colonne vertébrale (abdominaux, plancher pelvien et les muscles du dos). Ils constituent le centre d’énergie du corps, qui permet d’être plus fort et plus stable. Discipline permettant d’améliorer la conscience de son corps, de sa force et de ses limites pour mieux s’en servir.<br/><br/><b>Stretching : </b>Assouplissement, étirement musculaire, relaxation.<br/><br/><b>Cardioboxing : </b>méthode d’entrainement très intense qui combine les mouvements classiques de boxe à un entrainement cardio. Basé sur les techniques de combat de boxe dans le vide appelés « shadow training » ainsi que des entrainements sur des sacs de frappe mais sans combat direct.<br/><br/><b>Gym Sénior : </b> Sollicite les muscles et les articulations. Elle regroupe divers exercices qui permettent de travailler la motricité, l’équilibre et la coordination des mouvements parfaitement adapté aux capacités physiques des personnes de plus de 60 ans. Ces mouvements tonifient l’ensemble de la masse musculaire, sans pour autant exiger des efforts intensifs. Les séances sont supervisées par un coach sportif qui veille au bien-être de tous les participants.<br/> <br/><b>Yoga Vinyasa : </b>Yoga dynamique et sportif dans lequel les élèves enchaînent généralement de manière fluide différentes séries de postures. Ces enchaînements sont souvent nommés Vinyasa Flow. Alors que le Hatha yoga (voir section Yoga) est calme et travaille à recentrer votre esprit, le Vinyasa est plus physique et travaille votre force ainsi que vos capacités mentales. Comme de nombreuses formes de yoga, la respiration est synchronisée avec les postures physiques pour un maximum d'avantages.</p>
            </div>
            <h4>LES ACTIVITÉS PROPOSÉES SE PRATIQUENT EN SALLE UNIQIUEMENT AVEC DES CHAUSSURES D'INTÉRIEUR ADAPTÉES OU EN CHAUSSETTES.</h4>
            <div className='entrainements'>
                <div className='titre-entrainements'>
                    <h2>ENTRAÎNEMENTS</h2>
                    <div>
                        <p><b>Les premières séances d’entrainements se tiendront à partir du Lundi 04 Septembre 2023</b></p>
                    </div>
                </div>
                <hr className='ligne-titre'></hr>
                <div className='entrainement-ligne'>
                    <h4>FITNESS + 18 ANS</h4>
                    <p><b>SALLE BIEN-ÊTRE</b><br/><br /><b>SALLE POLYVALENTE</b><br/><br />Gymnase du Parc 7 avenue du Parc 92260 Fontenay-aux-Roses <br/><br/><b>SALLE DE DANSE</b><br/><br/><b>SALLE DE GYM</b><br/><br/>Gymnase Jean Fournier 7 Rue des Potiers, 92260 Fontenay-aux-Roses</p>
                    <p><b>LUNDI 12H30-13H30</b> <i> (Natasha)</i><br/><br/><b>LUNDI 19H00 - 20H00</b> <i> (Will)</i><br/><b>JEUDI 12H30 - 13H30</b><i> (Natasha)</i><br/><b>19H30 - 20H30</b><i> (Stéphanie)</i><br/><br/><b>MARDI 20H00 - 21H00</b><br/><b>JEUDI 09H00 - 10H00</b><br/><b>VENDREDI 09H15 - 10H15</b><i> (Isabelle)</i><br/><br/><b>MARDI 12H30 - 13H30</b><i> (Natasha)</i><br/><b>VENDREDI 12H30 - 13H30</b><i> (Natasha)</i><br/><b>MERCREDI 20H00 - 21H00</b><i> (Claudia)</i></p>
                </div>
                <hr className='ligne'></hr>
                <div className='entrainement-ligne'>
                    <h4>STEP / FITNESS + 18 ANS</h4>
                    <p><b>SALLE POLYVALENTE</b><br /><br />Gymnase du Parc 7 avenue du Parc 92260 Fontenay-aux-Ros</p>
                    <p><b>LUNDI 18H00 - 19H00</b></p>
                </div>
                {/*<hr className='ligne'></hr>*/}
                <hr className='ligne'></hr>
                <div className='entrainement-ligne'>
                    <h4>PILATES + 18 ANS</h4>
                    <p><b>SALLE DE DANSE <br/><br/>DOJO 1</b><br /><br />Gymnase du Parc 7 avenue du Parc 92260 Fontenay-aux-Roses<br/><br/><b>SALLE POLYVALENTE</b><br/><br/>Gymnase du Parc 7 avenue du Parc 92260 Fontenay-aux-Roses</p>
                    <p><b>MARDI 08H00-10H00<br />MARDI 20H00-22H00 </b><i> (Sophie)</i><br/><br/><b>JEUDI 20H30 - 21H30</b><i> (Stéphanie)</i></p>
                </div>
                <hr className='ligne'></hr>
                <div className='entrainement-ligne'>
                    <h4>GYM SÉNIORS 60 ANS ET +</h4>
                    <p><b>SALLE DE DANSE</b><br /><br />Gymnase Jean Fournier 7 Rue des Potiers, 92260 Fontenay-aux-Roses</p>
                    <p><b>MARDI 10H00-12H00</b><i> (Isabelle)</i>< br/><b>VENDREDI 18H30-20H00</b><i> (Isabelle)</i><br/><b>VENDREDI 11H15 - 12H15</b><i>(Stéphanie)</i></p>
                </div>
                <hr className='ligne'></hr>
                <div className='entrainement-ligne'>
                    <h4>FIT' BALLET + 18 ANS</h4>
                    <p><b>SALLE DE DANSE</b><br /><br />Gymnase Jean Fournier 7 Rue des Potiers, 92260 Fontenay-aux-Roses</p>
                    <p><b>MARDI 19H00-20H00</b><i> (Isabelle)</i></p>
                </div>
                <hr className='ligne'></hr>
                <div className='entrainement-ligne'>
                    <h4>STRETCHING + 18 ANS</h4>
                    <p><b>SALLE DE GYM</b><br /><br />Gymnase Jean Fournier 7 Rue des Potiers, 92260 Fontenay-aux-Roses</p>
                    <p><b>MERCREDI 21H00-22H00</b><i> (Claudia)</i></p>
                </div>
                <hr className='ligne'></hr>
                <div className='entrainement-ligne'>
                    <h4>CARDIOBOXING + 18 ANS</h4>
                    <p><b>SALLE DE REUNION</b><br /><br />Gymnase du Parc 7 avenue du Parc 92260 Fontenay-aux-Roses</p>
                    <p><b>JEUDI 19H30-20H30</b><i> (Marie)</i></p>
                </div>
                <hr className='ligne'></hr>
                <div className='entrainement-ligne'>
                    <h4>YOGA VINYASA + 18 ANS</h4>
                    <p><b>SALLE DE REUNION</b><br /><br />Gymnase du Parc 7 avenue du Parc 92260 Fontenay-aux-Roses</p>
                    <p><b>JEUDI 20H30-21H30</b><i> (Marie)</i></p>
                </div>
                <hr className='ligne'></hr>
                <div className='entrainement-ligne'>
                    <h4>GYM FITNESS + 18 ANS</h4>
                    <p><b>HALLE</b><br /><br />Gymnase de la Roue 10 Rue des Hautes Sorrières, 92260 Fontenay-aux-Roses</p>
                    <p><b>VENDREDI 19H15-20H15</b><i> (Nathalie)</i></p>
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
                        <p><b>TOUS LES COURS</b></p>
                        <p><i>(y compris 1 séance Gym sénior et Fit'ballet)</i></p>
                        <p className='prix-cotisation'><b>210€</b></p>
                    </div>
                    <div className='case-cotisation'>
                        <p><b>1 SÉANCE SÉNIORS / SEMAINE</b></p>
                        <p className='prix-cotisation'><b>100€</b></p>
                    </div>
                    <div className='case-cotisation'>
                        <p><b>2 SÉANCES SÉNIORS / SEMAINE</b></p>
                        <p className='prix-cotisation'><b>157€</b></p>
                    </div>
                </div>
            </div>
            <h2>CONTACTS / RENSEIGNEMENTS</h2>
            <hr className='ligne-titre'></hr>
            <div className='contacts'>
                <h4>PRÉSIDENTE HÉLÈNE CHATEL : </h4>
                <span className='label'>Mail : </span>
                <span className='email'> asfculturephysique@gmail.com</span>
            </div>
        </div>
    </div>
  );
};

export default Fitness;