import Image from "next/image"
import Buttons from "./BlinkingButton"

const Section4 =()=>{
    return(
        <>
        
        <section className="container mx-auto sm:flex flex-wrap justify-between h-auto mt-48 mb-48 p-6">
  <div className="w-full sm:w-1/2 flex flex-col md:flex-row items-start sm:items-center text-center sm:text-left p-6">
    <div className="w-full">
      <h1 className="text-3xl sm:text-4xl font-bold">Nos cohortes</h1>
      <p className="mt-2">Se former à un métier</p>
    </div>
    <div className="bg-zinc-400 p-6 sm:p-8 mt-8 rounded-xl w-full">
      <h4 className="text-2xl font-bold flex items-center">
        <Image
          className="w-8 h-8 mr-3"
          src="/Vector.png"
          alt="Icon"
          width={30}
          height={30}
        />
        Développeur Web et Web Mobile
      </h4>
      <p className="mt-4 text-sm">
        Le développeur web mobile a pour mission de créer et de mettre en œuvre des applications mobiles exploitables sur smartphone et tablette.
      </p>
      <p className="mt-4 text-sm">
        Dans le cadre de son travail, il code et élabore des logiciels pour traiter les données. Il est aussi chargé de construire des sites web, des applications en ligne, des outils interactifs et autres produits accomplis selon les demandes du client.
      </p>
      <button
        className="bg-red-600 w-44 h-12 text-white border-2 rounded border-red-600 mt-6 hover:scale-105 transform transition duration-150 hover:bg-black hover:border-black"
        type="button"
      >
        En savoir plus
      </button>
    </div>
  </div>

  <div className="w-full sm:w-1/2 bg-zinc-400 p-6 sm:p-8 mt-8 sm:mt-0 rounded-xl">
    <h4 className="text-3xl font-bold">Référent Digital</h4>
    <p className="mt-3 text-sm">
      Le Référentiel Digital est une approche stratégique qui vise à tirer parti du potentiel des médias numériques pour atteindre ses objectifs commerciaux ou de communication.
    </p>
    <p className="mt-6 text-sm">
      Cela implique une utilisation des outils et de plateformes en ligne pour atteindre un public ciblé, engager les utilisateurs et générer des résultats mesurables.
    </p>
    <button
      className="bg-red-600 w-44 h-12 text-white border-2 rounded border-red-600 mt-6 hover:scale-105 transform transition duration-150 hover:bg-black hover:border-black"
      type="button"
    >
      En savoir plus
    </button>
  </div>
</section>

        
        </>
    )
}

export default Section4;