


const Section5 = ()=>{
    return(
        <>
        <section className="mt-44 bg-zinc-300 p-10  h-96">
        <div className="relative top-10">
          <h4 className="text-4xl font-bold relative left-5 mb-8 ">
            Status des promos formations
          </h4>
          <p className="relative left-5 bottom-6">
            Nous vous listons les promotions en cours et celle avenirs
          </p>
        </div>
        <div className="flex mt justify-around relative left-2 top-16">
          <div className="bg-slate-100 relative right-10 w-80 p-4  ">
            <p className="text-sm font-bold">Développement web et web mobile</p>
            <p className="text-sm font-bold">Promo 5 2023 - 2024</p>
            <div className="flex">
              <p className="text-sm">Ville: Libreville</p>
              <p className="relative left-12 text-sm">
                PROMO EN COURS{" "}
                <button
                  className="bg-red-600 rounded-full w-5 h-4"
                  type="button"
                ></button>
              </p>
            </div>
          </div>

          <div className="bg-slate-100  relative right-10 w-80 p-4 ">
            <p className="text-sm font-bold">Développement web et web mobile</p>
            <p className="text-sm font-bold">Promo 5 2023 - 2024</p>
            <div className="flex">
              <p className="text-sm">Ville: Moanda</p>
              <p className="relative left-12 text-sm">
                PROMO EN COURS{" "}
                <button
                  className="bg-green-600 rounded-full  w-5 h-4"
                  type="button"
                ></button>
              </p>
            </div>
          </div>

          <div className="bg-slate-100  relative right-10 w-80 p-4  ">
            <p className="text-sm font-bold">Réferent Digital</p>
            <p className="text-sm font-bold">Promo 5 2023 - 2024</p>
            <div className="flex  ">
              <p className="text-sm">Ville: Libreville</p>
              <p className="relative left-12 text-sm">
                PROMO EN COURS{" "}
                <button
                  className="bg-red-600 rounded-full  w-5 h-4"
                  type="button"
                ></button>
              </p>
            </div>
          </div>
        </div>
      </section>
      </>
    )
}

export default Section5;
