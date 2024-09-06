import Image from "next/image";
import style from "../style.module.css";
import section from './section1';


const Section8 = () => {
    return(
      <section className="container mx-auto p-8 text-black">
  <div className="flex flex-col md:flex-row md:justify-between items-center">
    <div className="w-full md:w-1/2 p-4 text-center md:text-left">
      <h1 className="text-4xl font-bold">
        Les compagnies <br />
        qui nous <br />
        font confiance
      </h1>
      <p className="mt-4">
        Vous souhaitez devenir partenaire de l'école ? Cliquez <br />
        sur le bouton ci-dessous
      </p>
      <button
        className="bg-red-600 w-44 h-12 text-white border-2 rounded border-red-600 mt-8 hover:scale-105 transform duration-700 hover:bg-black hover:border-black mx-auto md:ml-0"
        type="button"
      >
        En savoir plus
      </button>
    </div>
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-16 mt-8 md:mt-0">
      <Image
        className="w-full h-auto"
        src="/cnamgsc-removebg-preview 1.png"
        alt="Logo 1"
        width={100}
        height={100}
      />
      <Image
        className="w-full h-auto"
        src="/ogooue.png"
        alt="Logo 2"
        width={100}
        height={100}
      />
      <Image
        className="w-full h-auto"
        src="/eramet.png"
        alt="Logo 3"
        width={100}
        height={100}
      />
      <Image
        className="w-full h-auto"
        src="/comilog_1-removebg-preview 1.png"
        alt="Logo 4"
        width={100}
        height={100}
      />
      <Image
        className="w-full h-auto"
        src="/pnpe-removebg-preview 1 (1).png"
        alt="Logo 5"
        width={100}
        height={100}
      />
      <Image
        className="w-full h-auto"
        src="/école-simplon.png"
        alt="Logo 6"
        width={100}
        height={100}
      />
    </div>
  </div>
</section>

    )
}

export default Section8;