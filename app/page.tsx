import Header from "../app/components/Header";
import Main from "../app/components/Main";
import Image from "next/image";
import Link from "next/link";
import { Footer } from "../app/components/Footer";
import { BlinkingButton } from "../app/components/BlinkingButton";
import Section8 from "../app/components/sectiona";
import Section9 from "../app/components/sectionb";
import Section10 from "../app/components/Sectionc";
import Section11 from "../app/components/Sectiond";
import Section12 from "../app/components/Sectione";
import style from "./style.module.css";
import Marquee from "../app/components/Marque";

export default function Home() {
  return (
    <div className={style.body}>
      <Header />
      <Main />
      <section className="container mx-auto grid sm:grid-cols-2 lg:grid-cols-2 gap-8 mt-10">
  <div className="w-full  sm:ml-36">
    <p className="text-3xl sm:text-4xl md:text-5xl font-bold ">
      Ecole 241, Plus qu’une <br />
      formation un <span className="text-red-600">métier</span>
    </p>
    <div className="mt-4">
      <Marquee />
    </div>
    <div className="mt-4">
      <BlinkingButton />
    </div>
  </div>

  <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-2 items-center justify-center">
    <div className="text-center animate-pulse">
      <Image
        className="border-2 rounded-2xl m-auto"
        src="/femme.jpg"
        alt="Femme"
        width={175}
        height={175}
      />
      <p className="flex justify-center items-center gap-1 mt-4">
        Nos articles de blog
        <Image src="/arrow-right-line.svg" alt="Arrow" width={15} height={15} />
      </p>
    </div>

    <div className="grid grid-cols-1 gap-4 justify-center items-center animate-pulse">
      <Image
        className="border-2 rounded-2xl m-auto"
        src="/0ca30edb824afa6666e732321d718d01-removebg-preview.png"
        alt="Image 1"
        width={200}
        height={200}
      />
      <Image
        className="border-2 rounded-2xl m-auto"
        src="/6437c47584623521f2cc802ffa78415e-removebg-preview.png"
        alt="Image 2"
        width={200}
        height={200}
      />
    </div>
  </div>
</section>
      <Section8 />
      <section className="container mx-auto flex flex-col md:flex-row w-full md:h-auto h-screen mb-48 p-6">
  <div className="w-full flex flex-wrap">
    <div className="w-full sm:w-1/2 flex flex-col justify-center">
      <h1 className="text-3xl md:text-5xl font-bold mt-10 sm:mt-20 ml-5 sm:ml-20">Nos valeurs</h1>
      <p className="text-sm mt-5 ml-5 sm:ml-20">
        La position de Ecole 241 est une première et unique au Gabon, elle repose sur des valeurs fortes pour une insertion professionnelle durable sur le marché de l’emploi. Pourquoi Ecole 241 est-elle si différente ?
      </p>
      <div className="ml-5 sm:ml-20 mt-5 sm:mt-10">
      <button
            className="bg-red-600 w-52 h-14 text-white animate-blink border-2  rounded border-black  mt-8 leading-3 hover:scale-105 translate-x-0.5 duration-75 hover:bg-black hover:border-black"
            type="button"
          >
            Contactez-nous
          </button>
      </div>
    </div>
    
    <div className="w-full container  mb-6 sm:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-16 mt-10 sm:mt-28">
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

      <Section9 />
      <Section10 />
      <Section11 />
      <section className="container mx-auto bg-zinc-400 p-8  m-48">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold">Témoignage des alumni</h1>
        </div>
        <div className="flex flex-col md:flex-row md:justify-between items-center gap-8">
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

      <Section12 />
      <Footer />
    </div>
  );
}
