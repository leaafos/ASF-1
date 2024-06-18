import React from "react";
import "../../styles/sports.css";

const Athletisme = () => {
  return (
    <div>
      <div className="header athletisme">
        <div className="nom-sport">
          <h1>ATHLÉTISME</h1>
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
            L'athlétisme, souvent considéré comme la reine des sports, englobe
            une variété de disciplines physiques incluant la course à pied, le
            saut, et le lancer. Ce sport polyvalent permet à chacun de trouver
            une activité correspondant à ses capacités et préférences, qu'il
            s'agisse de courir sur des pistes, de sauter en hauteur ou en
            longueur, ou encore de lancer des objets tels que le javelot ou le
            disque. <br />
            <br />
            Notre section d'athlétisme au sein de l'association sportive offre
            un environnement accueillant et dynamique pour tous les âges et
            niveaux. Nos entraîneurs qualifiés mettent un point d'honneur à
            développer à la fois les compétences techniques et la passion pour
            ce sport complet. Les entraînements sont structurés pour favoriser
            la progression individuelle tout en cultivant un esprit d'équipe
            fort et solidaire.
            <br />
            <br />
            Que vous soyez débutant cherchant à découvrir une nouvelle activité,
            ou athlète confirmé visant à améliorer vos performances, notre
            section d'athlétisme vous propose des programmes adaptés et des
            opportunités de participation à des compétitions locales et
            régionales. Rejoignez-nous pour vivre des moments sportifs
            inoubliables et partager notre passion pour l’athlétisme !
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
            <h4>2018 À 2019</h4>
            <p>
              <b>SALLE TENNIS DE TABLE</b>
              <br />
              <br />
              Stade du Panorama 21 Bd du Moulin de la Tour, 92260
              Fontenay-aux-Roses
            </p>
            <p>
              <b>SAMEDI 09H00-09H45</b>
            </p>
          </div>
          <hr className="ligne"></hr>
          <div className="entrainement-ligne">
            <h4>2013 À 2017</h4>
            <p>
              <b>PISTE ET TERRAIN D'HONNEUR</b>
              <br />
              <br />
              Stade du Panorama 21 Bd du Moulin de la Tour, 92260
              Fontenay-aux-Roses
            </p>
            <p>
              <b>
                MERCREDI 16H30-18H00
                <br /> OU SAMEDI 10H15 - 12H00
              </b>
            </p>
          </div>
          {/*<hr className='ligne'></hr>*/}
          <hr className="ligne"></hr>
          <div className="entrainement-ligne">
            <h4>2008 ET AVANT</h4>
            <p>
              <b>PISTE</b>
              <br />
              <br />
              Stade du Panorama 21 Bd du Moulin de la Tour, 92260
              Fontenay-aux-Roses
            </p>
            <p>
              <b>
                LUNDI 18H30-20H00
                <br />
                MERCREDI 19H00-21H00
                <br />
                VENDREDI 20H00-21H00
              </b>
            </p>
          </div>
          <hr className="ligne"></hr>
          <div className="entrainement-ligne">
            <h4>2009 À 2012</h4>
            <p>
              <b>PISTE ET TERRAIN D'HONNEUR</b>
              <br />
              <br />
              Stade du Panorama 21 Bd du Moulin de la Tour, 92260
              Fontenay-aux-Roses
            </p>
            <p>
              <b>
                MERCREDI 18H00-20H00
                <br />
                VENDREDI 18H30-20H00
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
                <b>2018 ET 2019</b>
              </p>
              <p className="prix-cotisation">
                <b>190€</b>
              </p>
            </div>
            <div className="case-cotisation">
              <p>
                <b>2013 ET 2017</b>
              </p>
              <p>
                <i>Nouvelle adhésion (prix du maillot compris)</i>
              </p>
              <p className="prix-cotisation">
                <b>225€</b>
              </p>
            </div>
            <div className="case-cotisation">
              <p>
                <b>2013 ET 2017</b>
              </p>
              <p>
                <i>Ancien adhérent</i>
              </p>
              <p className="prix-cotisation">
                <b>190€</b>
              </p>
            </div>
          </div>

          <div className="case-cotisation">
            <p>
              <b>2012 ET AVANT</b>
            </p>
            <p>
              <i>Nouvelle adhésion (prix du maillot compris)</i>
            </p>
            <p className="prix-cotisation">
              <b>240€</b>
            </p>
          </div>
          <div className="case-cotisation">
            <p>
              <b>2012 ET AVANT</b>
            </p>
            <p>
              <i>Ancien adhérent</i>
            </p>
            <p className="prix-cotisation">
              <b>205€</b>
            </p>
          </div>
        </div>
        <h2>CONTACTS / RENSEIGNEMENTS</h2>
        <hr className="ligne-titre"></hr>
        <div className="contacts">
          <h4>ASF ATHLÉTISME</h4>
          <span className="label">Mail : </span>
          <span className="email"> asfathletisme2@gmail.com</span>
          <span className="label">Site Web : </span>
          <span className="email"> www.asfathletisme.free.fr</span>
        </div>
      </div>
    </div>
  );
};

export default Athletisme;
