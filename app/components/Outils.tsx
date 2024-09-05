import Image from 'next/image';
import React from 'react';
import Footer from './Footer';
import Logo from './Logo';
import Anime from '../components/Anime';

const Outils = () => {
  return (
    <>
      <section className="bg-black p-8 sm:p-10">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl text-white text-center p-6 sm:p-12 font-bold">
          NOS OUTILS
        </h1>
        <Anime/>
      </section>

      <section className="p-8 sm:p-10 lg:p-12">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl text-center font-bold mb-6 sm:mb-8">
          Ce que tu vas apprendre
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          <div className="p-4 sm:p-6 lg:p-8 bg-gray-100 rounded-lg shadow-lg">
            <h3 className="text-red-600 text-xl sm:text-2xl font-bold mb-4">
              Développer le front-end d’une application web et web mobile
            </h3>
            <ul className="list-disc pl-5 space-y-2">
              <li className="text-sm sm:text-base">Maquetter une application</li>
              <li className="text-sm sm:text-base">Réaliser une interface utilisateur web</li>
              <li className="text-sm sm:text-base">Développer une interface utilisateur web dynamique</li>
              <li className="text-sm sm:text-base">Réaliser une interface utilisateur avec une solution de gestion de contenu ou e-commerce</li>
            </ul>
          </div>
          <div className="p-4 sm:p-6 lg:p-8 bg-gray-100 rounded-lg shadow-lg">
            <h3 className="text-red-600 text-xl sm:text-2xl font-bold mb-4">
              Développer le back-end d’une application web et web mobile
            </h3>
            <ul className="list-disc pl-5 space-y-2">
              <li className="text-sm sm:text-base">Créer une base de données</li>
              <li className="text-sm sm:text-base">Développer les composants d’accès aux données</li>
              <li className="text-sm sm:text-base">Élaborer et mettre en œuvre des composants dans une application de gestion de contenu ou e-commerce</li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Outils;
