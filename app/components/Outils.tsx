import Image from 'next/image';
import React from 'react';
import Footer from './Footer';
import Logo from './Logo';

 








 const Outils =()=>{
    return(
        <>


        <section className="bg-black p-10">
  <h1 className="text-2xl text-white text-center p-12 font-bold">
    NOS OUTILS
  </h1>
  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 text-white">
    <div className="text-center animate-pulse">
      <Image className="rounded-full p-4 mx-auto hover:animate-bounce" src="/JavaScript.png" alt="JavaScript" width={100} height={100} />
      <p>JavaScript</p>
    </div>
    <div className="text-center animate-pulse">
      <Image className="rounded-full p-4 mx-auto hover:animate-bounce" src="/Laravel.png" alt="Laravel" width={100} height={100} />
      <p>Laravel</p>
    </div>
    <div className="text-center animate-pulse">
      <Image className="rounded-full p-4 mx-auto hover:animate-bounce" src="/Nextjs.png" alt="Next.js" width={100} height={100} />
      <p>Next.js</p>
    </div>
    <div className="text-center animate-pulse">
      <Image className="rounded-full p-4 mx-auto hover:animate-bounce" src="/PHP-logo.svg.png" alt="PHP" width={100} height={100} />
      <p>PHP</p>
    </div>
    <div className="text-center animate-pulse">
      <Image className="rounded-full p-4 mx-auto hover:animate-bounce" src="/React.png" alt="React" width={100} height={100} />
      <p>React</p>
    </div>
    <div className="text-center animate-pulse">
      <Image className="rounded-full p-4 mx-auto hover:animate-bounce" src="/Vuejs.png" alt="Vue.js" width={80} height={100} />
      <p>Vue.js</p>
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
        Développer le front-end d’une application web et web mobile
      </h3>
      <ul className="list-disc pl-4">
        <li>Maquetter une application</li>
        <li>Réaliser une interface utilisateur web</li>
        <li>Développer une interface utilisateur web dynamique</li>
        <li>Réaliser une interface utilisateur avec une solution de gestion de contenu ou e-commerce</li>
      </ul>
    </div>
    <div className="p-6">
      <h3 className="text-red-600 text-xl font-bold mb-4">
        Développer le back-end d’une application web et web mobile
      </h3>
      <ul className="list-disc pl-4">
        <li>Créer une base de données</li>
        <li>Développer les composants d’accès aux données</li>
        <li>Élaborer et mettre en œuvre des composants dans une application de gestion de contenu ou e-commerce</li>
      </ul>
    </div>
  </div>
</section>

         <Footer/>
        </>
    )
 }

 export default Outils;