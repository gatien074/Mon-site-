import React from "react";
import { Header } from "../components/Header";
import Styles from "./style.module.css";
import Image from "next/image";

export default function A_propos() {
  return (
    <>
      <Header />
      <section className={Styles.section1}>
        <h1 className={Styles.section1h1}>A propos</h1>
      </section>
      <section className={Styles.section2}>
        <div>
          <Image
            className={Styles.image}
            src="/Temoignage.png"
            alt=""
            width={600}
            height={600}
          ></Image>
        </div>
        <div>
          <h2 className={Styles.section2h2}>Qui somme nous ?</h2>
          <p className={Styles.section2p}>
            Notre école est l'une des principales écoles de formation aux <br />
            compétences numériques au Gabon. Nous proposons une large gamme de
            <br />
            formations en développement web, marketing digital et autres métiers
            <br />
            du numérique. Notre programme est conçu pour vous aider à développer
            <br />
            les compétences dont vous avez besoin pour réussir dans l'économie
            <br />
            numérique.
          </p>
          <p className={Styles.section2p}>
            Notre école est l'une des principales écoles de formation aux
            <br />
            compétences numériques au Gabon. Nous proposons une large gamme de
            <br />
            formations en développement web, marketing digital et autres métiers
            <br />
            du numérique. Notre programme est conçu pour vous aider à développer
            <br />
            les compétences dont vous avez besoin pour réussir dans l'économie
            <br />
            numérique.
          </p>
        </div>
      </section>
      <section className={Styles.section3}>
        <div className={Styles.section3_1}>
          <h1 className={Styles.section3_1h1}>Notre histiore</h1>
        </div>
        <div className={Styles.section3_2}>
          <div className={Styles.section3_22}>
            <h1 className={Styles.section3_2h1}>Libreville</h1>
            <p className={Styles.section3_2p}>
              Fabrique Simplon de Libreville qui <br />
              forme aux nouveaux metier de numérique. <br /> La formation est
              ouverte à tout le monde
            </p>
          </div>
          <div className={Styles.section3_22}>
            <h1 className={Styles.section3_2h1}>Port-Gentil</h1>
            <p className={Styles.section3_2p}>
              Fabrique Simplon de Port-gentil qui
              <br /> forme aux métiers du numérique. Elle a<br /> pour ambition
              de donner des <br />
              compétences à hautes valeurs ajoutées
              <br /> aux apprenants
            </p>
          </div>
          <div className={Styles.section3_22}>
            <h1 className={Styles.section3_2h1}>Moanda</h1>
            <p className={Styles.section3_2p}>
              Fabrique Simplon de Mouanda qui forme <br /> aux métiers du
              numérique. Elle a pour <br />
              objectif d'offrir une expérience <br />
              inoubliable à tous les apprenants
            </p>
          </div>
        </div>
      </section>
      <section className={Styles.section4}>
        <div className={Styles.section4_1}>
          <h1 className={Styles.section4_1h1}>Pourquoi nous choisir?</h1>
          <p className={Styles.section4_1p}>
            Choisir notre école, c’est opté pour une expérience éducative
            exceptionnelle. Nous nous démarquons notamment par les points
            ci-dessous.
          </p>
        </div>
        <div className={Styles.section4_21}>
          <div className={Styles.section4_2}>
            <Image
              src="/peer-to-peer.svg"
              alt=""
              width={50}
              height={50}
            ></Image>
            <h2 className={Styles.section4_2h2}>
              Pédagogie centré sur
              <br /> l'apprenants
            </h2>
            <p className={Styles.section4_2p}>
              Nous mettons l'apprenant au coeur de son <br /> apprentissage,
              afin d'encourager
              <br /> l'autonomie et l'engagement perssonnel.{" "}
            </p>
          </div>
          <div className={Styles.section4_2r}>
            <Image src="/security.svg" alt="" width={50} height={50}></Image>
            <h2 className={Styles.section4_2h2}>
              Un programme axé sur les
              <br /> besoins du marché
            </h2>
            <p className={Styles.section4_2p}>
              Nous formons des proffessionnel capable
              <br /> de repondre aux besoin du marché
            </p>
          </div>
          <div className={Styles.section4_2}>
            <Image src="/stats.svg" alt="" width={50} height={50}></Image>
            <h2 className={Styles.section4_2h2}>
              Des stage après la formations
            </h2>
            <p className={Styles.section4_2p}>
              Nous mettons nos apprenants dans un cadre
              <br /> proffessionnel en vue d'approfondir les <br /> acquis, et
              d'expérimenté l'environnement
              <br /> proffessionnel.
            </p>
          </div>
        </div>
      </section>
      <section className={Styles.section5}>
        <div className={Styles.secction5_1}>
          <h1 className={Styles.section5_1h1}>Le corps administratf</h1>
        </div>
        <div className={Styles.section5_2}>
          <div className={Styles.section5_2d}>
            <Image src="/cdc.png" alt="" width={350} height={350}></Image>
            <h1 className={Styles.section5_2h1}>Sylvère MBOUSSAMBA</h1>
            <p className={Styles.section5_2p}>
              Fondateur et président de école241
            </p>
            <div className={Styles.section5_2dd}>
              <Image
                src="/eva_facebook-fill.svg"
                alt=""
                width={30}
                height={30}
              ></Image>
              <Image
                src="/pajamas_linkedin.svg"
                alt=""
                width={30}
                height={30}
              ></Image>
            </div>
          </div>
          <div className={Styles.section5_2d}>
            <Image
              src="/Madame-sylvie-1024x1024-1.jpg"
              alt=""
              width={350}
              height={350}
            ></Image>
            <h1 className={Styles.section5_2h1}>Sylvie TOURE</h1>
            <p className={Styles.section5_2p}>Directrice de école241</p>
            <div className={Styles.section5_2dd}>
              <Image
                src="/eva_facebook-fill.svg"
                alt=""
                width={30}
                height={30}
              ></Image>
              <Image
                src="/pajamas_linkedin.svg"
                alt=""
                width={30}
                height={30}
              ></Image>
            </div>
          </div>
          <div className={Styles.section5_2d}>
            <Image
              src="/ferry-1024x1024-1.jpg"
              alt=""
              width={350}
              height={350}
            ></Image>
            <h1 className={Styles.section5_2h1}>Ferry BOUPEDI</h1>
            <p className={Styles.section5_2p}>Responsable campus Libreville</p>
            <div className={Styles.section5_2dd}>
              <Image
                src="/eva_facebook-fill.svg"
                alt=""
                width={30}
                height={30}
              ></Image>
              <Image
                src="/pajamas_linkedin.svg"
                alt=""
                width={30}
                height={30}
              ></Image>
            </div>
          </div>
        </div>
      </section>
      <section className={Styles.section6}>
        <div className={Styles.section6_1}>
          <h1 className={Styles.section6_1h1}>
            {" "}
            Quelques chiffres de école241
          </h1>
        </div>
        <div>
          <div className={Styles.section6_2}>
            <div className={Styles.section6_2d}>
              <h1 className={Styles.section6_2h1}>+176</h1>
              <p className={Styles.section6_2p}>Apprenants formés</p>
            </div>
            <div className={Styles.section6_2d}>
              <h1 className={Styles.section6_2h1}>80%</h1>
              <p className={Styles.section6_2p}>Insertion professionnelle</p>
            </div>
            <div className={Styles.section6_2d}>
              <h1 className={Styles.section6_2h1}>3</h1>
              <p className={Styles.section6_2p}>Campus</p>
            </div>
            <div className={Styles.section6_2d}>
              <h1 className={Styles.section6_2h1}>+5</h1>
              <p className={Styles.section6_2p}>Partenaires</p>
            </div>
          </div>
        </div>
      </section>
      <section className={Styles.section7}>
        <div className={Styles.section7_1}>
          <h1 className={Styles.section7_1h1}>Admission</h1>
          <h1 className={Styles.section7_1h1_}>
            Avoir la bonne attitude: Motivation, esprit d'équipe, curiosité
          </h1>
          <h1 className={Styles.section7_1h1_}>
            Passer les 3 étapes du procéssus de sélection:
          </h1>
        </div>
        <div className={Styles.section7_2}>
          <div className={Styles.section7_2d}>
            <Image src="/ok.svg" alt="" width={20} height={20}></Image>
            <h1 className={Styles.section7_2dh1}>
              Inscription et tests en ligne
            </h1>
          </div>
          <div className={Styles.section7_2d}>
            <Image src="/ok.svg" alt="" width={20} height={20}></Image>
            <h1 className={Styles.section7_2dh1}>Session d'information</h1>
          </div>
          <div className={Styles.section7_2d}>
            <Image src="/ok.svg" alt="" width={20} height={20}></Image>
            <h1 className={Styles.section7_2dh1}>Contrôle administratif</h1>
          </div>
        </div>
      </section>
    </>
  );
}
