// components/Prem.js

const Prem = () => (
  <section className="mb-8 mx-5 px-4 py-8 ">
    <h2 className="text-3xl font-bold mb-6 text-center">Découvrez notre campus</h2>
    <div className="flex flex-col md:flex-row items-center">
      <div className="md:w-1/2">
        <img
          src="/pog1.jpeg" // Remplacez par le chemin de votre image
          alt="Campus"
          className="w-4.5/5 h-auto object-cover rounded-lg shadow-md"
        />
      </div>
      <div className="md:w-1/2 md:pl-8 mt-6 md:mt-0">
      <p className="text-lg leading-relaxed">
          En 2021, avec un groupe de volontaires passionnés, nous avons fièrement lancé l'antenne de Port-Gentil pour l'école 241. Ce projet ambitieux est né de la volonté de créer un centre d'excellence en éducation et en formation professionnelle au cœur de la région. 
        </p>
        <p className="text-lg leading-relaxed mt-4">
          Notre campus de Port-Gentil est un véritable creuset d'innovation et d'apprentissage, où nous nous engageons à offrir un environnement éducatif stimulant et inspirant. Conçu pour répondre aux besoins actuels du monde professionnel, notre campus est équipé des technologies les plus récentes, permettant aux étudiants de se familiariser avec les outils et les méthodes les plus modernes.
        </p>
        <p className="text-lg leading-relaxed mt-4">
          Au-delà des salles de classe, le campus offre une variété d'activités et de programmes extracurriculaires destinés à enrichir l'expérience éducative. Nous croyons fermement que l'apprentissage ne se limite pas à la théorie, et nous encourageons nos étudiants à participer à des projets pratiques, des ateliers et des événements qui favorisent le développement personnel et professionnel.
        </p>
        <p className="text-lg leading-relaxed mt-4">
          Découvrez notre espace unique où la qualité de l'enseignement est au cœur de notre mission. Nous sommes déterminés à fournir une formation de premier ordre et à préparer nos étudiants à exceller dans leurs carrières futures. Rejoignez-nous à Port-Gentil et faites partie de notre aventure éducative.
        </p>
      
      </div>
    </div>
  </section>
);

export default Prem;
