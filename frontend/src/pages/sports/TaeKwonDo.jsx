import React from "react";
import "../../styles/sports.css";

const TaeKwonDo = () => {
  return (
    <div>
      <div className="header taekwondo">
        <div className="nom-sport">
          <h1>TAE KWON DO</h1>
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
            La section ASF Taekwondo a développé une catégorie Baby Taekwondo
            pour les enfants âgés de 3 à 5 ans. À cet âge où l’énergie est
            parfois débordante, le Taekwondo représente une vraie solution. En
            effet, cet art martial permet d’apprendre à se mouvoir plus
            efficacement et aborde les techniques de base du Taekwondo. Ainsi,
            parcours de motricité, assouplissements, premières frappes sur cible
            et légers renforcements musculaires sont au programme des séances
            pour les petits baptisés « Babys ninjas ». Cet Art Martial s'adresse
            aussi aux plus grands, en favorisant l’apprentissage par la
            technique et le combat.
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
            <h4>BABY NINJAS 3 - 4 ANS</h4>
            <p>
              <b>DOJO 2</b>
              <br />
              <br />
              Gymnase Jean Fournier 7 Rue des Potiers, 92260 Fontenay-aux-Roses
            </p>
            <p>
              <b>SAMEDI 10H30-11H15</b>
            </p>
          </div>
          <hr className="ligne"></hr>
          <div className="entrainement-ligne">
            <h4>BABY NINJAS 3 - 5 ANS</h4>
            <p>
              <b>DOJO 1</b>
              <br />
              <br />
              Gymnase Jean Fournier 7 Rue des Potiers, 92260 Fontenay-aux-Roses
              <br />
              <br />
              <b>HALLE</b>
              <br />
              <br />
              Gymnase de la Roue, 10 Rue des Hautes Sorcières, 92260
              Fontenay-aux-Roses
              <br />
              <br />
              <b>SALLE DE DANSE</b>
              <br />
              <br />
              Ecole du Parc, 6 Av. du Parc, 92260 Fontenay-aux-Roses
            </p>
            <p>
              <b>
                MERCREDI 15H00-16H00
                <br />
                MERCREDI 16H30 - 17H30
                <br />
                JEUDI 17H00 - 18H00
              </b>
            </p>
          </div>
          {/*<hr className='ligne'></hr>*/}
          <hr className="ligne"></hr>
          <div className="entrainement-ligne">
            <h4>BABY NINJAS 5 - 6 ANS</h4>
            <p>
              <b>HALLE</b>
              <br />
              <br />
              Gymnase de la Roue, 10 Rue des Hautes Sorcières, 92260
              Fontenay-aux-Roses
              <br />
              <br />
              <b>DOJO 1</b>
              <br />
              <br />
              Gymnase Jean Fournier 7 Rue des Potiers, 92260 Fontenay-aux-Roses
            </p>
            <p>
              <b>
                LUNDI 17H30-18H30
                <br />
                SAMEDI 11H15-12H15
              </b>
            </p>
          </div>
          <hr className="ligne"></hr>
          <div className="entrainement-ligne">
            <h4>GRANDS NINJAS 6 - 10 ANS</h4>
            <p>
              <b>DOJO 1</b>
              <br />
              <br />
              Gymnase Jean Fournier 7 Rue des Potiers, 92260 Fontenay-aux-Roses
              <br />
              <br />
              <b>HALLE</b>
              <br />
              <br />
              Gymnase de la Roue, 10 Rue des Hautes Sorcières, 92260
              Fontenay-aux-Roses
              <br />
              <br />
              <b>SALLE DE DANSE</b>
              <br />
              <br />
              Ecole du Parc, 6 Av. du Parc, 92260 Fontenay-aux-Roses
            </p>
            <p>
              <b>
                LUNDI 18H30-19H30
                <br />
                MERCREDI 17H30-18H30
                <br />
                <br />
                MERCREDI 14H00-15H00
                <br />
                SAMEDI 14H00-15H00
                <br />
                <br />
                JEUDI 18H00 - 19H00
              </b>
            </p>
          </div>
          <hr className="ligne"></hr>
          <div className="entrainement-ligne">
            <h4>ADOS 11 - 15 ANS</h4>
            <p>
              <b>HALLE</b>
              <br />
              <br />
              Gymnase de la Roue, 10 Rue des Hautes Sorcières, 92260
              Fontenay-aux-Roses
              <br />
              <br />
              <b>DOJO 1</b>
              <br />
              <br />
              Gymnase Jean Fournier 7 Rue des Potiers, 92260 Fontenay-aux-Roses
            </p>
            <p>
              <b>
                LUNDI 18H30-19H30
                <br />
                MERCREDI 18H30-19H30
                <br />
                <br />
                SAMEDI 15H00-16H00
              </b>
            </p>
          </div>
          <hr className="ligne"></hr>
          <div className="entrainement-ligne">
            <h4>ADOS / ADULTES 16 ANS ET +</h4>
            <p>
              <b>HALLE</b>
              <br />
              <br />
              Gymnase de la Roue, 10 Rue des Hautes Sorcières, 92260
              Fontenay-aux-Roses
              <br />
              <br />
              <b>DOJO 1</b>
              <br />
              <br />
              Gymnase Jean Fournier 7 Rue des Potiers, 92260 Fontenay-aux-Roses
            </p>
            <p>
              <b>
                LUNDI
                <br />
                MERCREDI 19H30-21H00
                <br />
                <br />
                VENDREDI 19H45-21H15
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
        <div>
          <div className="ligne-cotisations">
            <div className="case-cotisation">
              <p>
                <b>BABY NINJA 3 À 6 ANS / GRANDS NINJAS 6 À 10 ANS</b>
              </p>
              <p className="prix-cotisation">
                <b>270€</b>
              </p>
            </div>
            <div className="case-cotisation">
              <p>
                <b>ADOS 11 À 15 ANS</b>
              </p>
              <p className="prix-cotisation">
                <b>300€</b>
              </p>
            </div>
            <div className="case-cotisation">
              <p>
                <b>ADOS / ADULTES 16 ANS ET +</b>
              </p>
              <p className="prix-cotisation">
                <b>330€</b>
              </p>
            </div>
          </div>
          <h4>
            REMISE DE 10% À PARTIR DU 2EME ENFANT LORS DE L'INSCRIPTION EN LIGNE
            SUR MONCLUB AVEC LE CODE DE REMISE FRATERIE10
          </h4>
        </div>
        <h2>CONTACTS / RENSEIGNEMENTS</h2>
        <hr className="ligne-titre"></hr>
        <div className="contacts">
          <h4>ASF TAE KWON DO</h4>
          <span className="label">Mail : </span>
          <span className="email"> asftkd@gmail.com</span>
          <span className="label">Téléphone : </span>
          <span className="email">07 60 62 91 21</span>
          <span className="label">Site Web : </span>
          <span className="email"> www.sptrainingfontenayauxroses.com</span>
          <span className="label">Instagram : </span>
          <span className="email"> asftaekwondo</span>
        </div>
      </div>
    </div>
  );
};

export default TaeKwonDo;
