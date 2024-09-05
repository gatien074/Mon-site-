const Section10 = () => {
  return (
    <>
      <section className="container mx-auto m-48 bg-zinc-300 p-6 md:p-10">
        <div className="text-center md:text-left mb-8">
          <h4 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6">
            Status des promos formations
          </h4>
          <p className="text-sm md:text-base">
            Nous vous listons les promotions en cours et celles à venir.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-slate-100 p-4 rounded-xl shadow-md">
            <p className="text-sm font-bold">Développement web et web mobile</p>
            <p className="text-sm font-bold">Promo 5 2023 - 2024</p>
            <div className="flex justify-between mt-4">
              <p className="text-sm">Ville: Libreville</p>
              <p className="text-sm flex items-center">
                PROMO EN COURS
                <button
                  className="bg-red-600 ml-2 rounded-full w-5 h-5"
                  type="button"
                ></button>
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-slate-100 p-4 rounded-xl shadow-md">
            <p className="text-sm font-bold">Développement web et web mobile</p>
            <p className="text-sm font-bold">Promo 5 2023 - 2024</p>
            <div className="flex justify-between mt-4">
              <p className="text-sm">Ville: Moanda</p>
              <p className="text-sm flex items-center">
                PROMO EN COURS
                <button
                  className="bg-green-600 ml-2 rounded-full w-5 h-5"
                  type="button"
                ></button>
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-slate-100 p-4 rounded-xl shadow-md">
            <p className="text-sm font-bold">Référent Digital</p>
            <p className="text-sm font-bold">Promo 5 2023 - 2024</p>
            <div className="flex justify-between mt-4">
              <p className="text-sm">Ville: Libreville</p>
              <p className="text-sm flex items-center">
                PROMO EN COURS
                <button
                  className="bg-red-600 ml-2 rounded-full w-5 h-5"
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

export default Section10;
