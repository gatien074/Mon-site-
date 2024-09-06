// components/Marquee.js
export default function Marquee() {
  return (
    <div className="overflow-hidden whitespace-nowrap px-2">
      <div className="inline-block animate-marquee w-full">
        <span className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">
          Ecole 241 forme au métier du numérique dans tout le Gabon. Rejoignez 
          <br /> un réseau de plus de 25 000 apprenants et apprenantes. Vous 
          <br /> souhaitez vous aussi intégrer un parcours de formation Simplon 
          <br /> ou être conseillé-e dans votre parcours ?
        </span>
        <br />
        <span className="font-bold text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">
          vivez une aventure extraordinaire de votre vie avec le code
        </span>
      </div>
    </div>
  );
}
