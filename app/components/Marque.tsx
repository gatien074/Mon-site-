
export default function Marquee() {
  return (
    <div className="relative overflow-hidden whitespace-nowrap bg-gray-100">
      <div className="inline-block animate-marquee whitespace-nowrap">
        <span className="mr-8 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
          École 241 forme au métier du numérique dans tout le Gabon. Rejoignez un
          <br />
          réseau de plus de 25 000 apprenants et apprenantes. Vous souhaitez vous
          <br />
          aussi intégrer un parcours de formation Simplon ou être conseillé-e dans
          <br />
          votre parcours ?
        </span>
        <span className="mr-8 font-bold text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
          vivez une aventure extraordinaire de votre vie avec le code
        </span>
      </div>
    </div>
  );
}
