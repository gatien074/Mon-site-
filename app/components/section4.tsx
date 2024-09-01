import Image from "next/image"
import Buttons from "./Buttons"
import section from './section1';
import style from "../style.module.css";
import React from "react";

const Section4 =()=>{
    return(
        <>
        
        <section className={style.section0}>
        <div>
          <h1 className="text-5xl font-bold relative left-28  mr-28 ">Nos cohortes</h1>
          <p className="relative left-28 mr-28 ">se former à un métier</p>
        </div>
     <div className={style.boxe}>
        <div className="relative w-9/12 left-28 bg-zinc-400 p-4 h-96 mt-20  rounded-xl ">
          <h4 className="text-3xl font-bold relative bottom-7">
            {" "}
            <Image
              className="relative left-96 top-8 w-8 h-8"
              src="/Vector.png"
              alt=""
              width={30}
              height={30}
            ></Image>{" "}
            Développeur Web et Web <br /> Mobile
          </h4>
          <p className="text-sm relative top-3 ">
            Le développeur web mobile a pour mission de créer et de <br />
            mettre en œuvre des applications mobiles exploitables sur <br />
            smartphone et tablette.
          </p>
          <p className="mt-9 text-sm ">
            Dans le cadre de son travail, il code et élabore des logiciels pour{" "}
            <br />
            traiter les données. Il est aussi chargé de construire des sites
            web, des <br />
            applications en ligne, des outils interactifs et autres <br />
            produits accomplis selon les demandes du client.
          </p>
          <button
            className="bg-red-600 w-44 h-12 text-white border-2 rounded border-red-600 ml-10 mt- leading-3 relative right-10 top-5 hover:scale-105 translate-x-0.5 duration-75 hover:bg-black hover:border-black"
            type="button"
          >
            En savoir plus
          </button>
        </div>
        <div className=" relative left-16 bg-zinc-400 p-9 w-9/12 h-96 mt-20   border rounded-xl">
          <h4 className="text-3xl font-bold ">Référent Digital</h4>
          <p className="mt-3 text-sm ">
            Le Référentiel Digital est une approche stratégique qui vise à{" "}
            <br /> tirer parti du potentiel des médias numériques pour atteindre{" "}
            <br /> ses objectifs commerciaux ou de communication.
          </p>
          <p className=" mt-9 text-sm ">
            Cela implique une utilisation des outils et de plateformes en ligne{" "}
            <br />
            pour atteindre un public ciblé, engager les utilisateurs et générer{" "}
            <br />
            des résultats mesurables.
          </p>
          <button
            className="bg-red-600 w-44 h-12 text-white border-2 rounded border-red-600 ml-10 mt-14 leading-3 relative right-10 top-5 hover:scale-105 translate-x-0.5 duration-75 hover:bg-black hover:border-black"
            type="button"
          >
            En savoir plus
          </button>
        </div>
        </div>
      </section>
        
        </>
    )
}

export default Section4;