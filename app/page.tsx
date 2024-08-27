import Header from "./components/Header"
import Main from "./components/Main";
import Image from "next/image";
import Link from "next/link";
import footer, { Footer } from "./components/Footer";
import {Buttons} from "./components/Buttons"
// import {Main} from "./components/main"
import Section2 from "./components/Section2"
import Section4 from "./components/section4";
import Section5 from "./components/Section5";
import Section6 from "./components/Section6";
import Section8 from "./components/Section8";
import style  from "./style.module.css";






export default function home(){
    return(
       <body className={style.body}>
       
        <Header/> 
        
     <Main/>
     <section className='flex' >
    <div className='m-6 block' >
    <p className='text-6xl mt-10 ml-5 flex'>Ecole 241,  Plus qu’une <br /> formation un  métier</p>
    <p className='ml-5 mt-8' >Ecole 241 forme au métier du numérique dans tout le Gabon. Rejoignez un <br /> réseau de plus de 25 000 apprenants  et apprentes. Vous souhaitez vous <br /> aussi intégrer un parcours de formqtion Simplon au être conseillé-e dans <br /> votre parcours ?
      </p> 
    <Buttons/>
    </div>
    
    <div className=' m-auto relative left-20 animate-pulse ' >
    <button className='border-2  border-black'  type="button"> <Image src='/femme.jpg' alt='' width={175} height={175}></Image></button> 
    <p className='flex gap-1 relative top-20'>Nos article de blog <Image src="/arrow-right-line.svg" alt='' width={15} height={15}></Image></p>
    </div>

    <div className='flex flex-col m-auto gap-3 relative right-14 animate-pulse'>
      <button  className='border-2 border-black'  type="button"><Image src='/femme2.jpg' alt='' width={120} height={120}></Image></button>
      <button  className='border-2 border-black' type="button"><Image src='/homme.jpg' alt=''width={120} height={120}></Image></button>
    </div>
    </section>
     <Section2/>
     <section className="  h-screen">
        <div className="flex ">
          <div className="">
          <h1 className="text-4xl font-bold mt-20 ml-8">Nos valeurs</h1>
          <p className=" text-xs mt-5 ml-8">
            La position de Ecole 241 est une première et unique au Gabon, elle
            repose sur <br />
            des valeur fortes pour une insertion profesionnelle durable sur le
            marché de 
            l’emploi.Pourquoi Ecole 241 est-elle si différente ?
          </p>
          <Buttons/>
          </div>
      <div className="grid grid-cols-2 justify-around ml-64 mt-28 gap-28 relative right-40"> 
      <div className=" flex gap-8 ">
          <Image
            className="w-10 h-10 animate-bounce"
            src="/images (1).png"
            alt=""
            width={30}
            height={30}
          ></Image>

          <h6>GRATUITE</h6>
        </div>

        <div className="flex gap-8">
          <Image
            className="w-10 h-10 animate-bounce"
            src="/images.png"
            alt=""
            width={30}
            height={30}
          ></Image>

          <h6>
            POUR TOUS, <br />
            POUR TOUTES
          </h6>
        </div>
       

       
        <div className="flex gap-8">
          <Image
            className="w-10 h-10 animate-bounce"
            src="/images (2).png"
            alt=""
            width={30}
            height={30}
          ></Image>

          <h6>
            AUCUN DIPLOME <br />
            REQUIS
          </h6>
        </div>
        <div className=" flex gap-8">
          <Image
            className="w-10 h-10 animate-bounce"
            src="/images (3).png"
            alt=""
            width={30}
            height={30}
          ></Image>

          <h6>
            PAS BESOIN DE SAVOIR <br /> DEJA CODER D’AIMER LES <br /> MATHS
          </h6>
        </div>
     
        </div>
  </div> 
      </section>

        <Section4/>
        <Section5/>
        <Section6/>
        
    <section className=" mt-48 bg-zinc-400 p-8">
    <div>
      <h1 className="text-5xl font-bold relative ml-6">
        Témoignage des alumnis
      </h1>
    </div>

    <div className="flex p-8 gap-40 mt-10">
      <div className="text-sm bg-slate-100 p-4 rounded-2xl  hover:bg-red-600 hover:text-white">
        <p>
          L`Ecole 241 m`a permit de continuer à développer mes compétences
          et à apprendre de nouvelles choses passionnantes. J`ai eu
          l`opportunité de rencontrer des enseignants inspirants et des
          camarades de classe bienveillants Grâce à cette école, j`ai pu
          explorer différents domaines d`apprentissage et découvrir mes
          passions. Je suis reconnaissant(e) pour tout ce que j`ai appris et
          toutes les expériences enrichissantes que j`ai vécues à l`école
          241.
        </p>
        <div className="flex gap-3 mt-3">
          <Image
            className="rounded-full bg-black animate-bounce"
            src="/homme.jpg"
            alt=""
            width={60}
            height={60}
          ></Image>
          <div>
            <p className="font-bold">Mark</p>
            <p className="text-black">Freelancer developpeur web</p>
          </div>
        </div>
      </div>

      <div className="text-sm bg-slate-100 p-4 rounded-2xl  hover:bg-red-600 hover:text-white">
        <p>
          L`ecole 241 m`a permit de explorer de nouveaux horizons, de
          rencontrer des personnes inspirantes et de développer mes
          compétences. J`ai eu l`opportunité d`apprendre dans un
          environnement dynamique et bienveillant, ce qui m`a permis de
          m`épanouir pleinement. Je suis reconnaissant(e) pour tout ce que
          j`ai pu vivre et apprendre grâce à cette école.
        </p>
        <div className="flex gap-3 mt-3">
          <Image
            className="rounded-full bg-black animate-bounce"
            src="/img1.png"
            alt=""
            width={60}
            height={60}
          ></Image>
          <div>
            <p className="font-bold">Julie</p>
            <p className="text-black">Freelancer developpeur web</p>
          </div>
        </div>
      </div>

      <div className="text-sm bg-slate-100 p-6 rounded-2xl hover:bg-red-600 hover:text-white">
        <p>
          L`ecole 241 m`a permit de  découvrir ma passion pour les sciences
          et la technologie. Grâce à ses enseignants passionnés, j`ai pu
          explorer de nouveaux domaines et développer mes compétences.
          Aujourd`hui, je suis reconnaissant envers cette école qui m`a
          ouvert de nouvelles perspectives et m`a aidé à me réaliser
          pleinement.
        </p>
        <div className="flex gap-3 mt-3">
          <Image
            className="rounded-full bg-black animate-bounce"
            src="/img2.png"
            alt=""
            width={60}
            height={60}
          ></Image>
          <div>
            <p className="font-bold">Sabile</p>
            <p className="text-black">Référent Digital</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <Section8/>
         <Footer/>
       </body>
       
       
    )
}
