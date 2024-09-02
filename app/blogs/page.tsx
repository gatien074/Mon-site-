"use client";

import React from "react";
import Slider from "../components/Slider"; // Assurez-vous que le chemin est correct
import NewsSection from "../components/NewsSection";
import VideoPlayer from "../components/videosplayer"; // Assurez-vous que cela correspond à votre composant

const HomePage: React.FC = () => {
  const images = [
    { src: "/actu.avif", title: "Actualité" },
    { src: "/fab.jpg", title: "Actualité" },
    { src: "/actus.jpg", title: "Actualité" },
    { src: "/duvangu.jpg", title: "Actualité" },
  ];

  return (
    <>
      <header className="bg-gray-800 p-4">
        <h1 className="text-white text-3xl">Mon Blog</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="/" className="text-white">Accueil</a>
            </li>
            <li>
              <a href="#" className="text-white">À propos</a>
            </li>
            <li>
              <a href="#" className="text-white">Contact</a>
            </li>
          </ul>
        </nav>
      </header>

      <main className="relative z-10">
        <Slider images={images} />
        <NewsSection />
        <div className="flex flex-wrap gap-4">
          <VideoPlayer src="/video.mp4" width={600} />
          <VideoPlayer src="/videos.mp4" width={600} />
          
        </div>
      </main>
    </>
  );
};

export default HomePage;
