"use client"; // Assurez-vous que le mode strict est activé

import { useState } from 'react';
import Link from 'next/link';
import Logo from './Logo'; // Assurez-vous que le chemin du composant Logo est correct

const Main = () => {
  return (
    <header className="bg-black text-white w-full top-0 z-10 p-4 border-b-2 border-x-white overflow-x-hidden">
      <nav className="flex flex-col md:flex-row md:justify-between items-center">
        {/* Logo */}
        <div className="mb-4 md:mb-0 ml-[-20px]"> {/* Ajustez ml-[-20px] pour décaler le logo vers la gauche */}
          <Logo />
        </div>

        {/* Navigation Links */}
        <ul className="flex flex-col items-center md:flex-row md:space-x-8 space-y-4 md:space-y-0">
          <li>
            <Link
              className="hover:text-red-500 hover:scale-110 active:text-red-500 text-sm transition-transform duration-200"
              href="http://localhost:3000"
            >
              Accueil
            </Link>
          </li>
          <li>
            <Link
              className="hover:text-red-500 hover:scale-110 active:text-red-500 text-sm transition-transform duration-200"
              href="/Detaille"
            >
              Nos formations
            </Link>
          </li>
          <li>
            <Link
              className="hover:text-red-500 hover:scale-110 active:text-red-500 text-sm transition-transform duration-200"
              href=""
            >
              Nos campus
            </Link>
          </li>
          <li>
            <Link
              className="hover:text-red-500 hover:scale-110 active:text-red-500 text-sm transition-transform duration-200"
              href="/A_propos"
            >
              À propos de nous
            </Link>
          </li>
          <li>
            <Link
              className="hover:text-red-500 hover:scale-110 active:text-red-500 text-sm transition-transform duration-200"
              href="/blogs"
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              className="hover:text-red-500 hover:scale-110 active:text-red-500 hover:decoration-dashed text-sm transition-transform duration-200"
              href="/contact"
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Button */}
        <div className="mt-4 md:mt-0 flex justify-center w-full md:w-auto">
          <Link href="https://vu.fr/xMXOL">
            <button
              type="button"
              className="bg-black text-red-600 border-2 border-red-700 rounded p-2 shadow hover:shadow-white hover:scale-105 transition-all duration-150 w-full md:w-auto h-10 text-xs mr-20" // Réduit la taille du texte
            >
              Postuler sur Libreville
            </button>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Main;
