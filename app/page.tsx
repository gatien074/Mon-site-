import Header from "./components/Header"
import main from "./components/main";
import Image from "next/image";
import Link from "next/link";
import footer, { Footer } from "./components/Footer";
import {Buttons} from "./components/Buttons"
import {Main} from "./components/main"
import Section2 from "./components/section2"
import Section3 from "./components/section3";
import Section4 from "./components/section4";

export default function home(){
    return(
       <>
     
        <Header/> 
        
     <Main/>
     <section className='flex'>
    <div className='m-6 block' >
    <p className='text-6xl mt-10 ml-5 flex'>Ecole 241,  Plus qu’une <br /> formation un  métier</p>
    <p className='ml-5 mt-8' >Ecole 241 forme au métier du numérique dans tout le Gabon. Rejoignez un <br /> réseau de plus de 25 000 apprenants  et apprentes. Vous souhaitez vous <br /> aussi intégrer un parcours de formqtion Simplon au être conseillé-e dans <br /> votre parcours ?
      </p> 
    <Buttons/>
    </div>
    <div className=' m-auto relative left-20 ' >
    <button className='border-2  border-black'  type="button"> <Image src='/femme.jpg' alt='' width={175} height={175}></Image></button> 
    <p className='flex gap-1 relative top-20'>Nos article de blog <Image src="/arrow-right-line.svg" alt='' width={15} height={15}></Image></p>
    </div>

    <div className='flex flex-col m-auto gap-3 relative right-14'>
      <button  className='border-2 border-black'  type="button"><Image src='/femme2.jpg' alt='' width={120} height={120}></Image></button>
      <button  className='border-2 border-black' type="button"><Image src='/homme.jpg' alt=''width={120} height={120}></Image></button>
    </div>
    </section>
     <Section2/>
     <section className="  h-screen">
        <div className="">
          <h1 className="text-4xl font-bold mt-20 ml-14">Nos valeurs</h1>
          <p className=" text-xs mt-5 ml-14">
            La position de Ecole 241 est une première et unique au Gabon, elle
            repose sur <br />
            des valeur fortes pour une insertion profesionnelle durable sur le
            marché de <br />
            l’emploi.Pourquoi Ecole 241 est-elle si différente ?
          </p>
          <Buttons/>
      <div className="flex"> 
      <div className=" ">
          <Image
            className="w-10 h-10"
            src="/images (1).png"
            alt=""
            width={30}
            height={30}
          ></Image>

          <h6>GRATUITE</h6>
        </div>

        <div className="  ">
          <Image
            className="w-10 h-10"
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
       

       
        <div className="">
          <Image
            className="w-10 h-10"
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
        <div className=" ">
          <Image
            className="w-10 h-10"
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
         <Footer/>
       </>
       
       
    )
}
