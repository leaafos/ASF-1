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

const Accueil = () => {
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
        <div className="event event1">
          <div className="heureDate">
            <p>SAMEDI 25 MAI</p>
            <p>13:00 - 19:00</p>
          </div>
          <h5>LASER RUN</h5>
        </div>
        <div className="event event2">
          <div className="heureDate">
            <p>SAMEDI 25 MAI</p>
            <p>13:00 - 19:00</p>
          </div>
          <h5>ESPORT</h5>
        </div>
        <div className="event event3">
          <div className="heureDate">
            <p>JEUDI 27 JUIN</p>
            <p>
              10:00 - 12:00 <br />
              13:00 - 16:00
            </p>
          </div>
          <h5>TOURNOI DE RUGBY</h5>
        </div>
        <div className="event event4">
          <div className="heureDate">
            <p>8 ET 9 JUIN</p>
            <p>09:00 - 17:30</p>
          </div>
          <h5>TOURNOI DE FOOT</h5>
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
