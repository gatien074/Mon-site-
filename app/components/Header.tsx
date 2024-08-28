import Link from "next/link";
import Image from "next/image";
import style from "../style.module.css";
import { handleClientScriptLoad } from "next/script";




export const Header = () => {
  return (
    <>
      <header className="flex justify-between h-16  text-center">
        <div className="flex ml-7 ">
          <div className={style.dropdown}>
            <button className={style.contain} >
              <svg className="animate-bounce"
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                viewBox="0 0 72 72"
              >
                <rect width="72" height="72" fill="none" />
                <path
                  fill="black"
                  d="M54.862 58.804s2-14-10-14c-3.192 2.128-5.926 import Image from 'next/image'"
                />
                <path
                  fill="#9b9b9a"
                  d="m45.131 12.155l-9.31.91l-9.07-.88l-5.44-.53l13.88-2.53l15.13 2.53z"
                />
                <path
                  fill="black"
                  d="M45.131 12.155v7.97s-6.72-.26-9.19 2.64c-2.47-2.9-9.19-2.64-9.19-2.64v-7.94l9.07.88z"
                />
                <path
                  fill="#f20202"
                  d="M35.969 51.38h-.108c-3.198-.031-5.986-1.464-9.428-3.76a1 1 0 1 1 1.109-1.664c3.153 2.103 5.66 3.41 8.383 3.425c2.722-.014 5.228-1.322 8.383-3.425a1 1 0 1 1 1.109 1.664c-3.443 2.296-6.231 3.729-9.428 3.76z"
                />
                <path
                  fill="#d5a767"
                  d="M26.578 20.098a15.8 15.8 0 0 0-1.588 4l-.028.069s3.98.784 7.961-3.079l.036-.102c-2.869-.996-6.333-.86-6.333-.86m18.386-.001s-3.408-.201-6.325.905l.028.058c3.98 3.863 7.96 3.079 7.96 3.079l-.01.002a15.8 15.8 0 0 0-1.605-4.071"
                />
                <path
                  fill="#f4aa41"
                  d="M46.541 24.187c-.704.094-4.26.362-7.826-3.099l-.028-.058l.022-.008c-1.09.39-2.09.947-2.768 1.743c-2.069-2.43-7.104-2.64-8.687-2.645c1.127.011 3.578.127 5.705.866l-.036.102c-3.565 3.46-7.122 3.193-7.826 3.099a17.3 17.3 0 0 0-.616 4.593c0 7.827 5.076 14.173 11.338 14.173s11.339-6.346 11.339-14.173c0-1.61-.22-3.153-.617-4.593"
                />
                <path d="M41.942 26.951a2 2 0 1 1-4.002-.001a2 2 0 0 1 4.002.001m-8 0a2 2 0 1 1-4.002-.001a2 2 0 0 1 4.002.001m1.999 10.003c-1.151 0-2.303-.286-3.447-.858a1 1 0 1 1 .895-1.79c1.717.86 3.387.86 5.105 0a1 1 0 0 1 .895 1.79q-1.718.858-3.448.858" />
                <path d="M46.13 19.77c-.57-1.03-1.24-1.97-2-2.79v2.15c-.22 0-.48.01-.76.03c.46.6.87 1.26 1.23 1.96c1.06 2.07 1.68 4.54 1.68 7.19c0 7.27-4.64 13.18-10.34 13.18S25.6 35.58 25.6 28.31c0-2.66.62-5.13 1.69-7.2c.36-.7.77-1.35 1.22-1.95c-.28-.02-.54-.03-.76-.03v-2.15c-.75.82-1.43 1.76-2 2.79c-1.36 2.43-2.15 5.37-2.15 8.54c0 8.37 5.54 15.18 12.34 15.18c6.81 0 12.34-6.81 12.34-15.18c0-3.17-.79-6.11-2.15-8.54" />
                <path
                  fill="none"
                  stroke="#000"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-miterlimit="10"
                  stroke-width="2"
                  d="m21.311 11.655l5.44.53l9.07.88l9.31-.91l5.19-.5"
                />
                <path d="M36.74 23.37c-.02.01-.03.03-.04.04c-.13.16-.29.26-.47.31q-.06.03-.12.03c-.06.02-.11.02-.17.02s-.12 0-.17-.02q-.06 0-.12-.03a.9.9 0 0 1-.36-.19a.8.8 0 0 1-.15-.16c-1.65-1.86-5.85-2.25-7.85-2.26c-.19 0-.36.01-.5.01a.98.98 0 0 1-.73-.27a1 1 0 0 1-.31-.72v-8.47c0-.56.45-1 1-1s1 .44 1 1v7.47c.22 0 .48.01.76.03c2.04.12 5.36.57 7.43 2.24c.28.21.53.45.76.72c.31.36.32.88.04 1.25" />
                <path d="M46.13 11.66v8.47c0 .27-.11.53-.3.72c-.2.18-.44.28-.74.28c-.14-.01-.31-.01-.49-.01c-2.01 0-6.22.38-7.86 2.25c-.02.01-.03.03-.04.04c-.13.16-.29.26-.47.31q-.06.03-.12.03c-.06.02-.11.02-.17.02s-.12 0-.17-.02q-.06 0-.12-.03a.9.9 0 0 1-.36-.19a.8.8 0 0 1-.15-.16a.994.994 0 0 1 .04-1.25c.23-.27.48-.51.76-.72c2.07-1.67 5.39-2.12 7.43-2.24c.28-.02.54-.03.76-.03v-7.47c0-.56.45-1 1-1s1 .44 1 1" />
                <path
                  fill="none"
                  stroke="#000"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-miterlimit="10"
                  stroke-width="2"
                  d="m50.321 11.655l-15.13-2.53l-13.88 2.53"
                />
                <path d="M21.313 21a1 1 0 0 1-1-1v-8.12a1 1 0 1 1 2 0V20a1 1 0 0 1-1 1" />
                <path d="M19.285 23.58a.999.999 0 0 1-.785-1.618l2.026-2.58a1 1 0 0 1 1.573 1.236l-2.027 2.58a1 1 0 0 1-.787.382" />
                <path d="M21.313 25.101a1 1 0 0 1-1-1v-4.1a1 1 0 1 1 2 0v4.1a1 1 0 0 1-1 1m24.581.131c-1.594 0-4.688-.45-7.753-3.426a1 1 0 1 1 1.392-1.436c3.522 3.419 6.936 2.842 7.078 2.815a1.004 1.004 0 0 1 1.165.796a.996.996 0 0 1-.785 1.167a6 6 0 0 1-1.097.084m-19.904 0a6 6 0 0 1-1.098-.084a1 1 0 0 1 .38-1.963c.162.03 3.567.594 7.078-2.815a1 1 0 0 1 1.392 1.436c-3.065 2.975-6.159 3.426-7.753 3.426m28.77 33.571q-.077 0-.153-.011a1 1 0 0 1-.837-1.139c.008-.057.827-5.74-2.13-9.177c-1.475-1.715-3.689-2.613-6.585-2.67c-3.31 2.186-6.029 3.547-9.126 3.59h-.217c-3.1-.043-5.816-1.404-9.126-3.59c-2.896.057-5.11.955-6.586 2.67c-2.956 3.436-2.138 9.12-2.129 9.177a1 1 0 0 1-1.976.303c-.042-.27-.973-6.633 2.58-10.775c1.923-2.241 4.752-3.377 8.408-3.377a1 1 0 0 1 .554.168c3.154 2.102 5.66 3.41 8.383 3.424c2.722-.013 5.229-1.322 8.383-3.424a1 1 0 0 1 .555-.168c3.656 0 6.484 1.135 8.407 3.377c3.554 4.142 2.622 10.506 2.581 10.775a1 1 0 0 1-.986.847" />
              </svg>{" "}
              Alumnis
              <i></i>
             </button>
                <ul className={style.dropdown_content}>
                  <li>
                    <Link href="#">promo1</Link>
                  </li>
                  <li>
                    <Link href="#">promo2</Link>
                  </li>
                  <li>
                    <Link href="#">promo3</Link>
                  </li>
                  <li>
                    <Link href="#">promo4</Link>
                  </li>
                  <li>
                    <Link href="#">promo5</Link>
                  </li>
                  <li>
                    <Link href="#">promo6</Link>
                  </li>
                  <li>
                    <Link href="#">promo7</Link>
                  </li>
                  <li>
                    <Link href="#">promo8</Link>
                  </li>
                </ul>
        
            
          </div>
          <button className=" border-2 border-black w-96 h-8 justify-center text-center m-3 relative p-1 text-">
            <Image
              src="/camera-video-alt.svg"
              alt=""
              width={20}
              height={20} ></Image>{" "} <p className={style.paragraphe}>Participer au réunion d’information en ligne </p></button>
        </div>
        <div className={style.icon}>
          <div className="flex mr-24 ">
            <Link href="https://www.facebook.com/Ecole241/?locale=fr_FR">
              <svg
                className="m-4 w-5 h-5 hover:scale-105 "
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 256 256"
              >
                <rect width="256" height="256" fill="none" />
                <path
                  fill="black"
                  d="M256 128C256 57.308 198.692 0 128 0S0 57.308 0 128c0 63.888 46.808 116.843 108 126.445V165H75.5v-37H108V99.8c0-32.08 19.11-49.8 48.348-49.8C170.352 50 185 52.5 185 52.5V84h-16.14C152.959 84 148 93.867 148 103.99V128h35.5l-5.675 37H148v89.445c61.192-9.602 108-62.556 108-126.445"
                />
                <path
                  fill="#f20202"
                  d="m177.825 165l5.675-37H148v-24.01C148 93.866 152.959 84 168.86 84H185V52.5S170.352 50 156.347 50C127.11 50 108 67.72 108 99.8V128H75.5v37H108v89.445A129 129 0 0 0 128 256a129 129 0 0 0 20-1.555V165z"
                />
              </svg>
            </Link>
            <Link href="https://x.com/i/flow/login?redirect_after_login=%2Fecole241_lbv">
              <svg
                className="m-3 w-8 h-8 hover:scale-105  "
                xmlns="http://www.w3.org/2000/svg"
                width="2em"
                height="2em"
                viewBox="0 0 72 72"
              >
                <rect width="200" height="200" fill="none" />
                <path
                  fill="black"
                  d="M58.042 16.667s-2.584 2.083-6.209 2.458c0 0-5.708-6.375-13.875-.833c-3.666 2.583-4 8.041-3.375 10c0 0-11.083.875-20.75-10.459c0 0-4.333 7.5 2.834 13.5c0 0-2.119.334-4.132-1.333c0 0-.952 7.75 7.715 9.917c0 0-.583 1-4.083 0c0 0 .583 6.333 8.833 7.25c0 0-4.457 4.583-14.478 4c0 0 16.561 12.416 34.478-2.584c10-8.5 9.667-20.75 9.5-22.583c0 0 3.95-3 4.975-4.917c0 0-3.058 1-5.558 1c0 0 3.333-1.75 4.125-5.416"
                />
                <path
                  fill="none"
                  stroke="#000"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-miterlimit="10"
                  stroke-width="0.5"
                  d="M58.042 16.667s-2.584 2.083-6.209 2.458c0 0-5.708-6.375-13.875-.833c-3.666 2.583-4 8.041-3.375 10c0 0-11.083.875-20.75-10.459c0 0-4.333 7.5 2.834 13.5c0 0-2.119.334-4.132-1.333c0 0-.952 7.75 7.715 9.917c0 0-.583 1-4.083 0c0 0 .583 6.333 8.833 7.25c0 0-4.457 4.583-14.478 4c0 0 16.561 12.416 34.478-2.584c10-8.5 9.667-20.75 9.5-22.583c0 0 3.95-3 4.975-4.917c0 0-3.058 1-5.558 1c0 0 3.333-1.75 4.125-5.416"
                />
              </svg>
            </Link>

            <Link href="https://ga.linkedin.com/company/ecole-241">
              <svg
                className="  m-4 w-5 h-5 hover:scale-105 "
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 256 256"
              >
                <rect width="100" height="100" fill="none" />
                <g fill="none">
                  <rect width="256" height="256" fill="#f20202" rx="60" />
                  <rect width="256" height="256" fill="black" rx="60" />
                  <path
                    fill="#f20202"
                    d="M184.715 217.685h29.27a4 4 0 0 0 4-3.999l.015-61.842c0-32.323-6.965-57.168-44.738-57.168c-14.359-.534-27.9 6.868-35.207 19.228a.32.32 0 0 1-.595-.161V101.66a4 4 0 0 0-4-4h-27.777a4 4 0 0 0-4 4v112.02a4 4 0 0 0 4 4h29.268a4 4 0 0 0 4-4v-55.373c0-15.657 2.97-30.82 22.381-30.82c19.135 0 19.383 17.916 19.383 31.834v54.364a4 4 0 0 0 4 4M38 59.628c0 11.864 9.767 21.626 21.632 21.626c11.862-.001 21.623-9.769 21.623-21.631C81.253 47.761 71.491 38 59.628 38C47.762 38 38 47.763 38 59.627m6.959 158.058h29.307a4 4 0 0 0 4-4V101.66a4 4 0 0 0-4-4H44.959a4 4 0 0 0-4 4v112.025a4 4 0 0 0 4 4"
                  />
                </g>
              </svg>
            </Link>
          </div>

          <div className="flex w-10 h-10 justify-center text-center relative top-1 right-10">
            <Image
              src="/21495917-google-traduction-logo-symbole-noir-conception-mobile-app-vecteur-illustration-gratuit-vectoriel-removebg-preview.png"
              alt=""
              width={75}
              height={40}
            ></Image>
            <p className="flex justify-center text-center m-auto"> FR</p>

            <Link href="">
              <svg
                className="mt-3 "
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                viewBox="0 0 1024 1024"
              >
                <rect width="1024" height="1024" fill="none" />
                <path
                  fill="black"
                  d="M104.704 338.752a64 64 0 0 1 90.496 0l316.8 316.8l316.8-316.8a64 64 0 0 1 90.496 90.496L557.248 791.296a64 64 0 0 1-90.496 0L104.704 429.248a64 64 0 0 1 0-90.496"
                />
              </svg>
            </Link>
          </div>
        </div>
      </header>
      
    </>
  );
};

export default Header; 
