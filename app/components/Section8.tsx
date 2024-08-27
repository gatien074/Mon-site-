import Image from "next/image";


const Section8 = () => {
    return(
        <section className="flex justify-around">
        <div className="p-4 leading-6  mt-8">
          <h1 className="text-4xl font-bold m">
            Les compagnies <br />
            qui nous <br />
            fonts confiance
          </h1>
          <p className="mt-4">
            Vous souhaitez devenir partenaire de l`école cliquer <br />
            sur le bouton ci-dessous
          </p>
          <button
            className="bg-red-600 w-44 h-12 text-white border-2 rounded border-red-600 ml-10 mt- leading-3 relative right-10 top-16 hover:scale-105 translate-x-0.5 duration-75 hover:bg-black hover:border-black"
            type="button"
          >
            En savoir plus
          </button>
        </div>
        <div className="flex mt-16 gap-20">
          <div>
            <Image
              className="mb-3"
              src="/cnamgsc-removebg-preview 1.png"
              alt=""
              width={150}
              height={150}
            ></Image>
            <Image
              className="mt-16"
              src="/ogooue.png"
              alt=""
              width={150}
              height={150}
            ></Image>
            <Image
              className="mt-20"
              src="/eramet.png"
              alt=""
              width={150}
              height={150}
            ></Image>
          </div>
          <div className="m-4">
            <Image
              className="mb-3"
              src="/comilog_1-removebg-preview 1.png"
              alt=""
              width={150}
              height={150}
            ></Image>
            <Image
              className="mt-16"
              src="/pnpe-removebg-preview 1.png"
              alt=""
              width={150}
              height={150}
            ></Image>
            <Image
              className="mt-20"
              src="/école-simplon.png"
              alt=""
              width={150}
              height={150}
            ></Image>
          </div>
        </div>
      </section>
    )
}

export default Section8;