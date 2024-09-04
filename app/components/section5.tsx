import Image from 'next/image';

const Section5 = () => (
  <section className="container mx-auto mt-12 px-4">
    <div className="text-center md:text-left mb-8">
      <h1 className="text-black text-2xl md:text-3xl font-bold">Le corps administratif</h1>
    </div>
    <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
      {[
        { name: 'Sylvère MBOUSSAMBA', title: 'Fondateur et président de école241', imageSrc: '/cdc.png' },
        { name: 'Sylvie TOURE', title: 'Directrice de école241', imageSrc: '/Madame-sylvie-1024x1024-1.jpg' },
        { name: 'Ferry BOUPEDI', title: 'Responsable campus Libreville', imageSrc: '/ferry-1024x1024-1.jpg' }
      ].map(person => (
        <div key={person.name} className="flex flex-col items-center bg-white shadow-md p-4 rounded-lg transition-transform duration-500 ease-in-out hover:scale-110 hover:shadow-lg">
          <Image src={person.imageSrc} alt={person.name} width={250} height={250} className="object-cover" />
          <h1 className="text-black font-bold text-lg md:text-xl mt-4 text-center">{person.name}</h1>
          <p className="text-red-600 mt-2 text-center">{person.title}</p>
          <div className="flex mt-4 space-x-4">
            <Image src="/eva_facebook-fill.svg" alt="Facebook" width={24} height={24} />
            <Image src="/pajamas_linkedin.svg" alt="LinkedIn" width={24} height={24} />
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Section5;
