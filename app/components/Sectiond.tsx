import Image from "next/image";
import Link from "next/link"; // Importer Link pour la navigation

const Section11 = () => {
  return (
    <section className="container mx-auto px-12 py-20">
      <div className="text-center mb-20">
        <h4 className="text-2xl md:text-4xl font-bold">Nous sommes à</h4>
        <p className="mt-6 text-xl md:text-2xl text-gray-700">
          École 241 possède trois campus, à Libreville , Port-Gentil. à Moanda.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16">
        {/* Campus Libreville */}
        <Link href="/libreville" passHref>
          <div className="relative rounded-lg overflow-hidden cursor-pointer">
            <div className="absolute inset-0 bg-black opacity-70"></div>
            <Image
              src="/boulevard.avif"
              alt="Campus Libreville"
              fill
              style={{ objectFit: 'cover' }}
              className="w-full h-full"
            />
            <div className="relative z-10 text-center text-white p-12 bg-black bg-opacity-60 rounded-lg">
              <p className="text-xl md:text-2xl font-semibold">120 ÉTUDIANTS FORMÉS À CE JOUR</p>
              <h5 className="text-3xl md:text-4xl font-bold mt-4">Libreville</h5>
            </div>
          </div>
        </Link>

        {/* Campus Port-Gentil */}
        <Link href="/campuspog" passHref>
          <div className="relative rounded-lg overflow-hidden cursor-pointer">
            <div className="absolute inset-0 bg-black opacity-70"></div>
            <Image
              src="/pog.webp"
              alt="Campus Port-Gentil"
              fill
              style={{ objectFit: 'cover' }}
              className="w-full h-full"
            />
            <div className="relative z-10 text-center text-white p-12 bg-black bg-opacity-60 rounded-lg">
              <p className="text-xl md:text-2xl font-semibold">120 ÉTUDIANTS FORMÉS À CE JOUR</p>
              <h5 className="text-3xl md:text-4xl font-bold mt-4">Port-Gentil</h5>
            </div>
          </div>
        </Link>

        {/* Campus Moanda */}
        <Link href="/moanda" passHref>
          <div className="relative rounded-lg overflow-hidden cursor-pointer">
            <div className="absolute inset-0 bg-black opacity-70"></div>
            <Image
              src="/bye-moanda.jpg"
              alt="Campus Moanda"
              fill
              style={{ objectFit: 'cover' }}
              className="w-full h-full"
            />
            <div className="relative z-10 text-center text-white p-12 bg-black bg-opacity-60 rounded-lg">
              <p className="text-xl md:text-2xl font-semibold">120 ÉTUDIANTS FORMÉS À CE JOUR</p>
              <h5 className="text-3xl md:text-4xl font-bold mt-4">Moanda</h5>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Section11;
