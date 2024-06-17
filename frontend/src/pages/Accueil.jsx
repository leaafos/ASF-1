import React from "react";
import { Link } from "react-router-dom";
import "../styles/accueil.css";
import ListeIcones from "../components/ListeIcones";
import BarreDeRecherche from "../components/BarreDeRecherche";
import BandeauAccueil from "../images/Accueil/bandeau-accueil.png";
import Photo1 from "../images/Accueil/photosEtVideos/photo1.png";
import Photo2 from "../images/Accueil/photosEtVideos/photo2.png";
import Photo3 from "../images/Accueil/photosEtVideos/photo3.png";
import Video1 from "../images/Accueil/photosEtVideos/video1.png";
import Video2 from "../images/Accueil/photosEtVideos/video2.png";
import Card from "../components/Card";
import stageFoot from "../images/Accueil/evenements/stageFoot.png";
import stageHandball from "../images/Accueil/evenements/stageHandball.png";
import stageTennis from "../images/Accueil/evenements/stageTennis.png";
import stageTennisDeTable from "../images/Accueil/evenements/stageTennisDeTable.png";

const Accueil = () => {
  const cardsEvent = [
    {
      title: "Stage Foot",
      photo: stageFoot,
      informations: "U9 à U13",
      date: "8 Juillet au 12 juillet",
      location: "Stade du Panorama",
      contact: "06 89 86 78 11",
    },

    {
      title: "Stage Handball",
      photo: stageHandball,
      informations: `<ul>
                     <li>Tout public (Adhérent ou non adhérent à l'ASF)</li>
                      <li>De 7 à 11 ans </li>
                      <li>De 9h à 17h</li>
                    </ul>`,
      date: "8 Juillet au 12 juillet",
      location: "Halle du Panorama",
      contact: "Hugo Brutelle : 06 11 75 85 35",
    },
    {
      title: "Stage Tennis de Table",
      photo: stageTennisDeTable,
      informations: `<ul>
                      <li>Tout public (Adhérent ou non adhérent à l'ASF)</li>
                      <li>A partir de 6 ans</li>
                      <li>De 9h à 12h</li>
                    </ul>`,
      date: "8 Juillet au 12 juillet",
      location: "Stade du Panorama",
      contact:
        "Rémi RICHARD - Secrétaire/Correspondant sportif : richard.r13p@free.fr",
    },
    {
      title: "Stage Tennis",
      photo: stageTennis,
      informations: `<ul>
                      <li>Tout public (Adhérent ou non adhérent à l'ASF)</li>
                      <li>De 9h30 à 16h30</li>
                      <li>Inscription : www.asftennis.com</li>
                    </ul>`,
      date: `<ul>
                      <li>24 juin au 28 juin 2024)</li>
                      <li>01 au 05 juillet 2024</li>
                      <li>08 juillet au 12 juillet 2024</li>
                      <li>15 au 19 juillet 2024</li>
                      <li>26 au 30 Août 2024</li>
                    </ul>`,

      location: "Tennis municipaux",
      contact:
        "Responsable administrative : contact@asftennis.com <br/> 06 89 86 78 11",
    },
  ];
  return (
    <div>
      <div className="header-accueil">
        <img alt="bandeau" src={BandeauAccueil}></img>
      </div>
      <div className="barre-de-recherche">
        <BarreDeRecherche></BarreDeRecherche>
      </div>
      <div className="icones-deroulant">
        <ListeIcones></ListeIcones>
      </div>

      <div className="evenements">
        <div className="cards-container">
          {cardsEvent.map((card, index) => (
            <Card
              key={index}
              title={card.title}
              photo={card.photo}
              informations={card.informations}
              date={card.date}
              location={card.location}
              contact={card.contact}
            />
          ))}
        </div>
      </div>
      <div className="bouton">
        <button className="bouton-accueil">
          <Link to="/construction">
            <h4>VOIR TOUS LES EVENEMENTS</h4>
          </Link>
        </button>
      </div>

      <div className="chiffres-cles">
        <div className="chiffre1">
          <h4>SPORTS</h4>
        </div>
        <div className="chiffre2">
          <h4>ADHERENTS</h4>
        </div>
        <div className="chiffre3">
          <h4>ANNEES</h4>
        </div>
      </div>
      <div className="photos-videos">
        <h4>ALBUMS PHOTOS ET VIDEOS</h4>
        <div className="container-images">
          <img alt="photo1" src={Photo1}></img>
          <img alt="photo2" src={Photo2}></img>
          <img alt="photo3" src={Photo3}></img>
          <img alt="video1" src={Video1}></img>
          <img alt="video2" src={Video2}></img>
        </div>
        <div className="bouton-espace-bouton">
          <button className="bouton-accueil">
            <Link to="/construction">
              <h4>VOIR LES ALBUMS</h4>
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Accueil;
