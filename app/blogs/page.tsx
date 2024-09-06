"use client";

import React from "react";
import Main from "../components/Main";
import { Footer } from "../components/Footer";
// Assurez-vous que le chemin est correct
import NewsSection from "../components/NewsSection";
import VideoPlayer from "../components/videosplayer"; // Assurez-vous que cela correspond à votre composant

const HomePage: React.FC = () => {
  const images = [
    { src: "/actu.avif", title: "Actualité" },
    { src: "/fab.webp", title: "Actualité" },
    { src: "/actus.jpg", title: "Actualité" },
    { src: "/duvangu.jpg", title: "Actualité" },
  ];

  return (
    <>
      <Main />
      <main className="relative min-h-screen bg-white overflow-x-hidden">

        <div
          className="relative bg-cover bg-center"
          style={{ backgroundImage: "url('/your-background-image.jpg')" }} // Remplacez par l'URL correcte
        >
          <div className="bg-opacity-200 bg-black">
            <NewsSection />
          </div>

          <div className="flex flex-wrap justify-center gap-4 px-4 py-8">
          <VideoPlayer src="/video.mp4" />
         <VideoPlayer src="/video.mp4" />
         <VideoPlayer src="/video.mp4" />
         </div>

        </div>
      </main>

      <Footer />
    </>
  );
};

export default HomePage;
