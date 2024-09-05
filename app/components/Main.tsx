"use client";
import { useState } from 'react';
import Link from 'next/link';
import Logo from './Logo'; // Ensure the Logo component path is correct

const Main = () => {
  return (
    <header className="bg-black text-white w-full top-0 z-10 p-4 border-b-2 border-x-white">
      <nav className="flex flex-col md:flex-row md:justify-between items-center sm:items-center " >
        {/* Logo */}
        <div className="mb-4 md:mb-0">
          <Logo />
        </div>

        {/* Navigation Links */}
        <ul className="flex flex-col  items-center lg:items-start md:flex-row md:space-x-8 space-y-4 md:space-y-0">
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
        <Link href="https://vu.fr/xMXOL">
          <button
            type="button"
            className="bg-black text-red-600 border-2 border-red-700  mr-64 rounded p-2 shadow hover:shadow-white hover:scale-105 transition-all duration-150 w-full md:w-auto h-10 mt-4 md:mt-0"
          >
            Postuler sur Libreville
          </button>
        </Link>
      </nav>
    </header>
  );
};

export default Main;
