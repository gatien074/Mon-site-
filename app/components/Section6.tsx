 import Image from "next/image"
 import style from "../style.module.css"


const Section6 = () => {
    return(

        <>
         <section>
        <div className="m-auto ml-8 mt-16">
          <h4 className="text-4xl font-bold ">Nous sommes à</h4>
          <p className="mt-5">
            École 241 possède à nos deux campus notamment sur les villes de
            Libreville et <br /> Port-Gentil, cette année nous nous déployons du
            côté de la ville de Moanda.
          </p>
        </div>

        <div className="flex justify-around ">
          <div className=" relative right-32  ">
            <div className="absolute -z-10 w-max mt-6  bg-black  break-before-all">
              <Image 
                src="/boulevard.avif"
                alt="backgrounda image"
                className={style.site}
                width={1000}
                height={1000}
              ></Image>
            </div>
            <div className=" justify-around ">
              <p className="flex m-5 p-3 text-white mt-10 justify-center">
                120 ETUDIANTS FORMES A CE JOUR
              </p>
              <h5 className="m-auto flex justify-center text-3xl text-white relative top-32 p-3 right-24 font-bold">
                Libreville
              </h5>
            </div>
          </div>

          <div className="relative right-16">
            <div className="relative w-96 ">
              <div className="absolute -z-10 w-96 bg-black  break-before-all">
                <Image
                  src="/pog.webp"
                  alt="backgrounds image"
                  className="w-full opacity-30"
                  width={1000}
                  height={1000}
                ></Image>
              </div>
              <div className=" justify-around ">
                <p className="flex m-5 text-white mt-6">
                  120 ETUDIANTS FORMES A CE JOUR
                </p>
                <h5 className="m-auto flex justify-center text-white relative top-32 right-24 font-bold text-2xl hover:">
                  PORT-GENTIL
                </h5>
              </div>
            </div>

            <div className="relative w-96 mt-52">
              <div className="absolute -z-10 w-96  bg-black  break-before-all">
                <Image
                  src="/bye-moanda.jpg"
                  alt="background image"
                  className="w-full opacity-30"
                  width={1000}
                  height={1000}
                ></Image>
              </div>
              <div className=" justify-around ">
                <p className="flex m-5 text-white mt-6">
                  120 ETUDIANTS FORMES A CE JOUR
                </p>
                <h5 className="m-auto flex justify-center text-white relative top-32 right-24 font-bold text-2xl">
                  MOANDA
                </h5>
              </div>
            </div>
          </div>
        </div>
      </section>
        

   </>
    )


}

export default Section6;