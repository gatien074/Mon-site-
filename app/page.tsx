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
    <p className='text-6xl mt-10  flex'>Ecole 241,  Plus qu’une <br /> formation un  métier</p>
    <p className=' mt-8' >Ecole 241 forme au métier du numérique dans tout le Gabon. Rejoignez un <br /> réseau de plus de 25 000 apprenants  et apprentes. Vous souhaitez vous <br /> aussi intégrer un parcours de formqtion Simplon au être conseillé-e dans <br /> votre parcours ?
      </p> 
    <Buttons/>
    </div>
    
    <div className=' m-auto relative left-20 animate-pulse  rounded-2xl  will-change-transform' >
       <Image className='border-2  rounded-2xl relative top-3  ' src='/femme.jpg' alt='' width={175} height={175}></Image> 
    <p className='flex gap-1 relative top-20'>Nos article de blog <Image src="/arrow-right-line.svg" alt='' width={15} height={15}></Image></p>
    </div>

    <div className='flex flex-col m-auto gap-3 relative right-14 animate-pulse will-change-transform'>
       <Image className='border-2  rounded-2xl  relative left-4' src='/0ca30edb824afa6666e732321d718d01-removebg-preview.png' alt='' width={200} height={200}></Image> 
      <Image className='border-2  rounded-2xl  relative left-4'  src='/6437c47584623521f2cc802ffa78415e-removebg-preview.png' alt=''width={200} height={200}></Image>
    </div>
    </section>
     <Section2/>
     <section className="  h-screen">
        <div className="flex  p-6">
          <div className="">
          <h1 className="text-5xl font-bold mt-20 ">Nos valeurs</h1>
          <p className=" text-xm mt-5 ">
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
            className="w-16 h-16 animate-bounce"
            src="/images (1).png"
            alt=""
            width={800}
            height={400}
          ></Image>

          <h6>GRATUITE</h6>
        </div>

        <div className="flex gap-8">
          <Image
            className="w-16 h-16 animate-bounce"
            src="/images.png"
            alt=""
            width={800}
            height={400}
          ></Image>

          <h6>
            POUR TOUS, <br />
            POUR TOUTES
          </h6>
        </div>
       

       
        <div className="flex gap-8">
          <Image
            className="w-16 h-16 animate-bounce"
            src="/images (2).png"
            alt=""
            width={800}
            height={400}
          ></Image>

          <h6>
            AUCUN DIPLOME <br />
            REQUIS
          </h6>
        </div>
        <div className=" flex gap-8">
          <Image
            className="w-16 h-16 animate-bounce"
            src="/images (3).png"
            alt=""
            width={800}
            height={400}
          ></Image>

          <h6>
            PAS BESOIN DE SAVOIR DEJA CODER D’AIMER LES  MATHS
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
      <h1 className="text-5xl font-bold relative ml top-5">
        Témoignage des alumnis
      </h1>
    </div>

    <div className="flex p-8 gap-40 mt-10">
      <div className="text-sm bg-slate-100 p-4 rounded-2xl  hover:bg-red-600 hover:text-white hover: ">
        <p>
          L`Ecole 241 m`a permit de continuer à développer mes compétences
          et à apprendre de nouvelles choses passionnantes. J`ai eu
          l`opportunité de rencontrer des enseignants inspirants et des
          camarades de classe bienveillants Grâce à cette école, j`ai pu
          explorer différents domaines d`apprentissage et découvrir mes
          passions. Je suis reconnaissant(e) pour tout ce que j`ai appris 
          toutes les expériences enrichissantes que j`ai vécues à l`école
          241.
        </p>
        <div className="flex gap-3 mt-3">
          <Image
            className="rounded-full bg-black animate-bounce"
            src="/homme.jpg"
            alt=""
            width={70}
            height={70}
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
            width={70}
            height={70}
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
            width={70}
            height={70}
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
