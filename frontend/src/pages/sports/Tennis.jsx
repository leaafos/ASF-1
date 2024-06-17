import React from "react";
import "../../styles/sports.css";

const Tennis = () => {
  return (
    <div>
      <div className="header tennis">
        <div className="nom-sport">
          <h1>TENNIS</h1>
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
            Le tennis est un sport de raquette populaire et polyvalent qui se
            joue en simple ou en double sur des terrains en dur, en gazon ou en
            terre battue. Ce sport combine technique, endurance et stratégie,
            avec pour objectif de frapper une balle au-dessus d’un filet pour
            qu’elle atterrisse dans le terrain adverse, rendant la balle
            difficile à retourner pour l’adversaire.
            <br />
            <br />
            Notre section de tennis au sein de l'association sportive offre un
            environnement accueillant et dynamique pour tous les âges et
            niveaux. Nos entraîneurs qualifiés sont dédiés à développer les
            compétences techniques, la condition physique et la stratégie de
            jeu, tout en encourageant le fair-play et la passion pour le tennis.
            <br />
            <br />
            Les séances d'entraînement sont conçues pour progresser
            individuellement, avec des exercices adaptés pour améliorer le
            service, le coup droit, le revers, et le jeu de jambes. Nous
            organisons également des tournois internes et participons à des
            compétitions locales et régionales, offrant ainsi à nos membres
            l'opportunité de se mesurer à d'autres joueurs et de progresser.
            <br />
            <br />
            Que vous soyez débutant cherchant à découvrir les bases du tennis ou
            joueur expérimenté visant à perfectionner votre technique et votre
            stratégie, notre section de tennis vous propose des programmes
            adaptés à vos besoins et objectifs. Rejoignez-nous pour partager la
            passion du tennis et vivre des moments sportifs inoubliables sur le
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
            <h4>TOUTES LES CATÉGORIES</h4>
            <p>
              <b>
                TENNIS MUNICIPAUX <br />
                COURTS COUVERTS PANORAMA
              </b>
              <br />
              <br />
              21 Bd de Moulin de la Tour, 92260 Fontenay-aux-Roses
            </p>
            <p>
              <b>
                LUNDI 17H00-22H00
                <br />
                MARDI 17H00-22H00
                <br />
                JEUDI 17H00-22H00
                <br />
                VENDREDI 17H00-22H00
                <br />
                MERCREDI 09H00-22H00
                <br />
                SAMEDI 09H00-18H00
                <br />
              </b>
            </p>
          </div>
          <hr className="ligne"></hr>
          <div className="entrainement-ligne">
            <h4>MINI TENNIS</h4>
            <p>
              <b>SALLE DE TENNIS DE TABLE</b>
              <br />
              <br />
              Stade du Panorama 21 Bd du Moulin de la Tour, 92260
              Fontenay-aux-Roses
            </p>
            <p>
              <b>SAMEDI 09H45-11H45</b>
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
          <h4>
            TOUTES LES INFORMATIONS SONT DISPONIBLES SUR LE SITE DE L'ASF TENNIS
            https.//www.asftennis.com
          </h4>
        </div>
        <h2>CONTACTS / RENSEIGNEMENTS</h2>
        <hr className="ligne-titre"></hr>
        <div className="contacts">
          <h4>RESPONSABLE ADMINISTRATIVE : </h4>
          <span className="label">Mail : </span>
          <span className="email"> contact@asftennis.com</span>
          <span className="label"> Téléphone : </span>
          <span className="email"> 01 46 60 86 21</span>
          <span className="label">Site Web : </span>
          <span className="email"> www.asftennis.com</span>
        </div>
      </div>
    </div>
  );
};

export default Tennis;
