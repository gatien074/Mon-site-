"use client";
import style  from "../style.module.css";

import { useState } from 'react';
import Link from 'next/link';
import Logo from './Logo'; // Assurez-vous que le chemin du composant Logo est correct


const Main =()=>{ 
  return (
    <section className={style.main}>
  <Logo />
      <ul className={style.main_liste}>
        <li>
          <Link
            className="hover:text-red-500 hover:scale-110 text-sm"
            href="#"
          >
            Accueil
          </Link>
        </li>
        <li>
          <Link
            className="hover:text-red-500 hover:scale-110 text-sm"
            href="/formations"
          >
            Nos formations
          </Link>
        </li>
        <li>
          <Link
            className="hover:text-red-500 hover:scale-110 text-sm"
            href="#"
          >
            Nos campus
          </Link>
        </li>
        <li>
          <Link
            className="hover:text-red-500 hover:scale-110 text-sm"
            href="#"
          >
            À propos de nous
          </Link>
        </li>
        <li>
          <Link
            className="hover:text-red-500 hover:scale-110 text-sm"
            href="#"
          >
            Blog
          </Link>
        </li>
        <li>
          <Link
            className="hover:text-red-500 hover:scale-110 hover:decoration-dashed text-sm"
            href="#"
          >
            Contact
          </Link>
        </li>
        </ul>
    <Link className={style.lien} href="https://vu.fr/xMXOL">
      <button
        type="button"
        className="bg-black p-2   relative right-40 bottom-2 rounded text-sm text-red-600 border-2 border-red-700 shadow hover:shadow-white hover:scale-105 duration-75 focus:bg-white w-full lg:w-auto h-10"
      >
        Postuler sur Libreville
      </button>
    </Link>
  
     </section>

  );
};

export default Main;
