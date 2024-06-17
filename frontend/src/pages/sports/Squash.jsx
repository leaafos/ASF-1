import React from "react";
import "../../styles/sports.css";

const Squash = () => {
  return (
    <div>
      <div className="header squash">
        <div className="nom-sport">
          <h1>SQUASH</h1>
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
            Sessions de 45 minutes. <br />
            <br />
            Réservations via l'application "MonClub".
            <br />
            Le squash est un sport de raquette intense et dynamique qui se joue
            en intérieur sur un court fermé. Les joueurs utilisent des raquettes
            pour frapper une petite balle en caoutchouc contre les murs, avec
            pour objectif de rendre la balle difficile à retourner pour
            l'adversaire. Ce sport exige une grande rapidité, de la précision et
            une excellente condition physique.
            <br />
            <br />
            Notre section de squash au sein de l'association sportive offre un
            cadre accueillant et motivant pour les joueurs de tous âges et
            niveaux. Nos entraîneurs expérimentés sont passionnés par
            l'enseignement et s'engagent à développer les compétences techniques
            et stratégiques des joueurs, tout en favorisant le plaisir du jeu.
            <br />
            <br />
            Les séances d'entraînement sont conçues pour améliorer l'agilité, la
            coordination et la réactivité, tout en offrant des opportunités de
            jeu libre et de compétitions amicales. Nous organisons également des
            tournois internes et participons à des compétitions locales,
            permettant à nos membres de se mesurer à d'autres joueurs et de
            progresser.
            <br />
            <br />
            Que vous soyez débutant souhaitant découvrir les bases du squash ou
            joueur confirmé cherchant à perfectionner votre technique et votre
            stratégie, notre section de squash vous propose des programmes
            adaptés à vos besoins et objectifs. Rejoignez-nous pour partager la
            passion du squash et vivre des moments sportifs inoubliables sur le
            court !
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
            <h4>1.</h4>
            <p>
              Stade du Panorama 21 Bd du Moulin de la Tour, 92260
              Fontenay-aux-Roses
            </p>
            <p>
              <b>DU LUNDI AU SAMEDI 9H00 - 21H45</b>
            </p>
          </div>
          <hr className="ligne"></hr>
          <div className="entrainement-ligne">
            <h4>2.</h4>
            <p>
              Stade du Panorama 21 Bd du Moulin de la Tour, 92260
              Fontenay-aux-Roses
            </p>
            <p>
              <b>
                DIMANCHE 9H00-19H30
                <br /> OU SAMEDI 10H15 - 12H00
              </b>
            </p>
          </div>
          <h4>
            (OUVERTURE DE LA SALLE AUPRES DU GARDIEN LE JOUR DE LA RESERVATION)
          </h4>
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
          <h4>1 TERRAIN POUR 2 JOUEURS</h4>
          <div className="ligne-cotisations">
            <div className="case-cotisation">
              <p>
                <b>1 TICKET DE RÉSERVATION</b>
              </p>
              <p className="prix-cotisation">
                <b>10€</b>
              </p>
            </div>
            <div className="case-cotisation">
              <p>
                <b>10 TICKETS DE RÉSERVATION</b>
              </p>
              <p className="prix-cotisation">
                <b>90€</b>
              </p>
            </div>
            <div className="case-cotisation">
              <p>
                <b>COTISATION ANNUELLE ILLIMITÉE</b>
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
          <h4>SECRETARIAT ASF</h4>
          <span className="label">Mail : </span>
          <span className="email"> I.latarse@as-fontenay.fr</span>
          <span className="label">Téléphone : </span>
          <span className="email"> 01 46 01 98 01</span>
        </div>
      </div>
    </div>
  );
};

export default Squash;
