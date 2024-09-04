const Section3 = () => (
  <section className="container mx-auto bg-[#27577A] bg-opacity-90 p-5 md:p-6">
    <div className="text-center mb-6">
      <h1 className="text-white font-bold text-2xl md:text-3xl lg:text-4xl">Notre histoire</h1>
    </div>
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
      {['Libreville', 'Port-Gentil', 'Moanda'].map(location => (
        <div key={location} className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-black font-bold text-xl md:text-2xl lg:text-3xl">{location}</h2>
          <p className="text-gray-600 text-center mt-2 text-sm md:text-base lg:text-lg">
            Fabrique Simplon de {location} qui forme aux métiers du numérique. Elle a pour objectif d'offrir une expérience inoubliable à tous les apprenants
          </p>
        </div>
      ))}
    </div>
  </section>
);

export default Section3;
