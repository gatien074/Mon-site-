import Header from "../app/components/Header"
import Main from "../app/components/Main";
import Image from "next/image";
import Link from "next/link";
import  { Footer } from "../app/components/Footer";
import {BlinkingButton} from "../app/components/BlinkingButton";
import Section8 from "../app/components/sectiona";
import Section9 from "../app/components/sectionb";
import Section10 from "../app/components/Sectionc";
import Section11 from "../app/components/Sectiond";
import Section12 from "../app/components/Sectione";
import style  from "./style.module.css";
import Marquee from "../app/components/Marque";





export default function home(){
    return(
       <body className={style.body}>
       
        <Header/> 
        
     <Main/>
     <section className="container sm:w-full md:h-1/2 sm:flex md:flex">
  <div className= "flex-col md:flex-row sm:items-center m-6">
    <h1 className="text-4xl md:text-6xl mt-8 md:mt-16 ml-8 md:ml-24 flex font-bold ">
      Ecole 241, Plus qu’une <br /> formation un métier
    </h1>

    <p className="mt-4 md:mt-8 ml-8 md:ml-24 text-sm md:text-base ">
      <Marquee/>
    </p>

    <div className=" flex-col md:flex-row ml-8 md:ml-24 mt-4">
      <BlinkingButton />
    </div>
  </div>

  <div className="  flex-col md:flex-row m-auto mt- md:mt-24  animate-pulse rounded-2xl sm:m-6">
    <Image
      className="w-full sm:w-1/2 border-2 mt-8 rounded-2xl "
      src="/femme.jpg"
      alt=""
      width={200}
      height={200}
    />
    <p className=" flex-col md:flex-row gap-1 mt-12 sm:justify-center mr-7 text-sm md:justify-start">
      Nos articles de blog
      <Image
      className=""
        src="/arrow-right-line.svg"
        alt=""
        width={15}
        height={15}
      />
    </p>
  </div>

  <div className="md:flex-row flex-col  m-auto mt-8 md:mt-20 gap-3 relative right-0 md:right-14 animate-pulse">
    <Image
      className="  w-full sm:w-1/2 border-2 mt-10 rounded-2xl"
      src="/0ca30edb824afa6666e732321d718d01-removebg-preview.png"
      alt=""
      width={250}
      height={250}
    />
    <Image
      className=" w-full sm:w-1/2 border-2  mt-10 rounded-2xl"
      src="/6437c47584623521f2cc802ffa78415e-removebg-preview.png"
      alt=""
      width={250}
      height={250}
    />
  </div>
</section>

     <Section8/>
     <section className="container mx-auto flex flex-col md:flex-row w-full md:h-auto h-screen mb-48 p-6">
  <div className="w-full flex flex-wrap">
    <div className="w-full sm:w-1/2 flex flex-col justify-center">
      <h1 className="text-3xl md:text-5xl font-bold mt-10 sm:mt-20 ml-5 sm:ml-20">Nos valeurs</h1>
      <p className="text-sm mt-5 ml-5 sm:ml-20">
        La position de Ecole 241 est une première et unique au Gabon, elle repose sur des valeurs fortes pour une insertion professionnelle durable sur le marché de l’emploi. Pourquoi Ecole 241 est-elle si différente ?
      </p>
      <div className="ml-5 sm:ml-20 mt-5 sm:mt-10">
        <BlinkingButton />
      </div>
    </div>
    
    <div className="w-full sm:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-16 mt-10 sm:mt-28">
      <div className="flex flex-col items-center text-center gap-4">
        <Image
          className="w-16 h-16 sm:w-20 sm:h-20 animate-bounce"
          src="/images (1).png"
          alt="Gratuité"
          width={800}
          height={400}
        />
        <h6 className="text-base sm:text-lg">GRATUITE</h6>
      </div>
      <div className="flex flex-col items-center text-center gap-4">
        <Image
          className="w-16 h-16 sm:w-20 sm:h-20 animate-bounce"
          src="/images.png"
          alt="Pour tous, pour toutes"
          width={800}
          height={400}
        />
        <h6 className="text-base sm:text-lg">
          POUR TOUS, <br />
          POUR TOUTES
        </h6>
      </div>
      <div className="flex flex-col items-center text-center gap-4">
        <Image
          className="w-16 h-16 sm:w-20 sm:h-20 animate-bounce"
          src="/images (2).png"
          alt="Aucun diplôme requis"
          width={800}
          height={400}
        />
        <h6 className="text-base sm:text-lg">
          AUCUN DIPLOME <br />
          REQUIS
        </h6>
      </div>
      <div className="flex flex-col items-center text-center gap-4">
        <Image
          className="w-16 h-16 sm:w-20 sm:h-20 animate-bounce"
          src="/images (3).png"
          alt="Pas besoin de savoir coder"
          width={800}
          height={400}
        />
        <h6 className="text-base sm:text-lg">
          PAS BESOIN DE SAVOIR <br />
          DEJA CODER
        </h6>
      </div>
    </div>
  </div>
</section>


        <Section9/>
        <Section10/>
        <Section11/>
        <section className="container mx-auto mt-24 bg-zinc-400 p-8">
  <div className="text-center">
    <h1 className="text-4xl font-bold">Témoignage des alumni</h1>
  </div>

  <div className="flex flex-col md:flex-row md:justify-between items-center mt-10 gap-8">
    <div className="bg-slate-100 p-6 rounded-2xl text-center max-w-md transition-transform duration-300 ease-in-out hover:bg-red-600 hover:text-white">
      <p className="mb-4">
        L`Ecole 241 m`a permis de continuer à développer mes compétences et à apprendre de nouvelles choses passionnantes. J`ai eu l`opportunité de rencontrer des enseignants inspirants et des camarades de classe bienveillants. Grâce à cette école, j`ai pu explorer différents domaines d`apprentissage et découvrir mes passions. Je suis reconnaissant(e) pour tout ce que j`ai appris et toutes les expériences enrichissantes que j`ai vécues à l`école 241.
      </p>
      <div className="flex items-center justify-center gap-3">
        <Image
          className="rounded-full bg-black animate-bounce"
          src="/homme.jpg"
          alt="Mark"
          width={70}
          height={70}
        />
        <div>
          <p className="font-bold">Mark</p>
          <p className="text-black">Freelancer développeur web</p>
        </div>
      </div>
    </div>

    <div className="bg-slate-100 p-6 rounded-2xl text-center max-w-md transition-transform duration-300 ease-in-out hover:bg-red-600 hover:text-white">
      <p className="mb-4">
        L`Ecole 241 m`a permis d'explorer de nouveaux horizons, de rencontrer des personnes inspirantes et de développer mes compétences. J`ai eu l`opportunité d`apprendre dans un environnement dynamique et bienveillant, ce qui m`a permis de m`épanouir pleinement. Je suis reconnaissant(e) pour tout ce que j`ai pu vivre et apprendre grâce à cette école.
      </p>
      <div className="flex items-center justify-center gap-3">
        <Image
          className="rounded-full bg-black animate-bounce"
          src="/img1.png"
          alt="Julie"
          width={70}
          height={70}
        />
        <div>
          <p className="font-bold">Julie</p>
          <p className="text-black">Freelancer développeur web</p>
        </div>
      </div>
    </div>

    <div className="bg-slate-100 p-6 rounded-2xl text-center max-w-md transition-transform duration-300 ease-in-out hover:bg-red-600 hover:text-white">
      <p className="mb-4">
        L`Ecole 241 m`a permis de découvrir ma passion pour les sciences et la technologie. Grâce à ses enseignants passionnés, j`ai pu explorer de nouveaux domaines et développer mes compétences. Aujourd`hui, je suis reconnaissant envers cette école qui m`a ouvert de nouvelles perspectives et m`a aidé à me réaliser pleinement.
      </p>
      <div className="flex items-center justify-center gap-3">
        <Image
          className="rounded-full bg-black animate-bounce"
          src="/img2.png"
          alt="Sabile"
          width={70}
          height={70}
        />
        <div>
          <p className="font-bold">Sabile</p>
          <p className="text-black">Référent Digital</p>
        </div>
      </div>
    </div>
  </div>
</section>

   
  <Section12/>
         <Footer/>
       </body>
       
       
    )
}
