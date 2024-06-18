import React from "react";
import "../styles/historique.css";
import Bandeau from "../images/Historique/bandeau-historique.png";
import ImageHistoire from "../images/Historique/photo-historique.png";
import BandeauSeparation from "../images/Historique/bandeau-separation-historique.png";
import Barre from "../images/Historique/point-phrise.png";

const Historique = () => {
  return (
    <div>
      <div className="header-historique">
        <img alt="bandeau" src={Bandeau}></img>
      </div>
      <div className="histoire">
        <div className="texte-histoire">
          <h3>HISTOIRE DE L'ASSOCIATION</h3>
          <p>
            L'association Sportive Fontennaissienne est un club omnisports créé
            en 1961 à Fontenay-aux-Roses avec pour objectif de proposer des
            activités physiques et sportives dans la ville avec un rôle social
            important.
          </p>
          <p>
            Elle compte aujourd'hui plus de 3 600 adhérents, porpose près de 30
            activités sportives différentes et met en place des projets, des
            compétitions, des activités handisports, des animations, des
            spectacles... seule ou en partenariat avec d'autres associations
            et/ou les services municipaux de la ville de Fontenay-aux-Roses.
          </p>
        </div>
        <img alt="histoire" src={ImageHistoire}></img>
      </div>
      <div className="presidents">
        <h3>LES PRÉSIDENT(E)S DE L'ASSOCIATION</h3>
        <div className="phrise">
          <hr className="ligne-phrise"></hr>
          <div className="elements-phrise">
            <div className="point">
              <img alt="barre" src={Barre}></img>
              <h5>1961 - 1982</h5>
              <span>
                <b>Julien Vuillaume</b>
              </span>
            </div>
            <div className="point">
              <img alt="barre" src={Barre}></img>
              <h5>1982 - 1986</h5>
              <span>
                <b>Jean-Jacques Cirerone</b>
              </span>
            </div>
            <div className="point">
              <img alt="barre" src={Barre}></img>
              <h5>1986 - 1990</h5>
              <span>
                <b>Jean Soyer</b>
              </span>
            </div>
            <div className="point">
              <img alt="barre" src={Barre}></img>
              <h5>1990 - 2019</h5>
              <span>
                <b>Claude Boutang</b>
              </span>
            </div>
            <div className="point">
              <img alt="barre" src={Barre}></img>
              <h5>2019 - Aujourd'hui</h5>
              <span>
                <b>Dominique Dussert-Ernard</b>
              </span>
            </div>
          </div>
        </div>

        {/**la frise chrono ici */}
      </div>
      <div className="separations">
        <img
          alt="bandeau Separation"
          src={BandeauSeparation}
          className="bandeauSeparation"
        ></img>
      </div>
      <div className="assemblee-generale">
        <h3>BÉNÉVOLES ÉLUS EN 2022 EN ASSEMBLÉE GÉNÉRALE</h3>
        <p>Comité Directeur ASF</p>
        <div className="arbre-assemblee-generale">
          <div className="colonne ligne1">
            <div className="case">
              <h3>PRÉSIDENTE</h3>
              <p>Mme DUSSERT-EMARD Dominique</p>
            </div>
          </div>
          <div className="colonne ligne2">
            <div className="case">
              <h3>Vice Président</h3>
              <p>M. MEYNIAL Christophe</p>
            </div>
            <div className="case">
              <h3>Vice Président</h3>
              <p>M. MIGEON Jean-Louis</p>
            </div>
          </div>
          <div className="colonne ligne3">
            <div className="case">
              <h3>Secrétaire Adjointe</h3>
              <p>Mme PORCHER Héloïse</p>
            </div>
            <div className="case">
              <h3>SECRÉTAIRE GÉNÉRAL</h3>
              <p>M. GERI Philippe</p>
            </div>
            <div className="case">
              <h3>TRÉSORIER GÉNÉRAL</h3>
              <p>M. DUCHARD Éric</p>
            </div>
            <div className="case">
              <h3>Trésorière Adjointe</h3>
              <p>Mme CHATEL Hélène</p>
            </div>
          </div>
          <div className="colonne ligne4">
            <div className="case">
              <h3>Membre</h3>
              <p>M. HIRSTEL Christophe</p>
            </div>
            <div className="case">
              <h3>Membre</h3>
              <p>M. LARONDE Michaël</p>
            </div>
            <div className="case">
              <h3>Membre</h3>
              <p>Mme BERNIER Catia</p>
            </div>
          </div>
          <div className="colonne ligne5">
            <div className="case">
              <h3>Membre</h3>
              <p>M. GUIDAL Bruno</p>
            </div>
            <div className="case">
              <h3>Membre</h3>
              <p>M. GUYOT Geoffrey</p>
            </div>
          </div>
          <div className="status">
            <h3>STATUS ET RÈGLEMENTS</h3>
            <p>Les Status de l'association modifés en 2021</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Historique;
