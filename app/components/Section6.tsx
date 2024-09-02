 import Image from "next/image"
 import style from "../style.module.css"
import section from './section1';


const Section6 = () => {
    return(

        <>
         <section className=" sm:w-full md:w-1/2 ">
        <div className=" sm:w-full md:w-1/2 sm:text-sm md:text-lg m-auto ml-28 mt-16">
          <h4 className="text-4xl font-bold ">Nous sommes à</h4>
          <p className="mt-5">
            École 241 possède à nos deux campus notamment sur les villes de
            Libreville et <br /> Port-Gentil, cette année nous nous déployons du
            côté de la ville de Moanda.
          </p>
        </div>

        <div className={style.section1_zone}>
          <div className=" sm:w-full md:w-1/2  relative left-32 ">
            <div className="absolute -z-10 w-max mt-6  bg-black  break-before-all">
              <Image 
                src="/boulevard.avif"
                alt="backgrounda image"
                className={style.site}
                width={1000}
                height={1000}
              ></Image>
            </div>
            <div className=" ">
              <p className="flex m-5 p-9 text-white mt-10 justify-center">
                120 ETUDIANTS FORMES A CE JOUR
              </p>
              <h5 className="m-auto sm:w-full flex justify-center sm:text-3xl text-white relative top-32 left-5 p-5 right-24 font-bold">
                Libreville
              </h5>
            </div>
          </div>

          <div className={style.section2_zone}>
            <div className="  sm:w-full md:w-1/2 relative w-96 ">
              <div className="absolute -z-10 w-96 bg-black  break-before-all">
                <Image
                  src="/pog.webp"
                  alt="backgrounds image"
                  className="w-full opacity-30"
                  width={1000}
                  height={1000}
                ></Image>
              </div>
              <div className=" ">
                <p className="flex m-5 text-white mt-6">
                  120 ETUDIANTS FORMES A CE JOUR
                </p>
                <h5 className="m-auto flex justify-center text-white relative top-24 font-bold text-2xl ">
                  PORT-GENTIL
                </h5>
              </div>
            </div>

            <div className="relative w-96 mt-52">
              <div className="absolute -z-10 w-96  bg-black break-before-all">
                <Image
                  src="/bye-moanda.jpg"
                  alt="background image"
                  className="w-full opacity-30"
                  width={1000}
                  height={1000}
                ></Image>
              </div>
              <div className=" ">
                <p className="flex m-5 text-white mt-6">
                  120 ETUDIANTS FORMES A CE JOUR
                </p>
                <h5 className="m-auto flex justify-center text-white relative top-28 right-24 font-bold text-2xl">
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