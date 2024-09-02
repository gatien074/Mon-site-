import Image from "next/image";
import style from "../style.module.css";
import section from './section1';




const Section8 = () => {
    return(
        <section className={style.section8}>
        <div className="  mt-8">
          <h1 className={style.section_grandTitre}>
            Les compagnies <br />
            qui nous <br />
            fonts confiance
          </h1>
          <p className={style.sectionP}>
            Vous souhaitez devenir partenaire de l`école cliquer <br />
            sur le bouton ci-dessous
          </p>
          <button
            className="bg-red-600 w-44 h-12 text-white  border-2 rounded border-red-600 ml-10 mt- leading-3 relative left-14  top-16 hover:scale-105 translate-x-0.5 duration-700 hover:bg-black hover:border-black"
            type="button"
          >
            En savoir plus
          </button>
        </div>
        <div className={style.section_imgs}>
          <div className={style.images1}>
            <Image
               className={style.carousel_image}
              src="/cnamgsc-removebg-preview 1.png"
              alt=""
              width={150}
              height={150}
            ></Image>
            <Image
              className={style.carousel_image}
              src="/ogooue.png"
              alt=""
              width={150}
              height={150}
            ></Image>
            <Image
              className={style.carousel_image}
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
              src="/pnpe-removebg-preview 1 (1).png"
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