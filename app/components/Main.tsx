"use client";
import style from "../style.module.css";
import Link from 'next/link';
import Logo from './Logo'; // Ensure the path to the Logo component is correct

const Main = () => {
  return (
    <section className={style.main}>
      <Logo />
      <ul className="flex flex-col sm:flex-row sm:mt-9 sm:gap-9 justify-center">
        <li>
          <Link
            className="hover:text-red-500 hover:scale-110 active:text-red-500 text-sm"
            href="/"
          >
            Accueil
          </Link>
        </li>
        <li>
          <Link
            className="hover:text-red-500 hover:scale-110 duration-75 active:text-red-500 text-sm"
            href="/formations"
          >
            Nos formations
          </Link>
        </li>
        <li>
          <Link
            className="hover:text-red-500 hover:scale-110 active:text-red-500 text-sm"
            href="#"
          >
            Nos campus
          </Link>
        </li>
        <li>
          <Link
            className="hover:text-red-500 hover:scale-110 active:text-red-500 text-sm"
            href="/A_propos"
          >
            À propos de nous
          </Link>
        </li>
        <li>
          <Link
            className="hover:text-red-500 hover:scale-110 active:text-red-500 text-sm"
            href="/blogs"
          >
            Blog
          </Link>
        </li>
        <li>
          <Link
            className="hover:text-red-500 hover:scale-110 active:text-red-500 hover:decoration-dashed text-sm"
            href="/contact"
          >
            Contact
          </Link>
        </li>
      </ul>
      <Link className={style.lien} href="https://vu.fr/xMXOL">
        <button
          type="button"
          className="bg-black p-2 rounded text-sm text-red-600 border-2 border-red-700 shadow hover:shadow-white hover:scale-105 duration-700 focus:bg-white w-full lg:w-auto h-10"
        >
          Postuler sur Libreville
        </button>
      </Link>
    </section>
  );
};

export default Main;
