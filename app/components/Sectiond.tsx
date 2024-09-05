import Image from "next/image";
import style from "../style.module.css";

const Section11 = () => {
  return (
    <>
      <section className="container mx-auto mt-20 px-4">
        <div className="text-center mb-10">
          <h4 className="text-3xl md:text-4xl font-bold">Nous sommes à</h4>
          <p className="mt-5 text-sm md:text-base">
            École 241 possède deux campus, à Libreville et Port-Gentil. Cette année, nous nous déployons également à Moanda.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Campus Libreville */}
          <div className="relative rounded-lg overflow-hidden">
            <div className="absolute inset-0 bg-black opacity-60"></div>
            <Image
              src="/boulevard.avif"
              alt="Campus Libreville"
              fill
              style={{ objectFit: 'cover' }}
              className="w-full h-full"
            />
            <div className="relative z-10 text-center text-red-600 p-4 bg-white bg-opacity-70 rounded-lg">
              <p className="text-lg font-semibold">120 ÉTUDIANTS FORMÉS À CE JOUR</p>
              <h5 className="text-2xl md:text-3xl font-bold mt-4">Libreville</h5>
            </div>
          </div>

          {/* Campus Port-Gentil */}
          <div className="relative rounded-lg overflow-hidden">
            <div className="absolute inset-0 bg-black opacity-60"></div>
            <Image
              src="/pog.webp"
              alt="Campus Port-Gentil"
              fill
              style={{ objectFit: 'cover' }}
              className="w-full h-full"
            />
            <div className="relative z-10 text-center text-white p-4 bg-black bg-opacity-60 rounded-lg">
              <p className="text-lg font-semibold">120 ÉTUDIANTS FORMÉS À CE JOUR</p>
              <h5 className="text-2xl md:text-3xl font-bold mt-4">Port-Gentil</h5>
            </div>
          </div>

          {/* Campus Moanda */}
          <div className="relative rounded-lg overflow-hidden">
            <div className="absolute inset-0 bg-black opacity-60"></div>
            <Image
              src="/bye-moanda.jpg"
              alt="Campus Moanda"
              fill
              style={{ objectFit: 'cover' }}
              className="w-full h-full"
            />
            <div className="relative z-10 text-center text-white p-4 bg-black bg-opacity-60 rounded-lg">
              <p className="text-lg font-semibold">120 ÉTUDIANTS FORMÉS À CE JOUR</p>
              <h5 className="text-2xl md:text-3xl font-bold mt-4">Moanda</h5>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Section11;
