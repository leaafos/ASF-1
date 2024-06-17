import React from "react";
import "../../styles/sports.css";

const KungFu = () => {
  return (
    <div>
      <div className="header kungFu">
        <div className="nom-sport">
          <h1>KUNG FU</h1>
        </div>
        <div className="saison">
          <h2>SAISON 2024-2025</h2>
        </div>
      </div>
      <div className="infos">
        <h2>QUELQUES INFORMATIONS</h2>
        <hr className="ligne-titre"></hr>
        <div className="methodes">
          <h4>COURS ENSEIGNÉS</h4>
          <p>
            Au-delà du développement corporel (souplesse, force, coordination,
            vitesse, endurance, équilibre), la pratique du kung fu enseigne :{" "}
            <br />
            <br />• Le respect des professeurs et des camarades <br />• La
            solidarité et l'entraide <br />• L’application dans le travail{" "}
            <br />• L'auto-discipliné <br />• La confiance en soi et l'estime de
            soi
            <br />• Le courage et la ténacité <br />
            <br />
            Sur le plan technique, il s'agit de maîtriser les postures
            fondamentales, les coups de poings et de pieds de base, les
            déplacements. En complément, des exercices avec un partenaire sont
            proposés.
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
            <h4>6 - 12 ANS</h4>
            <p>
              <b>SALLE DE DANSE</b>
              <br />
              <br />
              Gymnase Jean Fournier 7 Rue des Potiers, 92260 Fontenay-aux-Roses
            </p>
            <p>
              <b>JEUDI 18H00-19H00</b>
            </p>
          </div>
          <hr className="ligne"></hr>
          <div className="entrainement-ligne">
            <h4>12 - 17 ANS</h4>
            <p>
              <b>SALLE DE DANSE</b>
              <br />
              <br />
              Gymnase Jean Fournier 7 Rue des Potiers, 92260 Fontenay-aux-Roses
            </p>
            <p>
              <b>JEUDI 19H00-20H00</b>
            </p>
          </div>
          {/*<hr className='ligne'></hr>*/}
          <hr className="ligne"></hr>
          <div className="entrainement-ligne">
            <h4>18 ANS ET + ADULTES</h4>
            <p>
              <b>DOJO 2</b>
              <br />
              <br />
              Gymnase Jean Fournier 7 Rue des Potiers, 92260 Fontenay-aux-Roses
            </p>
            <p>
              <b>JEUDI 21H15-22H30</b>
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
        <div className="cotisations">
          <div className="ligne-cotisations">
            <div className="case-cotisation">
              <p>
                <b>6 - 12 ANS</b>
              </p>
              <p className="prix-cotisation">
                <b>227€</b>
              </p>
            </div>
            <div className="case-cotisation">
              <p>
                <b>13 - 17 ANS</b>
              </p>
              <p className="prix-cotisation">
                <b>257€</b>
              </p>
            </div>
            <div className="case-cotisation">
              <p>
                <b>18 ANS ET + / ADULTES </b>
              </p>
              <p className="prix-cotisation">
                <b>300€</b>
              </p>
            </div>
          </div>
        </div>
        <h2>CONTACTS / RENSEIGNEMENTS</h2>
        <hr className="ligne-titre"></hr>
        <div className="contacts">
          <h4>PROFESSEUR RODOLPHE POLLET :</h4>
          <span className="label">Mail : </span>
          <span className="email"> rpollet@gmail.com</span>
        </div>
      </div>
    </div>
  );
};

export default KungFu;
