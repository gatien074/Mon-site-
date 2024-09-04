"use client";

import React from "react";
import Main from "../components/Main";
import { Footer } from "../components/Footer";
import Slider from "../components/Slider"; // Assurez-vous que le chemin est correct
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
      <Main/>
      <main className="relative min-h-screen" style={{ backgroundColor: 'white' }}>
        <Slider images={images} />

        <div className="relative bg- bg-center" style={{ backgroundImage: "')" }}>
          <div className="bg-opacity-200 bg-black">
            <NewsSection />
          </div>

          <div className="flex flex-row px-12 justify-center py-8 mx-auto">
            <VideoPlayer src="/video.mp4" width={600} />
            <VideoPlayer src="/video.mp4" width={600} />
            <VideoPlayer src="/video.mp4" width={600} />
          </div>
        </div>
      </main>
     
      <Footer />
    </>
  );
};

export default HomePage;
