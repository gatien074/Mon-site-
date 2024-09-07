// pages/formations.js
import Image from 'next/image';
import Main from '../components/Main';
import Footer from '../components/Footer';
import Outils from "../components/Outils";
import { motion } from 'framer-motion';
import style from '../style.module.css';

const Formations = () => {
  return (
    <>
      <Main />

      {/* Hero Section */}
      <section className="px-4 py-8 bg-black text-white flex flex-col lg:flex-row items-center lg:justify-between">
        <div className="text-center lg:text-left lg:w-1/2 lg:pr-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Engagez <span className={style.span}>un développeur expérimenté</span> pour rejoindre votre équipe
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl">
            Exprimez vos besoins, et nous vous fournirons une sélection de <br className="hidden md:block" /> candidats qualifiés dans les 48 heures.
          </p>
        </div>
        <div className="lg:w-1/2 mt-8 lg:mt-0">
          <Image
            src="/hero-image.jpg" // Changez le nom de l'image si nécessaire
            alt="Développeur"
            width={600}
            height={400}
            className="w-full h-auto rounded-lg object-cover"
          />
        </div>
      </section>

      {/* Info Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            +100 DEVELOPPEURS <br className="hidden md:block" /> FORMÉS
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl">
            École 241, est la première institution gabonaise dédiée à la formation gratuite de <br className="hidden md:block" /> développeurs …
          </p>
          <p className="mt-6 text-lg md:text-xl lg:text-2xl">
            Notre approche pédagogique repose sur l’enseignement actif, où les apprenants bénéficient <br className="hidden md:block" /> d’un suivi personnalisé assuré par des coachs spécialisés en développement. En <br className="hidden md:block" /> collaboration avec notre partenaire principal, Symplon, notre programme intègre des cours <br className="hidden md:block" /> et des évaluations rigoureuses.
          </p>
        </div>
        <div className="flex justify-center">
          <Image
            src="/eCOLE47_1297919770577707_5409795518867950751_n-1536x1024.jpeg"
            alt="Description de l'image"
            width={1200}
            height={800}
            className="w-full lg:w-8/12 rounded-xl object-cover"
          />
        </div>
      </section>

      <Outils />

      
    </>
  );
}

export default Formations;
