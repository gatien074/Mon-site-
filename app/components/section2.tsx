import Image from 'next/image';

const Section2 = () => (
  <section className="container mx-auto flex flex-col md:flex-row justify-center items-center my-16 bg-white px-4 md:px-0">
    <div className="flex-shrink-0 mb-8 md:mb-0 md:pr-16">
      <Image src="/Temoignage.png" alt="Temoignage" width={600} height={600} className="w-full max-w-sm md:max-w-md" />
    </div>
    <div className="text-center md:text-left">
      <h2 className="text-black text-xl md:text-2xl font-bold">Qui sommes nous ?</h2>
      <p className="text-gray-600 mt-2 text-base md:text-lg">
        Notre école est l'une des principales écoles de formation aux compétences numériques au Gabon. Nous proposons une large gamme de formations en développement web, marketing digital et autres métiers du numérique. Notre programme est conçu pour vous aider à développer les compétences dont vous avez besoin pour réussir dans l'économie numérique.
      </p>
      <p className="text-gray-600 mt-2 text-base md:text-lg">
        Notre école est l'une des principales écoles de formation aux compétences numériques au Gabon. Nous proposons une large gamme de formations en développement web, marketing digital et autres métiers du numérique. Notre programme est conçu pour vous aider à développer les compétences dont vous avez besoin pour réussir dans l'économie numérique.
      </p>
    </div>
  </section>
);

export default Section2;
