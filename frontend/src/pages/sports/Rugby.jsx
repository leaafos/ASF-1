import React from "react";
import "../../styles/sports.css";

const Rugby = () => {
  return (
    <div>
      <div className="header rugby">
        <div className="nom-sport">
          <h1>RUGBY</h1>
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
            Le rugby est un sport d'équipe intense et stratégique qui combine
            force, agilité et esprit de camaraderie. Joué sur un terrain
            rectangulaire, le rugby met en scène deux équipes de quinze joueurs
            chacune (ou sept dans la variante à 7), dont l'objectif est de
            marquer des points en portant ou en bottant le ballon ovale dans
            l'en-but adverse. Ce sport développe non seulement les capacités
            physiques mais aussi la coopération et l'esprit d'équipe.
            <br />
            <br />
            Notre section de rugby au sein de l'association sportive offre un
            environnement stimulant et inclusif pour tous les âges et niveaux.
            Nos entraîneurs qualifiés sont dédiés à perfectionner les
            compétences techniques individuelles telles que la passe, le
            plaquage et la mêlée, tout en renforçant les tactiques de jeu
            collectif.
            <br />
            <br />
            Les entraînements sont structurés pour améliorer la condition
            physique, la coordination et la prise de décision rapide. Nous
            mettons également l'accent sur le fair-play et l'esprit de
            camaraderie. Des matchs amicaux et des tournois internes sont
            régulièrement organisés, ainsi que des participations à des
            compétitions locales et régionales.
            <br />
            <br />
            Que vous soyez débutant cherchant à découvrir les bases du rugby ou
            joueur expérimenté visant à affiner votre technique et votre
            stratégie, notre section de rugby vous propose des programmes
            adaptés à vos besoins et objectifs. Rejoignez-nous pour partager la
            passion du rugby et vivre des moments inoubliables sur le terrain !
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
          <hr className="ligne"></hr>
          <div className="entrainement-ligne">
            <h4>ECOLDE DE RUGBY</h4>
            <p>
              <b>
                TERRAIN EN HERBE <br />
                COULÉE VERTE
              </b>
            </p>
            <p>
              <b>MERCREDI 13H-17H</b>
            </p>
          </div>
          <hr className="ligne"></hr>
          <div className="entrainement-ligne">
            <h4>ECOLE DE RUGBY</h4>
            <p>
              <b>
                TERRAIN EN HERBE <br />
                COULÉE VERTE
              </b>
            </p>
            <p>
              <b>SAMEDI 10H00-13H00</b>
            </p>
          </div>
          <hr className="ligne"></hr>
          <div className="entrainement-ligne">
            <h4>RUGBY À 5 </h4>
            <p>
              <b>
                TERRAIN EN HERBE <br />
                COULÉE VERTE
              </b>
            </p>
            <p>
              <b>MARDI 20H00-22H00</b>
            </p>
          </div>
          <hr className="ligne"></hr>
          <div className="entrainement-ligne">
            <h4>Seniors</h4>
            <p>
              <b>
                TERRAIN EN HERBE <br />
                COULÉE VERTE
              </b>
            </p>
            <p>
              <b>MARDI 20H00-22H00</b>
              <br />
              jeudi 20H00 - 22H
            </p>
          </div>
          <hr className="ligne"></hr>
          <div className="entrainement-ligne">
            <h4>FOLKLOS (+ 35 ANS)</h4>
            <p>
              <b>
                TERRAIN EN HERBE <br />
                COULÉE VERTE
              </b>
            </p>
            <p>
              <b>VENDREDI 20H00-22H00</b>
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
                <b>BABY / U6</b>
              </p>
              <p className="prix-cotisation">
                <b>100€</b>
              </p>
            </div>
            <div className="case-cotisation">
              <p>
                <b>U8 / U10 / U12 / U14</b>
              </p>
              <p className="prix-cotisation">
                <b>210€</b>
              </p>
            </div>
            <div className="case-cotisation">
              <p>
                <b>SÉNIORS</b>
              </p>
              <p className="prix-cotisation">
                <b>250€</b>
              </p>
            </div>
          </div>

          <div className="case-cotisation">
            <p>
              <b>FOLKLOS</b>
            </p>
            <p className="prix-cotisation">
              <b>220€</b>
            </p>
          </div>
          <div className="case-cotisation">
            <p>
              <b>RUGBY À 5 MIXTE</b>
            </p>
            <p className="prix-cotisation">
              <b>130€</b>
            </p>
          </div>

          <h4>
            Remise lors de l'inscription en ligne sur MonClub avec les codes
            suivants : <br />
            FRATERIE10 -10% à partir du 2ème enfant <br />
            FRATERIE20 -20% à partir du 3ème enfant
          </h4>
        </div>
        <h2>CONTACTS / RENSEIGNEMENTS</h2>
        <hr className="ligne-titre"></hr>
        <div className="contacts">
          <h4>ÉCOLE DE RUGBY : TONY VALIER-BRASIER</h4>
          <span className="label">Mail : </span>
          <span className="email"> edr.fontenay@gmail.com</span>
          <span className="label">Téléphone : </span>
          <span className="email">06 54 95 79 89</span>
        </div>
        <div className="contacts">
          <h4>RUGBY ADAPTE : KARINE GRENIER</h4>
          <span className="label">Mail : </span>
          <span className="email"> grenierkarine@yahoo.fr</span>
          <span className="label">Téléphone : </span>
          <span className="email">06 99 51 15 32</span>
        </div>
        <div className="contacts">
          <h4>RUGBY À 5 MIXTE : PIERRE CHOUTEAU</h4>
          <span className="label">Téléphone : </span>
          <span className="email">06 84 96 96 62</span>
        </div>
        <div className="contacts">
          <h4>RUGBY SÉNIORS : STÉPAHNIE LECUYER</h4>
          <span className="label">Téléphone : </span>
          <span className="email">06 84 10 44 49</span>
          <span className="label">Réseaux sociaux : </span>
          <span className="email">www.facebook.com/rygbyasf/</span>
        </div>
      </div>
    </div>
  );
};

export default Rugby;
