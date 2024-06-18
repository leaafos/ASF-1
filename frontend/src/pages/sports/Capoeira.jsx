import React from "react";
import "../../styles/sports.css";

const Capoeira = () => {
  return (
    <div>
      <div className="header capoeira">
        <div className="nom-sport">
          <h1>CAPOEIRA</h1>
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
            De 3 à 6 ans : éveil de la capoeira, travaille de la motricité, de
            l'autonomie mentale et physique, de la confiance en soi. <br /> De 6
            à 10 ans : travaille de la confiance en soi, de l'agilité, de la
            souplesse et la vision panoramique, de la force mentale et physique
            et des responsabilités du groupes. <br />
            De 11 à 14 ans : travaille de l'agilité, de la souplesse, de la
            force et de la rapidité physique et mentale et des responsabilités
            du groupe.
            <br />
            De 15 ans à adulte : Travaille de la perfection, l’acquisition de
            l'expérience dans la capoeira.
            <br />A tout âge travaille du chant et des jeux.
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
            <h4>3 À 6 ANS</h4>
            <p>
              <b>SALLE POLYVALENTE</b>
              <br />
              <br />
              Gymnase du Parc 7 avenue du Parc 92260 Fontenay-aux-Roses
            </p>
            <p>
              <b>MERCREDI 18H00-19H00</b>
            </p>
          </div>
          <hr className="ligne"></hr>
          <div className="entrainement-ligne">
            <h4>7 À 13 ANS</h4>
            <p>
              <b>GYMNASE</b>
              <br />
              <br />
              Gymnase de pervenches 20B Rue Durand Bénech, 92260
              Fontenay-aux-Roses
            </p>
            <p>
              <b>VENDREDI 17H30-18H30</b>
            </p>
          </div>
          {/*<hr className='ligne'></hr>*/}
          <hr className="ligne"></hr>
          <div className="entrainement-ligne">
            <h4>14 ANS ET +</h4>
            <p>
              <b>SALLE POLYVALENTE</b>
              <br />
              <br />
              Gymnase du Parc 7 avenue du Parc 92260 Fontenay-aux-Roses
            </p>
            <p>
              <b>MARDI 19H30-21H00</b>
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
                <b>3 À 13 ANS</b>
              </p>
              <p className="prix-cotisation">
                <b>195€</b>
              </p>
            </div>
            <div className="case-cotisation">
              <p>
                <b>14 ANS ET +</b>
              </p>
              <p className="prix-cotisation">
                <b>260€</b>
              </p>
            </div>
          </div>
        </div>
        <h2>CONTACTS / RENSEIGNEMENTS</h2>
        <hr className="ligne-titre"></hr>
        <div className="contacts">
          <h4>PROFESSEUR THOMAS MASSIMI :</h4>
          <span className="label">Mail : </span>
          <span className="email"> mass.tho@hotmail.fr</span>
          <span className="label">Téléphone : </span>
          <span className="email"> 06 18 50 00 90</span>
        </div>
      </div>
    </div>
  );
};

export default Capoeira;
