import React from "react";
import "../../styles/sports.css";

const BoxeThailandaise = () => {
  return (
    <div>
      <div className="header boxe-thailandaise">
        <div className="nom-sport">
          <h1>BOXE THAILANDAISE</h1>
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
            Cet Art Martial associant des techniques de coups de pieds et de
            coups de poings est la boxe la plus complète pour vous défouler et
            apprendre à vous défendre dans n'importe quelle situation. <br />
            Cet Art Martial permet d'avoir des enchaînements très variés et un
            art du combat à la fois dense et complet.
            <br />
            La section s'adresse à tous les sportifs souhaitant apprendre la
            discipline dans une ambiance conviviale. Débutants ou confirmés,
            tous les cours sont mixtes et adaptés au niveau de chacun
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
            <h4>ADOS/ADULTES 13 ANS ET +</h4>
            <p>
              <b>
                DOJO 1 <br />
                DOJO 2
              </b>
              <br />
              <br />
              Gymnase Jean Fournier 7 Rue des Potiers, 92260 Fontenay-aux-Roses
            </p>
            <p>
              <b>
                MERCREDI 20H30-22H00 <br />
                SAMEDI 16H30 - 18H00
              </b>
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
              <b>ADOS / ADULTES</b>
            </p>
            <p>
              <i>(13 ans et +)</i>
            </p>
            <p className="prix-cotisation">
              <b>300€</b>
            </p>
          </div>
        </div>
        <h4>
          Remise de 10% à partir du 2ème enfant lors de l'inscription en ligne
          sur MonClub avec le code de remise FRATERIE10
        </h4>
        <h2>CONTACTS / RENSEIGNEMENTS</h2>
        <hr className="ligne-titre"></hr>
        <div className="contacts">
          <h4>ASF ATHLÉTISME</h4>
          <div className="infos-contact">
            <span className="label">Mail : </span>
            <span className="email">
              {" "}
              asftkd@gmail.com <br />
            </span>
            <span className="label">Téléphone : </span>
            <span className="email">
              {" "}
              07 60 62 91 21
              <br />
            </span>
            <span className="label">Site Web : </span>
            <span className="email">
              {" "}
              www.sptrainingfontenayauxroses.com
              <br />
            </span>
            <span className="label">Instagram : </span>
            <span className="email"> asfteakwondo</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoxeThailandaise;
