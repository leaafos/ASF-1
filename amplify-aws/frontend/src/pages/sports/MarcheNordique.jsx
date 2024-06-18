import React from "react";
import "../../styles/sports.css";

const MarcheNordique = () => {
  return (
    <div>
      <div className="header marcheNordique">
        <div className="nom-sport">
          <h1>MARCHE NORDIQUE</h1>
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
            La marche nordique est une autre conception de la marche, beaucoup
            plus active. <br />
            <br />
            Le principe est simple : il s'agit d'accentuer le mouvement naturel
            des bras pendant la marche et de propulser le corps vers l'avant à
            l'aide de deux bâtons qui permettent d'aller plus vite et plus loin.
            L'ensemble du corps entre en action et la dépense d'énergie est
            accrue. En raison d'une technicité simple et d'un apprentissage peu
            fastidieux, la plaisir dela pratique est présent dès le début.{" "}
            <br />
            <br />
            Par sa facilité et par sa dimension "Sport - Santé", la marche
            nordique s'adresse à tout le monde quels que soient l'âge ou la
            condition physique. Des adolescents aux retraités en passant par les
            sportifs confirmés, ce qui fait d'elle une discipline très
            conviviale et familiale. <br />
            <br />
          </p>
        </div>
        <h4>LES BIENFAITS DE LA MARCHE NORDIQUE</h4>
        <p>
          La marche nordique tonifie le corps, permet de mieux respirer,
          fortifie les os, aide à l’amincissement... <br />
          En entente avec 5 clubs d'athlétisme : Clamart, Fontenay-Aux-Roses,
          Nanterre, Plessis-Robinson et Suresnes (Athlé 92).
        </p>
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
            <h4>MARCHE NORDIQUE</h4>
            <p>
              Stade du Panorama 21 Bd du Moulin de la Tour, 92260
              Fontenay-aux-Roses
            </p>
            <p>
              <b>DIMANCHE 10H00-11H30</b>
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
          <div className="case-cotisation">
            <p>
              <b>MARCHE NORDIQUE</b>
            </p>
            <p className="prix-cotisation">
              <b>195€</b>
            </p>
          </div>
        </div>
        <h2>CONTACTS / RENSEIGNEMENTS</h2>
        <hr className="ligne-titre"></hr>
        <div className="contacts">
          <h4>PRÉSIDENT DOMINIQUE CALASSOU : </h4>
          <span className="label">Téléphone : </span>
          <span className="email"> 06 03 45 20 13</span>
        </div>
        <div className="contacts">
          <h4>FRÉDÉRIQUE MAIRET : </h4>
          <span className="label">Téléphone : </span>
          <span className="email">06 83 96 55 85</span>
        </div>
        <div className="contacts">
          <h4>MARCHE NORDIQUE : </h4>
          <span className="label">Site Web : </span>
          <span className="email"> www.asfathletisme.free.fr</span>
        </div>
      </div>
    </div>
  );
};

export default MarcheNordique;
