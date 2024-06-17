import React from "react";
import "../../styles/sports.css";

const EcoleDesSports = () => {
  return (
    <div>
      <div className="header ecoledessports">
        <div className="nom-sport">
          <h1>ÉCOLE DES SPORTS</h1>
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
            Sports collectifs / Sports d'oppositions / Sports de raquettes{" "}
            <br />
            Les enfants sont répartis par groupe (max 15) et par âge. La
            répartition sera faite par les encadrants. Les enfants tourneront
            sur les différents cycles d'activités au cours de l'année ( 2 sites
            : Gymnase Jean Fournier et Gymnase du Parc).
            <br />
            Les adultes découvriront de nouveaux sports à chaque séance afin de
            trouver celui qui pourrait leur correspondre ou simplement de se
            défouler en toute sécurité sans jamais se lasser.
            <br />
            Un accompagnement des enfants de classes élémentaires est prévu afin
            de les amener sur les lieux de leurs centres de loisirs (Ecole du
            parc - La Fontaine).
            <br />
            Les enfants de la maternelle (grande section) restent à la charge de
            leurs parents à la fin de l’activité.
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
            <h4>5 À 12 ANS</h4>
            <p>
              <b>HALLE</b>
              <br />
              <br />
              Gymnase Jean Fournier 7 Rue des Potiers, 92260 Fontenay-aux-Roses{" "}
              <br />
              <br />
              Gymnase du Parc 7 avenue du Parc 92260 Fontenay-aux-Roses{" "}
            </p>
            <p>
              <b>MERCREDI 08H30-16H30</b>
            </p>
          </div>
          <hr className="ligne"></hr>
          <div className="entrainement-ligne">
            <h4>ADULTES</h4>
            <p>
              <b>GYMNASE</b>
              <br />
              <br />
              Gymnase du Parc 7 avenue du Parc 92260 Fontenay-aux-Roses
            </p>
            <p>
              <b>DIMANCHE 17H45-19H45</b>
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
                <b>ENFANTS</b>
              </p>
              <p className="prix-cotisation">
                <b>300€</b>
              </p>
            </div>
            <div className="case-cotisation">
              <p>
                <b>ADULTES</b>
              </p>
              <p className="prix-cotisation">
                <b>175€</b>
              </p>
            </div>
          </div>
        </div>
        <h2>CONTACTS / RENSEIGNEMENTS</h2>
        <hr className="ligne-titre"></hr>
        <div className="contacts">
          <h4>INTERVENANTE JULIE PALENZUELA :</h4>
          <span className="label">Mail : </span>
          <span className="email"> j.palenzuela95@hotmail.fr</span>
        </div>
        <div className="contacts">
          <h4>PRÉSIDENT CHRISTOPHE MEYNIAL</h4>
          <span className="label">Mail : </span>
          <span className="email"> c.meynial@as-fontenay.fr</span>
        </div>
      </div>
    </div>
  );
};

export default EcoleDesSports;
