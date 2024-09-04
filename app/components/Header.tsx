import Link from "next/link";
import React from 'react';
import Image from "next/image";
import style from "../style.module.css";

const Header = () => {
  return (
    <header className="flex flex-col md:flex-row md:justify-around mx-auto">
      <div className="flex flex-col md:flex-row gap-3">
        <div className={style.dropdown}>
          <button className={style.contain}>
            <svg className="animate-bounce" xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 72 72">
              <rect width="72" height="72" fill="none" />
              {/* Replace the broken path with correct one */}
              <path fill="black" d="M54.862 58.804s2-14-10-14c-3.192 2.128-5.926 ..." />
              <path fill="#9b9b9a" d="m45.131 12.155l-9.31.91l-9.07-.88l-5.44-.53l13.88-2.53l15.13 2.53z" />
              {/* Add other paths as needed */}
            </svg>
            Alumnis
          </button>
          <ul className={style.dropdown_content}>
            {/* Add meaningful hrefs */}
            <li><Link href="#">Promo 1</Link></li>
            <li><Link href="#">Promo 2</Link></li>
            <li><Link href="#">Promo 3</Link></li>
            <li><Link href="#">Promo 4</Link></li>
            <li><Link href="#">Promo 5</Link></li>
            <li><Link href="#">Promo 6</Link></li>
            <li><Link href="#">Promo 7</Link></li>
            <li><Link href="#">Promo 8</Link></li>
          </ul>
        </div>
        <button className={style.cta2}>
          <Image
            className={style.imageVideo}
            src="/camera-video-alt.svg"
            alt="Participate in online information meeting"
            width={20}
            height={20}
          />
          <p className={style.paragraphe}>Participer au réunion d’information en ligne</p>
        </button>
      </div>
      <div className={style.icon}>
        <div className="flex mr-24 w-full">
          <Link href="https://www.facebook.com/Ecole241/?locale=fr_FR">
            <svg className="m-4 w-5 h-5 hover:scale-105" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256">
              <rect width="256" height="256" fill="none" />
              <path fill="black" d="M256 128C256 57.308 198.692 0 128 0S0 57.308 0 128c0 63.888 46.808 116.843 108 126.445V165H75.5v-37H108V99.8c0-32.08 19.11-49.8 48.348-49.8C170.352 50 185 52.5 185 52.5V84h-16.14C152.959 84 148 93.867 148 103.99V128h35.5l-5.675 37H148v89.445c61.192-9.602 108-62.556 108-126.445" />
            </svg>
          </Link>
          <Link href="https://x.com/i/flow/login?redirect_after_login=%2Fecole241_lbv">
            <svg className="m-3 w-8 h-8 hover:scale-105" xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 72 72">
              <rect width="200" height="200" fill="none" />
              <path fill="black" d="M58.042 16.667s-2.584 2.083-6.209 2.458c0 0-5.708-6.375-13.875-.833c-3.666 2.583-4 8.041-3.375 10c0 0-11.083.875-20.75-10.459c0 0-4.333 7.5 2.834 13.5c0 0-2.119.334-4.132-1.333c0 0-.952 7.75 7.715 9.917c0 0-.583 1-4.083 0c0 0 .583 6.333 8.833 7.25c0 0-4.457 4.583-14.478 4c0 0 16.561 12.416 34.478-2.584c10-8.5 9.667-20.75 9.5-22.583c0 0 3.95-3 4.975-4.917c0 0-3.058 1-5.558 1c0 0 3.333-1.75 4.125-5.416" />
            </svg>
          </Link>
          <Link href="https://ga.linkedin.com/company/ecole-241">
            <svg className="m-4 w-5 h-5 hover:scale-105" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256">
              <rect width="100" height="100" fill="none" />
              <g fill="none">
                <rect width="256" height="256" fill="#f20202" rx="60" />
                <rect width="256" height="256" fill="black" rx="60" />
                <path fill="#f20202" d="M184.715 217.685h29.27a4 4 0 0 0 4-3.999l.015-61.842c0-32.323-6.965-57.168-44.738-57.168c-14.359-.534-27.9 6.868-35.207 19.228a.32.32 0 0 1-.595-.161V101.66a4 4 0 0 0-4-4h-27.777a4 4 0 0 0-4 4v112.02a4 4 0 0 0 4 4h29.268a4 4 0 0 0 4-4v-55.373c0-15.657 2.97-30.82 22.381-30.82c19.135 0 19.383 17.916 19.383 31.834v54.364a4 4 0 0 0 4 4m-73.662-5.306v-64.076h-18.223v64.076h18.223Zm-9.116-75.781h.021c-12.288 0-20.037 8.162-20.037 21.596v52.217h-18.207v-51.223c0-12.947 7.985-23.377 20.426-23.377c11.451 0 17.086 7.527 17.086 7.527Zm85.059-6.63h-37.863c-5.968 0-11.636 3.143-11.636 8.885v1.782a8.437 8.437 0 0 0 8.256 8.258c6.803.032 13.664-.035 19.812.229c2.595.136 4.828.996 6.605 2.712a4 4 0 0 1 .934 4.217v.42a4.068 4.068 0 0 1-2.35 2.96c-3.362 1.751-6.773 2.674-10.285 2.674a30.208 30.208 0 0 1-8.122-1.064a4 4 0 0 1-2.925-3.789v-2.169a4 4 0 0 1 4-4h12.914c6.251.118 11.091 4.03 11.091 9.214v1.782c0 5.658-4.305 9.583-10.104 9.583m28.095 51.155c0 1.622-1.294 2.929-2.88 2.929h-3.208a2.92 2.92 0 0 1-2.92-2.92V211.71a2.92 2.92 0 0 1 2.92-2.92h3.208a2.92 2.92 0 0 1 2.88 2.92v51.843Zm34.107 2.622v-29.648c0-1.38-1.124-2.5-2.5-2.5h-6.94a2.5 2.5 0 0 0-2.5 2.5v29.648c0 1.38 1.124 2.5 2.5 2.5h6.94a2.5 2.5 0 0 0 2.5-2.5Zm12.584 2.622c0 1.622-1.294 2.929-2.88 2.929h-3.208a2.92 2.92 0 0 1-2.92-2.92V211.71a2.92 2.92 0 0 1 2.92-2.92h3.208a2.92 2.92 0 0 1 2.88 2.92v51.843Z" />
              </g>
            </svg>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
