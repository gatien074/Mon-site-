import Image from "next/image";
import Link from "next/link";
import Logo from "../components/Logo";


export const Footer= () => {

    return (
        <>
          <footer className="mt-36 bg-black flex text-white  text-sm gap-5 justify-around ">
        <Logo/>

        <div className="m-12">
          <Link href="">A propos de nous</Link>
          <br />
          <Link href="">Contacts</Link>
          <br />
          <Link href="">Notre Impact</Link>
        </div>

        <div className="mt-12">
          <Link href="">Devenir Formateur</Link>
          <br />
          <Link href="">Devenir Partenaire</Link>
        </div>

        <div className="mt-12">
          <Link href="">Formation Référent Digital</Link>
          <br />
          <Link href="">Formation Developpeur Web</Link>
        </div>

        <div className="mt-12">
          <Link href="">Campus de Libreville</Link>
          <br />
          <Link href="">Campus de Port-Gentil</Link>
          <br />
          <Link href="">Campus de Moanda</Link>
        </div>
      </footer>
       
        
        </>
    )
}

export default Footer;

