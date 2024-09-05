import style from '../style.module.css'
import Image from 'next/image';
import Outils from "./Outils"
import {motion} from 'framer-motion';
import Main from '../components/Main';
import Footer from '../components/Footer';


export const Refe = ()=>{
    return(
    <>
      <body>

      <Main/>
      <section className="px-4 py-8 lg:flex lg:items-center lg:justify-between">
  <div className="text-center lg:text-left lg:w-1/2">
    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold items-center">
     Référent digital.
    </h1>
    <p className="relative mt-4 md:mt-6 lg:mt-8 text-white m-5">
    Concentre-toi sur ce qui est nécessaire pour acquérir une compétence <br /> spécifique et applicable. Tu seras mieux outillé pour construire une <br /> carrière.
    </p>
   
  </div>

</section>
<section className="m-auto grid grid-cols-1 lg:grid-cols-2 gap-8 mb-28 px-4">
  <div className="flex flex-col justify-center">
    <h1 className="text-3xl md:text-4xl lg:text-5xl text-center lg:text-left font-bold mt-12">
    +100 RÉFÈRENTS<br className="hidden md:block" /> FORMÉS
    </h1>
    <p className="mt-6 lg:mt-10">
    Depuis le lancement de cette cohorte, plus de 100 apprenants ont bénéficié de cette formation.
    </p>
    <p className="mt-6 lg:mt-10">
    Ce programme se distingue par une approche pédagogique active, où l’apprenant <br /> n’est pas seulement récepteur de connaissances, mais également acteur de son <br /> propre apprentissage. Chaque apprenant est suivi de près par un coach spécialisé,<br /> qui joue un rôle essentiel dans son parcours de formation. Ce suivi individualisé <br /> permet d’adapter le programme aux besoins spécifiques de chaque apprenant et de <br /> favoriser une compréhension approfondie des concepts enseignés.
    </p>
  </div>
  <div className="mt-8 lg:mt-0 flex justify-center lg:justify-end">
    <Image
      className="w-full lg:w-8/12 rounded-xl object-cover"
      src="/eCOLE47_1297919770577707_5409795518867950751_n-1536x1024.jpeg"
      alt="Description de l'image"
      width={1000}
      height={200}
    />
  </div>
</section>
<section className="bg-black p-10">
  <h1 className="text-2xl text-white text-center p-12 font-bold">
    NOS OUTILS
  </h1>
  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 text-white">
    <div className="text-center animate-pulse">
      <Image className="rounded-full p-4 mx-auto hover:animate-bounce" src="/logo-cava.jpg" alt="" width={100} height={100} />
      <p>Canva</p>
    </div>
    <div className="text-center animate-pulse">
      <Image className="rounded-full p-4 mx-auto hover:animate-bounce" src="/photoshop.png" alt="Laravel" width={100} height={100} />
      <p>Photoshop</p>
    </div>
    <div className="text-center animate-pulse">
      <Image className="rounded-full p-4 mx-auto hover:animate-bounce" src="/logo-Html.png" alt="Next.js" width={100} height={100} />
      <p>Html</p>
    </div>
    <div className="text-center animate-pulse">
      <Image className="rounded-full p-4 mx-auto hover:animate-bounce" src="/PHP-logo.svg.png" alt="PHP" width={100} height={100} />
      <p>Css</p>
    </div>
   
  </div>
</section>

<section className="p-10">
  <h1 className="text-3xl sm:text-4xl lg:text-5xl text-center font-bold mb-8">
    Ce que tu vas apprendre
  </h1>
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
    <div className="p-6">
      <h3 className="text-red-600 text-xl font-bold mb-4">
      Élaborer et piloter des campagnes de notoriété
      </h3>
      <ul className="list-disc pl-4">
        <li>Maquetter une application</li>
        <li>Formaliser une stratégie éditoriale pour structurer la prise de parole en ligne</li>
        <li>Rédiger des contenus marketing en respectant un discours de marque</li>
        <li>Développer et gérer la présence d’une organisation au sein de communautés web</li>
        <li>Assurer la stratégie SEO/SEA d’un site web</li>
        <li>Définir et répartir un budget de communicationb</li>
        <li>Réaliser une interface utilisateur web</li>
        <li>Développer une interface utilisateur web dynamique</li>
      </ul>
    </div>
    <div className="p-6">
      <h3 className="text-red-600 text-xl font-bold mb-4">
      Élaborer et piloter des campagnes d'acquisition
      </h3>
      <ul className="list-disc pl-4">
        <li>Établir une stratégie de référencement naturel et payant</li>
        <li>Optimiser une landing-page pour la conversion</li>
        <li>Qualifier une audience-cible pour prioriser des actions</li>
        <li>Informer les décisions stratégiques d’une entreprise</li>
        <li>Identifier les CMS</li>
        <li>Connaître les bases du développement front-end (HTML, CSS, JavaScript)</li>
        <li>Réaliser un site web sécurisé à partir de WordPress</li>
      </ul>
    </div>
  </div>
</section>

         <Footer/>
       
      </body>
    
    </>
    )
}
export default Refe;