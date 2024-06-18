import React from "react";
import "../../styles/sports.css";

const Aikido = () => {
  return (
    <div>
      <div className="header aikido">
        <div className="nom-sport">
          <h1 className="h1-mon-sport">AIKIDO</h1>
        </div>
        <div className="saison">
          <h2 className="h2-saisons">SAISON 2024-2025</h2>
        </div>
      </div>
      <div className="infos">
        <h2 className="h2">QUELQUES INFORMATIONS</h2>
        <hr className="ligne-titre"></hr>
        <div className="methodes">
          <h4 className="methodes h4">MÉTHODES ENSEIGNÉES</h4>
          <p>
            "La voie de l'union ou de l'harmonie des énergies" : (Aï : union -
            harmonie, Ki : énergie, Do : voie). <br />
            <br />
            L'Aïkido est un art martial qui comporte de nombreuses techniques à
            mains nues, ainsi que des techniques d'armes (sabre-bokken,
            bâton-jo, poignard-tanto). Il consiste à contrôler les attaques de
            ses adversaires, sans opposition ou exercice de la force, en
            utilisant des techniques d'esquive et d'immobilisation.
            <br /> <br />
            Les pratiquants peuvent découvrir un art martial d'autodéfense
            efficace et non violent. Les principes présentés durant les cours
            peuvent déboucher pour certains sur un véritable art de vivre.
            <br />
            <br /> L'Aïkido permet de développer le contrôle de soi. Tout le
            monde peut pratiquer, hommes et femmes, jeunes et adultes. Aucune
            aptitude physique particulière n'est nécessaire pour cet art martial
            en dehors d'une bonne condition générale à une pratique sportive.{" "}
            <br />
            <br />
            L’Aïkido se distingue cependant des autres arts martiaux en
            cherchant à neutraliser l'intention agressive de l'adversaire.
            L'Aïkido étant un art martial avec un objectif de dissuasion, sa
            pratique exclut toute idée de compétition.
          </p>
        </div>
        <div className="entrainements">
          <div className="titre-entrainements">
            <h2 className="h2">ENTRAÎNEMENTS</h2>
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
            <h4>MOINS DE 14 ANS</h4>
            <p>
              <b>DOJO 1</b>
              <br />
              <br />
              Gymnase Jean Fournier 7 Rue des Potiers, 92260 Fontenay-aux-Roses
            </p>
            <p>
              <b>MERCREDI 17H00-18H00</b>
            </p>
          </div>
          <hr className="ligne"></hr>
          <div className="entrainement-ligne">
            <h4>14-18 ANS</h4>
            <p>
              <b>DOJO 1</b>
              <br />
              <br />
              Gymnase Jean Fournier 7 Rue des Potiers, 92260 Fontenay-aux-Roses
            </p>
            <p>
              <b>MERCREDI 18H00-19H00</b>
            </p>
          </div>
          {/*<hr className='ligne'></hr>*/}
          <hr className="ligne"></hr>
          <div className="entrainement-ligne">
            <h4>ADULTES</h4>
            <p>
              <b>DOJO 1 ET DOJO 2</b>
              <br />
              <br />
              Gymnase Jean Fournier 7 Rue des Potiers, 92260 Fontenay-aux-Roses
            </p>
            <p>
              <b>
                LUNDI 20H30-22H30
                <br />
                MERCREDI 19H00-21H00
                <br />
                VENDREDI 20H00-21H00
              </b>
            </p>
          </div>
          <hr className="ligne"></hr>
          <div className="entrainement-ligne">
            <h4>ADULTES GRADÉS</h4>
            <p>
              <b>DOJO 1</b>
              <br />
              <br />
              Gymnase Jean Fournier 7 Rue des Potiers, 92260 Fontenay-aux-Roses
            </p>
            <p>
              <b>MERCREDI 21H00-22H00</b>
            </p>
          </div>
          <hr className="ligne"></hr>
          <div className="entrainement-ligne">
            <h4>ARMES (JO, BOKKEN, TANTO)</h4>
            <p>
              <b>DOJO 2</b>
              <br />
              <br />
              Gymnase Jean Fournier 7 Rue des Potiers, 92260 Fontenay-aux-Roses
            </p>
            <p>
              <b>VENDREDI 21H00-22H00</b>
            </p>
          </div>
        </div>
        <h2 className="h2">INSCRIPTIONS</h2>
        <hr className="ligne-titre"></hr>
        <div className="inscription">
          <div className="inscription-h3">
            <h3>GUIDE D'INSCRIPTION À DESTINATION DE NOS ADHÉRENT(E)S : </h3>
            <span>
              <a href="https://teamrsport.notion.site/Refonte-du-parcours-d-inscription-sur-le-web-16bd9422267c47d18b69570fd2fe34ab">
                PARCOURS D'INSCRIPTION SUR LE WEB
              </a>
            </span>
            <p>Il s'agit d'une page du site internet de MonClub qui explique aux adhérents comment s'inscrire pour la première fois avec MonClub ou bien comment se connecter si un compte a déjà été créé.</p>
          </div>
          <div className="inscription-h3">
            <h3>DISPOSITIF CERTIFICAT MÉDICAL POUR LE SPORT - INFORMATIONS ADHÉRENT : </h3>
            <span>
              <a href="">
                CLIQUEZ ICI
              </a>
            </span>
            <h5>Mineur : </h5>
            <p>Questionnaire de santé (à garder par l'adhérent) ou Certificat Médical (si + de 3 ans) si nouveau ou souhait de la section. </p>
            <h5>Majeur : </h5>
            <p>Questionnaire de santé (à garder par l'adhérent) ou Certificat Médical (si + de 3 ans) si nouveau ou souhait de la section. </p>
          </div>
          <div className="inscription-h3">
            <h3>INSCRIPTION EN LIGNE :</h3>
            <span className="lien">
              <a href="https://asfontenaisienne.monclub.app/">
                LIEN D'INSCRIPTION
              </a>
            </span>
          </div>
        </div>
        <h2 className="h2">COTISATIONS</h2>
        <hr className="ligne-titre"></hr>
        <div className="cotisations">
          <div className="case-cotisation">
            <p>
              <b>MOINS DE 14 ANS</b>
            </p>
            <p className="prix-cotisation">
              <b>245€</b>
            </p>
          </div>
          <div className="case-cotisation">
            <p>
              <b>14-18 ANS</b>
            </p>
            <p className="prix-cotisation">
              <b>280€</b>
            </p>
          </div>
          <div className="case-cotisation">
            <p>
              <b>ADULTES</b>
            </p>
            <p className="prix-cotisation">
              <b>350€</b>
            </p>
          </div>
          <div className="case-cotisation">
            <p>
              <b>ARMES</b>
            </p>
            <p className="prix-cotisation">
              <b>215€</b>
            </p>
          </div>
        </div>
        <div className='paiement'>
            <h3>MOYENS DE PAIEMENT</h3>
              <div>
                <ul>
                  <li>
                    <h4>CARTE BANCAIRE</h4>
                      <p>(en une seule fois)</p>
                  </li>
                  <li>
                    <h4>SEPA (PRÉLÈVEMENTS)</h4>
                    <p>(en 3 fois)</p>
                  </li>
                  <li>
                    <h4 onClick={handleToggle} className='menu-deroulant'>
                      AUTRES MOYENS
                      <span>
                        {showOthers ? 'v' : '>'}
                      </span>
                    </h4>
                    {showOthers && (
                      <div className='autres-moyens'>
                        <h4>Si Bénéficiaire d'Aides :</h4>
                        <p>ANVC (coupons sport, chèque-vacances), Coup de pouce loisirs (CAF), Pass+, Pass'sport, Chèque sport, Labaz, Coupon Sceaux</p>
                        <p><i>(Uniquement : Athlétisme, Badminton (en compétition), Gymnastique Rythmique, Gymnastique Artistique, Handball, Rugby, Squash, VolleyBall)</i></p>
                                
                        <h4>Par chèque(s) :</h4>
                        <p>(5 fois maximum - à l'ordre de l'ASF) </p>
                                    
                        <h4>Par espèces : </h4>
                        <p>(en 1 seule fois)</p>
                        <div  className='remise'>
                          <h4>La remise se fera : </h4>
                        </div>
                        <p>Au Forum des Associations le <b className='gras'> 08 septembre</b> au Gymnase du Parc entre 10h00 et 18h00</p>
                        <p>OU</p>
                        <p>Auprès de l'Accueil / Secrétariat de l'ASF - 10 place du château Ste Barbe - 2ème Étage - Porte 7</p>
                                    
                        <h4>Par virement : </h4>
                        <p>(en 1 seule fois)</p>
                        <ul>
                        <li>Se rapprocher de la section pour obtenir le RIB</li>
                        <li>Se connecter à l'application de votre banque en ligne - Sélectionner virement</li>
                        <li>Ajouter un nouveau bénéficiaire</li>
                        <li>Indiquer <b className='gras'>obligatoirement</b> le motif du virement</li>
                        <ul>
                            <li>a. Section concernée + Nom et Prénom de l'enfant si inscription d'un mineur ou de l'adulte inscrit </li>
                            <li>b. Exemple : ASF VOLLEY - enfant AZEERTYUI Noémie ou ASF VOLLEY - adulte AZERTYUI Marc</li>
                        </ul>
                        <li>Effectuer le virement</li>
                      </ul>
                    </div>
                  )}
              </li>
          </ul>
        </div>
        </div>
        <h2>CONTACTS / RENSEIGNEMENTS</h2>
        <h2 className="h2">CONTACTS / RENSEIGNEMENTS</h2>
        <hr className="ligne-titre"></hr>
        <div className="contacts">
          <h4>PROFESSEUR BENOIT CROZIER</h4>
          <span className="label">Mail : </span>
          <span className="email"> admin.asf.aikido@sfr.fr</span>
        </div>
      </div>
    </div>
  );
};

export default Aikido;
