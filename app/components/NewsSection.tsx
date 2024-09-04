"use client";

import React from "react";
import Image from "next/image";

const NewsSection: React.FC = () => {
  const newsItems = [
    {
      src: "/inscr.jpg",
      title: "Inscriptions prolongées",
      description:
        "En raison de votre enthousiasme pour les inscriptions, nous avons décidé de prolonger la date des inscriptions jusqu'au 31/08/2024 à 23h59 ⏳. Nous voulons donner la chance à quelqu'un de rejoindre notre fabrique. Partagez la bonne nouvelle avec vos proches ! 😊",
      link: "https://www.facebook.com/photo/?fbid=922480903228781&set=a.233648298778715&locale=fr_FR",
    },
    {
      src: "/promo89.jpg",
      title: "Nouvelles cohortes",
      description:
        "Nous sommes de R.E.T.O.U.R ! Oui oui et avec de très bonnes nouvelles pour les villes de Libreville et de Port-Gentil 🔥🚀. Devenez Réferent Digital et Développeur Web et Web Mobile en 9 mois grâce à Ecole 241 et Initiative Jeunesse Autonome !",
      link: "/nouvelles-cohortes",
    },
    {
      src: "/Duvangu.jpeg",
      title: "Duvangu! La fabrique creative.",
      description:
        "Journée exceptionnelle dans les locaux de la fabrique creatrice.",
      link: "https://www.facebook.com/duvangu.art",
    },
    {
      src: "/labs.jpg",
      title: "🚨 APPEL À CANDIDATURE 🚨",
      description:
        "L'Organisation du monde islamique pour l'éducation, les sciences et la culture (ICESCO) est une institution spécialisée qui opère sous l'égide de l'Organisation de la coopération islamique (OCI). Elle se concentre sur la promotion des domaines de l'éducation, des sciences, de la culture et de la communication dans les pays islamiques",
      link: "https://www.facebook.com/photo?fbid=482384317743201&set=a.186020244046278",
    },
    {
      src: "/canal.jpg",
      title: "⚫️Canal + Gabon ",
      description:
        "Dans le but d’accompagner nos jeunes à acquérir une expérience professionnelle, un partenariat vient d'être établi entre CANAL+ GABON et notre fabrique Ecole 241 de Libreville 🔥",
      link: "https://www.facebook.com/Ecole241/?locale=fr_FR"
    },
    {
      src: "/Hackathon.png",
      title: "Hackathon!",
      description:
        "Comme il est de coutume chez nous, tous les vendredis c'est le mode : hackathon activé ! Rdv à partir de 12h pour les restitutions de nos travaux 🔥. Soyez nombreux à débriefer sur les travaux de nos apprenants avec nous.",
      link: "",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-xl mb-8 text-black text-center">Découvrez nos actualités</h2>
      <div className="relative bg-white w-full h-80">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-72 h-72 overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-full h-full animate-spin">
                  {newsItems.map((news, index) => (
                    <div
                      key={index}
                      className="absolute flex items-center justify-center w-full h-full"
                      style={{ transform: `rotate(${index * (360 / newsItems.length)}deg)` }}
                    >
                      <Image
                        src={news.src}
                        alt={news.title}
                        width={200}
                        height={200}
                        className="w-24 h-24 rounded-full object-cover"
                      
                      />
                       <Image
                        src={news.src}
                        alt={news.title}
                        width={200}
                        height={200}
                        className="w-24 h-24 rounded-full object-cover"
                      
                      />
                    
                    </div>
                    
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
        {newsItems.map((news, index) => (
          <div key={index} className="relative overflow-hidden transform-gpu transition-transform duration-300 hover:translate-y-6">
            <Image
              src={news.src}
              alt={news.title}
              width={600}
              height={400}
              className="w-full h-auto"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 p-4">
              <p className="text-white text-xl text-center mb-4">
                {news.description}
              </p>
              <a
                href={news.link}
                className="bg-white text-black py-2 px-4 rounded hover:bg-red-700 transition-colors duration-300"
              >
                Découvrir plus
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsSection;
