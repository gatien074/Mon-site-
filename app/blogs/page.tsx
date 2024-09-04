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
      <main className="relative min-h-screen">
        <Slider images={images} />

        <div className="relative bg- bg-center" style={{ backgroundImage: "url('/200w.webp')" }}>
          <div className="bg-opacity-1 bg-blue-500">
            <NewsSection />
          </div>

          <div className="flex justify-center py-8">
            <VideoPlayer src="/video.mp4" width={500} />
          </div>
        </div>
      </main>
    </>
  );
};

export default HomePage;
