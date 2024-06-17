import React, { useRef } from "react";
import { Link } from "react-router-dom";
import "../styles/slideShowIcones.css";
import IconeAikido from "../images/Accueil/iconesSports/aikido.png";
import IconeAthletisme from "../images/Accueil/iconesSports/athletisme.png";
import IconeBadminton from "../images/Accueil/iconesSports/badminton.png";
import IconeBasket from "../images/Accueil/iconesSports/basket.png";
import IconeBoxeThai from "../images/Accueil/iconesSports/boxeThailandaise.png";
import IconeCapoeira from "../images/Accueil/iconesSports/capoeira.png";
import IconeDanse from "../images/Accueil/iconesSports/danse.png";
import IconeSports from "../images/Accueil/iconesSports/ecoleDesSports.png";
import IconeFitness from "../images/Accueil/iconesSports/fitnessGymBienEtre.png";
import IconeFoot from "../images/Accueil/iconesSports/football.png";
import IconeGymnastiqueArtistique from "../images/Accueil/iconesSports/gymnastiqueArtistique.png";
import IconeGymnastiqueRythmique from "../images/Accueil/iconesSports/gymnastiqueRythmique.png";
import IconeHandball from "../images/Accueil/iconesSports/handball.png";
import IconeJudoJuJitsu from "../images/Accueil/iconesSports/JudoJuJitsu.png";
import IconeKarate from "../images/Accueil/iconesSports/karate.png";
import IconeKungFu from "../images/Accueil/iconesSports/kungFu.png";
import IconeMarcheNordique from "../images/Accueil/iconesSports/marcheNordique.png";
import IconeNatation from "../images/Accueil/iconesSports/natation.png";
import IconeParkour from "../images/Accueil/iconesSports/parkour.png";
import IconeRugby from "../images/Accueil/iconesSports/rugby.png";
import IconeSquash from "../images/Accueil/iconesSports/squash.png";
import IconeTaeKwonDo from "../images/Accueil/iconesSports/TaeKwonDo.png";
import IconeTennis from "../images/Accueil/iconesSports/tennis.png";
import IconeTennisDeTable from "../images/Accueil/iconesSports/tennisDeTable.png";
import IconeVolleyball from "../images/Accueil/iconesSports/volleyball.png";
import IconeYoga from "../images/Accueil/iconesSports/yoga.png";
import IconeEscrime from "../images/Accueil/iconesSports/escrime.png";

const sports = [
  { name: "Aikido", icon: IconeAikido, path: "/aikido" },
  { name: "Athletisme", icon: IconeAthletisme, path: "/athletisme" },
  { name: "Badminton", icon: IconeBadminton, path: "/badminton" },
  { name: "Basketball", icon: IconeBasket, path: "/basketball" },
  { name: "Boxe Thailandaise", icon: IconeBoxeThai, path: "/boxethailandaise" },
  { name: "Capoeira", icon: IconeCapoeira, path: "/capoeira" },
  { name: "Danse", icon: IconeDanse, path: "/ecolededanse" },
  { name: "Ecole Des Sports", icon: IconeSports, path: "/ecoledessports" },
  { name: "Escrime", icon: IconeEscrime, path: "/escrime" },
  { name: "Fitness Gym Bien-être", icon: IconeFitness, path: "/fitness" },
  { name: "Football", icon: IconeFoot, path: "/football" },
  {
    name: "Gymnastique Artistique",
    icon: IconeGymnastiqueArtistique,
    path: "/gymnastiqueartistique",
  },
  {
    name: "Gymnastique Rythmique",
    icon: IconeGymnastiqueRythmique,
    path: "/gymnastiquerythmique",
  },
  { name: "Handball", icon: IconeHandball, path: "/handball" },
  { name: "Judo Ju Jitsu", icon: IconeJudoJuJitsu, path: "/judojujitsu" },
  { name: "Karate", icon: IconeKarate, path: "/karate" },
  { name: "Kung Fu", icon: IconeKungFu, path: "/kungfu" },
  {
    name: "Marche Nordique",
    icon: IconeMarcheNordique,
    path: "/marchenordique",
  },
  { name: "Natation", icon: IconeNatation, path: "/natation" },
  { name: "Parkour", icon: IconeParkour, path: "/parkour" },
  { name: "Rugby", icon: IconeRugby, path: "/rugby" },
  { name: "Squash", icon: IconeSquash, path: "/squash" },
  { name: "Tae Kwon Do", icon: IconeTaeKwonDo, path: "/taekwondo" },
  { name: "Tennis", icon: IconeTennis, path: "/tennis" },
  { name: "Tennis de table", icon: IconeTennisDeTable, path: "/tennisdetable" },
  { name: "Volleyball", icon: IconeVolleyball, path: "/volleyball" },
  { name: "Yoga", icon: IconeYoga, path: "/yoga" },
];

const ListeIcones = () => {
  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -200,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 200,
        behavior: "smooth",
      });
    }
  };
  return (
    <div className="sports-icones-wrapper">
      <button className="scroll-button left" onClick={scrollLeft}></button>
      <div className="sports-icones-container" ref={scrollContainerRef}>
        <div className="sports-liste">
          {sports.map((sport, index) => (
            <Link key={index} to={sport.path} className="sport-link">
              <div className="sport-item">
                <img src={sport.icon} alt={sport.name} />
                <span>{sport.name}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <button className="scroll-button right" onClick={scrollRight}></button>
    </div>
  );
};

export default ListeIcones;
