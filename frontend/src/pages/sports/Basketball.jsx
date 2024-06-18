import React from "react";
import "../../styles/sports.css";

const BasketBall = () => {
  return (
    <div>
      <div className="header basketball">
        <div className="nom-sport">
          <h1>BASKETBALL</h1>
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
            Le basketball est un sport d'équipe palpitant qui combine habileté,
            vitesse et stratégie. Joué sur un terrain rectangulaire, ce sport
            implique deux équipes de cinq joueurs chacune, visant à marquer des
            points en lançant le ballon dans le panier adverse tout en défendant
            le leur. Le basketball développe non seulement les capacités
            physiques mais aussi la coopération et l'esprit d'équipe. <br />
            <br />
            Notre section de basketball au sein de l'association sportive offre
            un environnement stimulant et inclusif pour tous les âges et
            niveaux. Nos entraîneurs qualifiés sont engagés à perfectionner les
            compétences individuelles telles que le dribble, le tir, et la
            passe, tout en renforçant les tactiques de jeu collectif.
            <br />
            <br />
            Les séances d'entraînement sont structurées pour améliorer la
            condition physique, la coordination, et la prise de décision rapide.
            Nous mettons également l'accent sur le fair-play et l'esprit de
            camaraderie. Des matchs amicaux et des tournois internes sont
            régulièrement organisés, ainsi que des participations à des
            compétitions locales et régionales.
            <br />
            <br />
            Que vous soyez débutant cherchant à découvrir les fondamentaux du
            basketball ou joueur expérimenté visant à perfectionner votre
            technique et votre stratégie, notre section de basketball vous
            propose des programmes adaptés et une ambiance conviviale.
            Rejoignez-nous pour partager la passion du basketball et vivre des
            moments inoubliables sur le terrain !
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
            <h4>BABIES </h4>
            <p>
              <b>HALLE</b>
              <br />
              <br />
              Gymnase Jean Fournier 7 Rue des Potiers, 92260 Fontenay-aux-Roses
            </p>
            <p>
              <b>SAMEDI 09H00-10H15</b>
            </p>
          </div>
          <hr className="ligne"></hr>
          <div className="entrainement-ligne">
            <h4>U9</h4>
            <p>
              <b>HALLE</b>
              <br />
              <br />
              Gymnase Jean Fournier 7 Rue des Potiers, 92260 Fontenay-aux-Roses
            </p>
            <p>
              <b>
                MERCREDI 13H-15H00
                <br />
                SAMEDI 10H15 - 11H30
              </b>
            </p>
          </div>
          {/*<hr className='ligne'></hr>*/}
          <hr className="ligne"></hr>
          <div className="entrainement-ligne">
            <h4>U11</h4>
            <p>
              <b>HALLE</b>
              <br />
              <br />
              Gymnase Jean Fournier 7 Rue des Potiers, 92260 Fontenay-aux-Roses
            </p>
            <p>
              <b>
                MERCREDI 13H00-15H00
                <br />
                JEUDI 17H00-18H15
              </b>
            </p>
          </div>
          <hr className="ligne"></hr>
          <div className="entrainement-ligne">
            <h4>U13</h4>
            <p>
              <b>HALLE</b>
              <br />
              <br />
              Stade du Panorama 21 Bd du Moulin de la Tour, 92260
              Fontenay-aux-Roses <br />
              <br />
              Gymnase Jean Fournier 7 Rue des Potiers, 92260 Fontenay-aux-Roses
            </p>
            <p>
              <b>MARDI 17H30-19H15</b>
              <br />
              <i> (Panorama)</i>
              <br />
              <br />
              <b>MERCREDI 15H00-16H30</b>
              <br />
              <i> (Jean Fournier)</i>
            </p>
          </div>
          <hr className="ligne"></hr>
          <div className="entrainement-ligne">
            <h4>U13 FÉMININE </h4>
            <p>
              <b>HALLE</b>
              <br />
              <br />
              Gymnase Jean Fournier 7 Rue des Potiers, 92260 Fontenay-aux-Roses
              <br />
              <br />
              Gymnase collège les Ormeaux, 15 Rue D'Estienne d'Orves, 92260
              Fontenay-aux-Roses
            </p>
            <p>
              <b>MARDI 17H30 - 19H00</b>
              <br />
              <i> (Jean Fournier)</i>
              <br />
              <br />
              <b>JEUDI 18H15 - 19H30</b>
              <br />
              <i> (Jean Fournier)</i>
              <br />
              <br />
              <b>MARDI 17H30-19H00</b>
              <br />
              <i> (Collège Les Ormeaux)</i>
            </p>
          </div>
          <hr className="ligne"></hr>
          <div className="entrainement-ligne">
            <h4>U15</h4>
            <p>
              <b>HALLE</b>
              <br />
              <br />
              Stade du Panorama 21 Bd du Moulin de la Tour, 92260
              Fontenay-aux-Roses <br />
              <br />
              Gymnase Jean Fournier 7 Rue des Potiers, 92260 Fontenay-aux-Roses
            </p>
            <p>
              <b>MERCREDI 16H30-18H00</b>
              <br />
              <i> (Jean Fournier)</i>
              <br />
              <br />
              <b>VENDREDI 17H30-19H00</b>
              <br />
              <i> (Panorama)</i>
            </p>
          </div>
          <hr className="ligne"></hr>
          <div className="entrainement-ligne">
            <h4>U15 FÉMININE</h4>
            <p>
              <b>HALLE</b>
              <br />
              <br />
              Gymnase Jean Fournier 7 Rue des Potiers, 92260 Fontenay-aux-Roses
              <br />
              <br />
              Gymnase collège les Ormeaux, 15 Rue D'Estienne d'Orves, 92260
              Fontenay-aux-Roses
            </p>
            <p>
              <b>
                MARDI 17H30-19H00
                <br />
                <i> (Jean Fournier)</i>
                <br />
                <br />
                JEUDI 17H30-19H00
                <br />
                <i> (Collège Les Ormeaux)</i>
                <br />
              </b>
            </p>
          </div>
          <hr className="ligne"></hr>
          <div className="entrainement-ligne">
            <h4>U17 - ÉQUIPE 1 </h4>
            <p>
              <b>HALLE</b>
              <br />
              <br />
              Stade du Panorama 21 Bd du Moulin de la Tour, 92260
              Fontenay-aux-Roses
            </p>
            <p>
              <b>VENDREDI 19H00-20H30</b>
            </p>
          </div>
          <hr className="ligne"></hr>
          <div className="entrainement-ligne">
            <h4>U17 - ÉQUIPE 2</h4>
            <p>
              <b>HALLE</b>
              <br />
              <br />
              Stade du Panorama 21 Bd du Moulin de la Tour, 92260
              Fontenay-aux-Roses <br />
              <br />
              Gymnase Jean Fournier 7 Rue des Potiers, 92260 Fontenay-aux-Roses
              <br />
              <br />
              Gymnase collège les Ormeaux, 15 Rue D'Estienne d'Orves, 92260
              Fontenay-aux-Roses
            </p>
            <p>
              <b>MARDI 19H15-20H15</b>
              <br />
              <i> (Panorama)</i>
              <br />
              <br />
              <b>MERCREDI 18H00-19H30</b>
              <br />
              <i> (Jean Fournier)</i>
              <br />
              <br />
              <b>JEUDI 19H00-20H30</b>
              <br />
              <i> (Collège Les Ormeaux)</i>
            </p>
          </div>
          <hr className="ligne"></hr>
          <div className="entrainement-ligne">
            <h4>U20 - EQUIPE 1</h4>
            <p>
              <b>HALLE</b>
              <br />
              <br />
              Gymnase Jean Fournier 7 Rue des Potiers, 92260 Fontenay-aux-Roses
            </p>
            <p>
              <b>
                MARDI 19H00-20H30
                <br />
                <br />
                JEUDI 19H30-20H45
              </b>
            </p>
          </div>
          <hr className="ligne"></hr>
          <div className="entrainement-ligne">
            <h4>U20 - ÉQUIPE 2 </h4>
            <p>
              <b>HALLE</b>
              <br />
              <br />
              Gymnase Jean Fournier 7 Rue des Potiers, 92260 Fontenay-aux-Roses
              <br />
              <br />
              Gymnase collège les Ormeaux, 15 Rue D'Estienne d'Orves, 92260
              Fontenay-aux-Roses
            </p>
            <p>
              <b>
                MARDI 19H00-20H30
                <br />
                <i className="i-style"> (Jean Fournier)</i>
                <br />
                <br />
                MERCREDI 19H30-21H00
                <br />
                <i className="i-style"> (Jean Fournier)</i>
                <br />
                <br />
                MARDI 19H-20H30
                <br />
                <i className="i-style"> (Collège Les Ormeaux)</i>
              </b>
            </p>
          </div>
          <hr className="ligne"></hr>
          <div className="entrainement-ligne">
            <h4>SÉNIORS - ÉQUIPE 1</h4>
            <p>
              <b>HALLE</b>
              <br />
              <br />
              Gymnase du Parc, 8 Rue des Hautes Sorrières, 92260
              Fontenay-aux-Roses
              <br />
              <br />
              Gymnase Jean Fournier 7 Rue des Potiers, 92260 Fontenay-aux-Roses
            </p>
            <p>
              <b>LUNDI 20H30-22h</b>
              <br />
              <i> (Gymnase du Parc)</i>
              <br />
              <b>MERCREDI 20H30-22h</b>
              <br />
              <i> (Gymnase du Parc)</i>
              <br />
              <b>JEUDI 20H30-22H30</b>
              <br />
              <i> (Jean Fournier)</i>
              <br />
              <b>MARDI 20H45-22H30</b>
              <br />
              <i> (Jean Fournier)</i>
            </p>
          </div>
          <hr className="ligne"></hr>
          <div className="entrainement-ligne">
            <h4>SÉNIORS - ÉQUIPE 2</h4>
            <p>
              <b>HALLE</b>
              <br />
              <br />
              Gymnase Jean Fournier 7 Rue des Potiers, 92260 Fontenay-aux-Roses
              <br />
              <br />
              Gymnase collège les Ormeaux, 15 Rue D'Estienne d'Orves, 92260
              Fontenay-aux-Roses
            </p>
            <p>
              <b>MERCREDI 21H00-22H30</b>
              <i> (Jean Fournier)</i>
              <br />
              <b>VENDREDI 20H30-22H30</b>
              <i> (Collège Les Ormeaux)</i>
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
              <b>BABIES</b>
            </p>
            <p className="prix-cotisation">
              <b>160€</b>
            </p>
          </div>
          <div className="case-cotisation">
            <p>
              <b>U9 À U17 INCLUS</b>
            </p>
            <p className="prix-cotisation">
              <b>208€</b>
            </p>
          </div>
          <div className="case-cotisation">
            <p>
              <b>ADULTES</b>
            </p>
            <p>
              <i>(U20 à Séniors)</i>
            </p>
            <p className="prix-cotisation">
              <b>224€</b>
            </p>
          </div>
        </div>
        <h2>CONTACTS / RENSEIGNEMENTS</h2>
        <hr className="ligne-titre"></hr>
        <div className="contacts">
          <h4>PRÉSIDENT CHRISTOPHE HIRSTEL :</h4>
          <span className="label">Mail : </span>
          <span className="email"> contact.asfbasket@gmail.com</span>
        </div>
      </div>
    </div>
  );
};

export default BasketBall;
