// components/Footer.js
import Image from "next/image";
import Link from "next/link";
import Logo from "./Logo";

export const Footer = () => {
  return (
    <>
      <footer className="mt-36 bg-black text-white text-sm w-full">
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-around gap-6 lg:gap-28 p-4 lg:p-8">
          <div className="mb-6 lg:mb-0">
            <Logo />
          </div>

          <div className="flex flex-col items-center lg:items-start">
            <Link className="text-sm mb-2 hover:underline" href="">A propos de nous</Link>
            <Link className="text-sm mb-2 hover:underline" href="">Contacts</Link>
            <Link className="text-sm mb-2 hover:underline" href="">Notre Impact</Link>
          </div>

          <div className="flex flex-col items-center lg:items-start">
            <Link className="text-sm mb-2 hover:underline" href="">Devenir Formateur</Link>
            <Link className="text-sm mb-2 hover:underline" href="">Devenir Partenaire</Link>
          </div>

          <div className="flex flex-col items-center lg:items-start">
            <Link className="text-sm mb-2 hover:underline" href="">Formation Référent Digital</Link>
            <Link className="text-sm mb-2 hover:underline" href="">Formation Développeur Web</Link>
          </div>

          <div className="flex flex-col items-center lg:items-start">
            <Link className="text-sm mb-2 hover:underline" href="">Campus de Libreville</Link>
            <Link className="text-sm mb-2 hover:underline" href="">Campus de Port-Gentil</Link>
            <Link className="text-sm mb-2 hover:underline" href="">Campus de Moanda</Link>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
