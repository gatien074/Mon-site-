"use client";

import React from "react";
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
    

      <main className="relative z-10">
        <Slider images={images} />
        <div className="bg-cover" style={{ backgroundImage: "url('/back.gif')" }}>
      <NewsSection />
      <div className="flex-auto justify-center">
        <VideoPlayer src="/video.mp4" width={(500)} />
  
      </div>
    </div>
      </main>
    </>
  );
};

export default HomePage;
