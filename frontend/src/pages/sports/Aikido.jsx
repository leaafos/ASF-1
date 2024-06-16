import React from "react";
import "../../styles/sports.css";

const Aikido = () => {
  return (
    <div>
      <div className="header aikido">
        <div className="nom-sport">
          <h1>AIKIDO</h1>
        </div>
        <div className="saison">
          <h2>SAISON 2024-2025</h2>
        </div>
      </div>
      <div className="infos">
        <h2>QUELQUES INFORMATIONS</h2>
        <hr className="ligne-titre"></hr>
        <div className="methodes">
          <h4>MÉTHODES ENSEIGNÉES</h4>
          <p>
            "La voie de l'union ou de l'harmonie des énergies" : (Aï : union -
            harmonie, Ki : énergie, Do : voie). <br />
            <br />
            L'Aïkido est un art martial qui comporte de nombreuses techniques à
            mains nues, ainsi que des techniques d'armes (sabre-bokken,
            bâton-jo, poignard-tanto). Il consiste à contrôler les attaques de
            ses adversaires, sans opposition ou exercice de la force, en
            utilisant des techniques d'esquive et d'immobilisation.
            <br /> <br />
            Les pratiquants peuvent découvrir un art martial d'autodéfense
            efficace et non violent. Les principes présentés durant les cours
            peuvent déboucher pour certains sur un véritable art de vivre.
            <br />
            <br /> L'Aïkido permet de développer le contrôle de soi. Tout le
            monde peut pratiquer, hommes et femmes, jeunes et adultes. Aucune
            aptitude physique particulière n'est nécessaire pour cet art martial
            en dehors d'une bonne condition générale à une pratique sportive.{" "}
            <br />
            <br />
            L’Aïkido se distingue cependant des autres arts martiaux en
            cherchant à neutraliser l'intention agressive de l'adversaire.
            L'Aïkido étant un art martial avec un objectif de dissuasion, sa
            pratique exclut toute idée de compétition.
          </p>
        </div>
        <div className="entrainements">
          <div className="titre-entrainements">
            <h2>ENTRAÎNEMENTS</h2>
            <div>
              <p>
                <b>
                  Les premières séances d’entrainements se tiendront à partir du
                  Lundi 09 Septembre 2024
                </b>
              </p>
            </div>
          </div>
          <hr className="ligne-titre"></hr>
          <div className="entrainement-ligne">
            <h4>MOINS DE 14 ANS</h4>
            <p>
              <b>DOJO 1</b>
              <br />
              <br />
              Gymnase Jean Fournier 7 Rue des Potiers, 92260 Fontenay-aux-Roses
            </p>
            <p>
              <b>MERCREDI 17H00-18H00</b>
            </p>
          </div>
          <hr className="ligne"></hr>
          <div className="entrainement-ligne">
            <h4>14-18 ANS</h4>
            <p>
              <b>DOJO 1</b>
              <br />
              <br />
              Gymnase Jean Fournier 7 Rue des Potiers, 92260 Fontenay-aux-Roses
            </p>
            <p>
              <b>MERCREDI 18H00-19H00</b>
            </p>
          </div>
          {/*<hr className='ligne'></hr>*/}
          <hr className="ligne"></hr>
          <div className="entrainement-ligne">
            <h4>ADULTES</h4>
            <p>
              <b>DOJO 1 ET DOJO 2</b>
              <br />
              <br />
              Gymnase Jean Fournier 7 Rue des Potiers, 92260 Fontenay-aux-Roses
            </p>
            <p>
              <b>
                LUNDI 20H30-22H30
                <br />
                MERCREDI 19H00-21H00
                <br />
                VENDREDI 20H00-21H00
              </b>
            </p>
          </div>
          <hr className="ligne"></hr>
          <div className="entrainement-ligne">
            <h4>ADULTES GRADÉS</h4>
            <p>
              <b>DOJO 1</b>
              <br />
              <br />
              Gymnase Jean Fournier 7 Rue des Potiers, 92260 Fontenay-aux-Roses
            </p>
            <p>
              <b>MERCREDI 21H00-22H00</b>
            </p>
          </div>
          <hr className="ligne"></hr>
          <div className="entrainement-ligne">
            <h4>ARMES (JO, BOKKEN, TANTO)</h4>
            <p>
              <b>DOJO 2</b>
              <br />
              <br />
              Gymnase Jean Fournier 7 Rue des Potiers, 92260 Fontenay-aux-Roses
            </p>
            <p>
              <b>VENDREDI 21H00-22H00</b>
            </p>
          </div>
        </div>
        <h2>INSCRIPTIONS</h2>
        <hr className="ligne-titre"></hr>
        <div className="inscription">
          <h4>INSCRIPTION POSSIBLE VIA LE LIEN SUIVANT :</h4>
          <span className="lien">
            <a href="https://asfontenaisienne.monclub.app/">
              LIEN D'INSCRIPTION
            </a>
          </span>
        </div>
        <h2>COTISATIONS</h2>
        <hr className="ligne-titre"></hr>
        <div className="cotisations">
          <div className="case-cotisation">
            <p>
              <b>MOINS DE 14 ANS</b>
            </p>
            <p className="prix-cotisation">
              <b>245€</b>
            </p>
          </div>
          <div className="case-cotisation">
            <p>
              <b>14-18 ANS</b>
            </p>
            <p className="prix-cotisation">
              <b>280€</b>
            </p>
          </div>
          <div className="case-cotisation">
            <p>
              <b>ADULTES</b>
            </p>
            <p className="prix-cotisation">
              <b>350€</b>
            </p>
          </div>
          <div className="case-cotisation">
            <p>
              <b>ARMES</b>
            </p>
            <p className="prix-cotisation">
              <b>215€</b>
            </p>
          </div>
        </div>
        <h2>CONTACTS / RENSEIGNEMENTS</h2>
        <hr className="ligne-titre"></hr>
        <div className="contacts">
          <h4>PROFESSEUR BENOIT CROZIER</h4>
          <span className="label">Mail : </span>
          <span className="email"> admin.asf.aikido@sfr.fr</span>
        </div>
      </div>
    </div>
  );
};

export default Aikido;
