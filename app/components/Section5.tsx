const Section5 = () => {
  return (
    <>
      <section className="container mx-auto mt-20 bg-zinc-300 p-6 md:p-10">
        <div className="text-center md:text-left">
          <h4 className="text-2xl md:text-4xl font-bold sm:mb-4 md:mb-8">
            Status des promos formations
          </h4>
          <p className="text-sm md:text-base mb-6 md:mb-0">
            Nous vous listons les promotions en cours et celles à venir.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 md:mt-16">
          <div className="bg-slate-100 p-4 rounded-xl drop-shadow-2xl">
            <p className="text-sm font-bold">Développement web et web mobile</p>
            <p className="text-sm font-bold">Promo 5 2023 - 2024</p>
            <div className="flex justify-between mt-4">
              <p className="text-sm">Ville: Libreville</p>
              <p className="text-sm flex items-center">
                PROMO EN COURS
                <button
                  className="bg-red-600 ml-2 rounded-full w-5 h-5 checked:bg-green-600"
                  type="button"
                ></button>
              </p>
            </div>
          </div>

          <div className="bg-slate-100 p-4 rounded-xl drop-shadow-2xl">
            <p className="text-sm font-bold">Développement web et web mobile</p>
            <p className="text-sm font-bold">Promo 5 2023 - 2024</p>
            <div className="flex justify-between mt-4">
              <p className="text-sm">Ville: Moanda</p>
              <p className="text-sm flex items-center">
                PROMO EN COURS
                <button
                  className="bg-green-600 ml-2 rounded-full w-5 h-5 checked:bg-red-600"
                  type="button"
                ></button>
              </p>
            </div>
          </div>

          <div className="bg-slate-100 p-4 rounded-xl drop-shadow-2xl">
            <p className="text-sm font-bold">Référent Digital</p>
            <p className="text-sm font-bold">Promo 5 2023 - 2024</p>
            <div className="flex justify-between mt-4">
              <p className="text-sm">Ville: Libreville</p>
              <p className="text-sm flex items-center">
                PROMO EN COURS
                <button
                  className="bg-red-600 ml-2 rounded-full w-5 h-5 checked:bg-green-600"
                  type="button"
                ></button>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Section5;
