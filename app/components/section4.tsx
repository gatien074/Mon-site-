import Image from 'next/image';
import styles from '../A_propos/Section4.module.css'; // Assurez-vous que le chemin est correct

const Section4 = () => {
  const cards = [
    {
      bgColor: 'bg-black',
      borderColor: 'border-black',
      imageSrc: '/peer-to-peer.svg',
      title: 'Pédagogie centrée sur l\'apprenant',
      description: 'Nous mettons l\'apprenant au cœur de son apprentissage, afin d\'encourager l\'autonomie et l\'engagement personnel.'
    },
    {
      bgColor: 'bg-[#c70c0c]',
      borderColor: 'border-[#c70c0c]',
      imageSrc: '/security.svg',
      title: 'Un programme axé sur les besoins du marché',
      description: 'Nous formons des professionnels capables de répondre aux besoins du marché.'
    },
    {
      bgColor: 'bg-black',
      borderColor: 'border-black',
      imageSrc: '/stats.svg',
      title: 'Des stages après la formation',
      description: 'Nous mettons nos apprenants dans un cadre professionnel pour approfondir les acquis et expérimenter l\'environnement professionnel.'
    }
  ];

  return (
    <section className="container mx-auto mt-12 px-4">
      <div className="text-center md:text-left">
        <h1 className="text-black text-2xl md:text-3xl font-bold">Pourquoi nous choisir?</h1>
        <p className="mt-5 text-center md:text-left">
          Choisir notre école, c’est opter pour une expérience éducative exceptionnelle. Nous nous démarquons notamment par les points ci-dessous.
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-5 justify-center items-center mt-8">
        {cards.map((card, index) => (
          <div key={index} className={`${styles.card} ${card.bgColor} p-4 md:p-6 rounded-lg border-4 ${card.borderColor}`}>
            <div className={styles.cardContent}>
              <Image src={card.imageSrc} alt={card.title} width={50} height={50} className="mx-auto" />
              <h2 className="text-white font-bold text-lg md:text-xl mt-2 text-center">{card.title}</h2>
              <p className="text-white mt-2 text-center">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Section4;
