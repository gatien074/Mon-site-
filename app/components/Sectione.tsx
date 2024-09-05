import Image from "next/image";

const Section12 = () => {
  return (
    <section className="container mx-auto text-black px-4 m-48">
      <div className="flex flex-col md:flex-row md:justify-between items-center">
        <div className="w-full md:w-1/2 p-4 text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-bold leading-tight">
            Les compagnies <br />
            qui nous <br />
            font confiance
          </h1>
          <p className="mt-4 text-sm md:text-base">
            Vous souhaitez devenir partenaire de l'école ? Cliquez <br />
            sur le bouton ci-dessous
          </p>
          <button
            className="bg-red-600 w-full md:w-44 h-12 text-white border-2 rounded border-red-600 mt-8 hover:scale-105 transform transition duration-300 hover:bg-black hover:border-black mx-auto md:mx-0"
            type="button"
          >
            En savoir plus
          </button>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 mt-8 md:mt-0 w-full md:w-1/2">
          <Image
            className="w-full h-auto object-contain"
            src="/cnamgsc-removebg-preview 1.png"
            alt="Logo 1"
            width={150}
            height={150}
          />
          <Image
            className="w-full h-auto object-contain"
            src="/ogooue.png"
            alt="Logo 2"
            width={150}
            height={150}
          />
          <Image
            className="w-full h-auto object-contain"
            src="/eramet.png"
            alt="Logo 3"
            width={150}
            height={150}
          />
          <Image
            className="w-full h-auto object-contain"
            src="/comilog_1-removebg-preview 1.png"
            alt="Logo 4"
            width={150}
            height={150}
          />
          <Image
            className="w-full h-auto object-contain"
            src="/pnpe-removebg-preview 1 (1).png"
            alt="Logo 5"
            width={150}
            height={150}
          />
          <Image
            className="w-full h-auto object-contain"
            src="/école-simplon.png"
            alt="Logo 6"
            width={150}
            height={150}
          />
        </div>
      </div>
    </section>
  );
};

export default Section12;
