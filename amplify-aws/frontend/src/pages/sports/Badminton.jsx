import React from "react";
import "../../styles/sports.css";

const Badminton = () => {
  return (
    <div>
      <div className="header badminton">
        <div className="nom-sport">
          <h1>BADMINTON</h1>
        </div>
        <div className="saison">
          <h2>SAISON 2024-2025</h2>
        </div>
      </div>
      <div className="infos">
        <h2>QUELQUES INFORMATIONS</h2>
        <hr className="ligne-titre"></hr>
        <div className="methodes">
          <h4>AVANT L'INSCRIPTION</h4>
          <p>
            Jusqu’à 3 séances à l’essai possible pour découvrir la section, ses
            structures et ses valeurs (sans obligation d’inscription et en étant
            assuré par l’assurance fédérale) : Vous devrez flasher le QR Code en
            entrant dans le gymnase ou vous rapprocher d’un membre du bureau.{" "}
            <br />
            Volants plumes fournis pour tous les adhérents et pour toutes les
            séances proposées
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
            <h4>8-12 ANS</h4>
            <p>
              <b>HALLE</b>
              <br />
              <br />
              Gymnase Jean Fournier 7 Rue des Potiers, 92260 Fontenay-aux-Roses
            </p>
            <p>
              <b>LUNDI 17H00-18H00</b>
            </p>
          </div>
          <hr className="ligne"></hr>
          <div className="entrainement-ligne">
            <h4>12-18 ANS</h4>
            <p>
              <b>HALLE</b>
              <br />
              <br />
              Gymnase Jean Fournier 7 Rue des Potiers, 92260 Fontenay-aux-Roses
            </p>
            <p>
              <b>LUNDI 18H30-20H00</b>
            </p>
          </div>
          {/*<hr className='ligne'></hr>*/}
          <hr className="ligne"></hr>
          <div className="entrainement-ligne">
            <h4>JEUNES</h4>
            <p>
              <b>HALLE</b>
              <br />
              <br />
              Gymnase Jean Fournier 7 Rue des Potiers, 92260 Fontenay-aux-Roses
            </p>
            <p>
              <b>VENDREDI 17H00-18H45</b>
            </p>
          </div>
          <hr className="ligne"></hr>
          <div className="entrainement-ligne">
            <h4>ADULTES JEU LIBRE</h4>
            <p>
              <b>HALLE</b>
              <br />
              <br />
              Gymnase Jean Fournier 7 Rue des Potiers, 92260 Fontenay-aux-Roses
            </p>
            <p>
              <b>
                LUNDI 20H00-22H45
                <br />
                SAMEDI 13H30-15H30
              </b>
            </p>
          </div>
          <hr className="ligne"></hr>
          <div className="entrainement-ligne">
            <h4>ADULTES JEU LIBRE</h4>
            <p>
              <b>HALLE</b>
              <br />
              <br />
              Stade du Panorama 21 Bd du Moulin de la Tour, 92260
              Fontenay-aux-Roses
            </p>
            <p>
              <b>
                MARDI 20H15-22H45
                <br />
                VENDREDI 20H30-22H30
              </b>
            </p>
          </div>
          <hr className="ligne"></hr>
          <div className="entrainement-ligne">
            <h4>ADULTES COMPÉTITIONS</h4>
            <p>
              <b>HALLE</b>
              <br />
              <br />
              Gymnase Les Ormeaux 1 Rue André Neyts, 92260 Fontenay-aux-Roses
            </p>
            <p>
              <b>MERCREDI 20H00-22H30</b>
            </p>
          </div>
          <hr className="ligne"></hr>
          <div className="entrainement-ligne">
            <h4>ADULTES MUSCULATION</h4>
            <p>
              <b>SALLE MUSCULATION</b>
              <br />
              <br />
              Gymnase du Parc 7 avenue du Parc 92260 Fontenay-aux-Roses
            </p>
            <p>
              <b>
                JEUDI 18H30-20H00
                <br />
                SAMEDI 11H30-13H30
              </b>
            </p>
          </div>
          <hr className="ligne"></hr>
          <div className="entrainement-ligne">
            <h4>LOISIR DÉBUTANT</h4>
            <p>
              <b>HALLE</b>
              <br />
              <br />
              Stade du Panorama 21 Bd du Moulin de la Tour, 92260
              Fontenay-aux-Roses
            </p>
            <p>
              <b>DIMANCHE 10H00-12H00</b>
            </p>
          </div>
        </div>
        <h2>INSCRIPTIONS</h2>
        <hr className="ligne-titre"></hr>
        <div className="inscription">
          <div className="inscription-h3">
            <h3>Guide inscription à destination de nos adhérent(e)s : </h3>
            <span>
              <a href="https://teamrsport.notion.site/Refonte-du-parcours-d-inscription-sur-le-web-16bd9422267c47d18b69570fd2fe34ab">
                Parcours d'inscription sur le web
              </a>
            </span>
          </div>
          <div className="inscription-h3">
            <h3>Inscription en ligne :</h3>
            <span className="lien">
              <a href="https://asfontenaisienne.monclub.app/">
                LIEN D'INSCRIPTION
              </a>
            </span>
          </div>
        </div>
        <h2>COTISATIONS</h2>
        <hr className="ligne-titre"></hr>
        <div className="cotisations-lignes">
          <div className="ligne-cotisations">
            <div className="case-cotisation">
              <p>
                <b>MOINS DE 9 ANS</b>
              </p>
              <p className="prix-cotisation">
                <b>150€</b>
              </p>
            </div>
            <div className="case-cotisation">
              <p>
                <b>9 À 18 ANS ET ÉTUDIANTS</b>
              </p>
              <p>
                <i>1 séance/semaine</i>
              </p>
              <p className="prix-cotisation">
                <b>170€</b>
              </p>
            </div>
            <div className="case-cotisation">
              <p>
                <b>9 À 18 ANS</b>
              </p>
              <p>
                <i>1 séance/semaine</i>
              </p>
              <p className="prix-cotisation">
                <b>220€</b>
              </p>
            </div>
          </div>
          <div className="ligne-cotisations">
            <div className="case-cotisation">
              <p>
                <b>ADULTES</b>
              </p>
              <p className="prix-cotisation">
                <b>195€</b>
              </p>
            </div>
            <div className="case-cotisation">
              <p>
                <b>ADULTES</b>
              </p>
              <p>
                <i>avec Entraînement Compétition</i>
              </p>
              <p className="prix-cotisation">
                <b>230€</b>
              </p>
            </div>
          </div>
        </div>
        <h2>CONTACTS / RENSEIGNEMENTS</h2>
        <hr className="ligne-titre"></hr>
        <div className="contacts">
          <h4>PRÉSIDENT GOEFFREY GUYOT :</h4>
          <span className="label">Mail : </span>
          <span className="email"> bureau@asf.fr</span>
          <span className="label">Téléphone : </span>
          <span className="email"> 06 38 43 52 68</span>
          <span className="label">Site Web : </span>
          <span className="email"> www.asfb.fr</span>
        </div>
      </div>
    </div>
  );
};

export default Badminton;
