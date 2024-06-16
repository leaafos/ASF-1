import React from "react";
import "../styles/contact.css";
import BandeauContact from "../images/Contact/bandeauContact.png";
import Carte from "../images/Contact/carteContact.png";
import Localisation from "../images/Contact/iconeLocalisation.png";
import Horaire from "../images/Contact/iconeHoraire.png";
import Souris from "../images/Contact/iconeSouris.png";
import ContactForm from "../components/FormulaireContact.jsx";
import ZigZag from "../images/zigzag.png";

const Contact = () => {
  return (
    <div>
      <div className="header-contact">
        <img src={BandeauContact} alt="bandeau contact"></img>{" "}
        {/*potentiellement mettre l'image en background dans le css*/}
      </div>
      <div className="contact-info">
        <div className="infos-gauche">
          <h3>NOUS CONTACTER</h3>
          <p>
            Association Sportive Fontenaisienne, club omnisports.
            <br /> 24 sections sportives à Fontenay-Aux-Roses, Haut de Seine
          </p>
          <div className="boites">
            <div className="boite-adresse">
              <img src={Localisation} alt="localisation-icone"></img>
              <h4>ADRESSE</h4>
              <p>10 Place du Château Sainte-Barbe 92260 Fontenay-aux-Roses</p>
            </div>
            <div className="boite-horaires">
              <img src={Horaire} alt="horaire-icone"></img>
              <h4>HORAIRES</h4>
              <p>Lun - Ven 15h30 - 18h15</p>
            </div>
            <div className="boite-réseaux">
              <img src={Souris} alt="souris-icone"></img>
              <h4>RÉSEAUX SOCIAUX</h4>
              <p>Facebook Instagram</p>
            </div>
          </div>
          <div className="telephone">
            <h4>TÉLÉPHONE</h4>
            <div className="numero">
              <p>
                <b>01 46 01 98 01</b>
              </p>
            </div>
          </div>
        </div>
        <div className="infos-droite">
          <img src={Carte} alt="carte Google Maps"></img>
        </div>
      </div>
      <div className="zigzag">
        <img alt="bandeau zigzag" src={ZigZag}></img>
      </div>
      <div className="formulaire-bandeau">
        <div className="formulaire">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;
