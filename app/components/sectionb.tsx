import Image from "next/image";

const Section1_2 = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-16 mb-24">
      {/* Titre et sous-titre */}
      <div className="text-center sm:text-left mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold">Nos cohortes</h1>
        <p className="mt-2 text-lg text-gray-600">Se former à un métier</p>
      </div>

      {/* Sections */}
      <section className="flex flex-col sm:flex-row gap-6">
        {/* Première section */}
        <div className="flex-1 bg-gray-200 p-6 sm:p-8 rounded-xl flex flex-col justify-between shadow-md hover:shadow-lg transition-shadow duration-300">
          <div className="flex items-center mb-4">
            <Image
              className="w-250 h-250 object-cover rounded-lg"
              src="/dev.png" // Changez cette image en fonction de votre besoin
              alt="Développeur Web"
              width={600}
              height={600}
            />
            <div className="ml-4">
              <h4 className="text-2xl font-bold flex items-center">
                Développeur Web et Web Mobile
              </h4>
              <p className="mt-4 text-sm sm:text-base text-gray-700">
                Le développeur web mobile a pour mission de créer et de mettre en œuvre des applications mobiles exploitables sur smartphone et tablette.
              </p>
              <p className="mt-4 text-sm sm:text-base text-gray-700">
                Dans le cadre de son travail, il code et élabore des logiciels pour traiter les données. Il est aussi chargé de construire des sites web, des applications en ligne, des outils interactifs et autres produits accomplis selon les demandes du client.
              </p>
            </div>
          </div>
          <button
            className="bg-red-600 w-full sm:w-44 h-12 text-white border-2 rounded border-red-600 mt-6 hover:scale-105 transform transition duration-150 hover:bg-black hover:border-black"
            type="button"
          >
            En savoir plus
          </button>
        </div>

        {/* Deuxième section */}
        <div className="flex-1 bg-gray-200 p-6 sm:p-8 rounded-xl flex flex-col justify-between shadow-md hover:shadow-lg transition-shadow duration-300">
          <div className="flex items-center mb-4">
            <Image
              className="w-200 h-200 object-cover rounded-lg"
              src="/digital.jpg" // Changez cette image en fonction de votre besoin
              alt="Référent Digital"
              width={400}
              height={400}
            />
            <div className="ml-4">
              <h4 className="text-2xl font-bold">
                Référent Digital
              </h4>
              <p className="mt-4 text-sm sm:text-base text-gray-700">
                Le Référentiel Digital est une approche stratégique qui vise à tirer parti du potentiel des médias numériques pour atteindre ses objectifs commerciaux ou de communication.
              </p>
              <p className="mt-4 text-sm sm:text-base text-gray-700">
                Cela implique une utilisation des outils et de plateformes en ligne pour atteindre un public ciblé, engager les utilisateurs et générer des résultats mesurables.
              </p>
            </div>
          </div>
          <button
            className="bg-red-600 w-full sm:w-44 h-12 text-white border-2 rounded border-red-600 mt-6 hover:scale-105 transform transition duration-150 hover:bg-black hover:border-black"
            type="button"
          >
            En savoir plus
          </button>
        </div>
      </section>
    </div>
  );
};

export default Section1_2;
