// components/Infop.js
import React from 'react';

const Infop = () => (
  <section className="mb-8  mx-5">
    <h2 className="text-2xl font-bold mb-4"> Notre galerie</h2>
    <div className="relative overflow-hidden w-full">
      <div
        className="flex gap-3" 
        style={{
          display: 'flex',
          width: '30%', // Ajustez en fonction du nombre d'images
          animation: 'slide 10s infinite linear'
        }}
      >
        <img src="/pog1.jpeg" alt="Information 1" className="w-full flex-shrink-0" />
        <img src="/pog2.png" alt="Information 2" className="w-full flex-shrink-0" />
        <img src="/pog3.jpeg" alt="Information 3" className="w-full flex-shrink-0" />
        <img src="/pog.webp" alt="Information 3" className="w-full flex-shrink-0" />
        {/* Ajoutez d'autres images ici */}
      </div>
    </div>
    <style jsx>{`
      @keyframes slide {
        0% {
          transform: translateX(0);
        }
        100% {
          transform: translateX(-100%);
        }
      }
    `}</style>
  </section>
);

export default Infop;
