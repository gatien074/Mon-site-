// components/Marquee.js
export default function Marquee() {
  return (
    <div className="overflow-clip whitespace-nowrap sm:text-sm" >
      <div className="inline-block animate-marquee px-2 w-full">
        <span className="text-sm  md:text-lg">
          Ecole 241 forme au métier du numérique dans tout le Gabon. Rejoignez un
          <br /> réseau de plus de 25 000 apprenants et apprenantes. Vous souhaitez vous
          <br /> aussi intégrer un parcours de formation Simplon ou être conseillé-e dans
          <br /> votre parcours ?
        </span>
        <br />
        <span className="font-bold text-xs sm:text-sm md:text-base ">
          vivez une aventure extraordinaire de votre vie avec le code
        </span>
      </div>
    </div>
  );
}
