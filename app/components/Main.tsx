import Image from "next/image";
import Link from "next/link";
import style from "../style.module.css"
import Logo from "../components/Logo"




export const Main = () => {
    return (
      <>
        <main>
        <main className={style.main}>
       <Logo/>
        <div className="flex justify-center text-center ">
          <u className="text-white text-center m-auto relative right-14 no-underline p-4 flex gap-10">
            <Link className="hover:text-red-500 hover:scale-110 " href="#">
              Accueil
            </Link>
            <Link className="hover:text-red-500 hover:scale-110 " href="/formations">
            <div className={style.menu1}>
            <ul className={style.menu}>
             <li className={style.nom}>Nos formations</li> 
             <ul className={style.sous_menu}>
                <li>Développement web/web mobile</li>
                <li>Réfèrent digital</li>
             </ul>
            </ul>
            </div>
            </Link>
            <Link className="hover:text-red-500 hover:scale-110 " href="#">
              Nos campus
            </Link>
            <Link className="hover:text-red-500 hover:scale-110 " href="#">
              A propos de nous
            </Link>
            <Link className="hover:text-red-500 hover:scale-110 " href="#">
              Blog
            </Link>
            <Link className="hover:text-red-500 hover:scale-110 hover:decoration-dashed " href="#">
              Contact
            </Link>
          </u>

         <Link className={style.lien }  href='https://vu.fr/xMXOL '><button type="button" 
            className="bg-black rounded text-red-600 border-2 accent-black border-red-700 bg: shadow hover:shadow-white hover:scale-105 translate-x-0.5 duration-75  focus:bg-[#fff] w-52 h-10 m-auto relative right-8 hover:border-black">
            Postuler sur Libreville
          </button>
         </Link> 
        </div>
      </main>

       
    </main>
      
      </>
    );
  };
  
  export default Main;
  