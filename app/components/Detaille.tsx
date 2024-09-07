// pages/detaille.js
import Main from "../components/Main";
import Link from 'next/link';
import Footer from "../components/Footer";
import Image from 'next/image';

const Detaille = () => {
  return (
    <>
      <Main />

      {/* Hero Section */}
      <section className="relative bg-gray-900 py-16 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/dev.png" // Ajoutez une image de fond attrayante
            alt="dev"
            layout="fill"
            objectFit="cover"
            className="opacity-30"
          />
        </div>
        <div className="relative z-10 flex flex-col items-center text-center px-4 md:px-8">
          <h1 className="text-white text-4xl md:text-6xl font-bold mb-6">
            Développeur Web
          </h1>
          <p className="text-white text-lg md:text-xl mb-8 max-w-lg">
            Explorez notre formation intensive pour devenir un expert en développement web. Acquérez les compétences essentielles pour lancer votre carrière.
          </p>
          <Link href="/formations" className="bg-red-600 text-white border-2 border-red-600 rounded-lg py-3 px-6 text-lg font-semibold transition-transform duration-300 transform hover:scale-105 hover:bg-red-700 hover:border-red-700">
            En savoir plus
          </Link>
        </div>
      </section>

      {/* Second Section */}
      <section className="bg-white py-16 md:py-32">
        <div className="flex flex-col md:flex-row items-center justify-center px-4 md:px-8">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <Image
              src="/digital.jpg" // Ajoutez une image pertinente
              alt="Référent Digital"
              width={500}
              height={300}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-1/2 text-center md:text-left md:pl-8">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Référent Digital
            </h2>
            <p className="text-gray-700 text-lg mb-6">
              Apprenez à devenir un référent digital capable de gérer des projets numériques complexes, avec une approche axée sur les résultats.
            </p>
            <Link href="/referents" className="bg-red-600 text-white border-2 border-red-600 rounded-lg py-3 px-6 text-lg font-semibold transition-transform duration-300 transform hover:scale-105 hover:bg-red-700 hover:border-red-700">
              En savoir plus
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Detaille;
