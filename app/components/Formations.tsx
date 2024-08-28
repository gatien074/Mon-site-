import style from '../style.module.css'
import Image from 'next/image';

const Formations = ()=>{
    return(
    <>
      <body className=''>
        <section className={style.section}>
      <h1 className={style.h1}>
     <strong>Engagez <span className={style.span} > un développeur <br />expérimenté</span> pour rejoindre votre équipe</strong> 
        </h1>
        <p className='relative bottom-32 left-4 text-white m-5'>Exprimez vos besoins, et nous vous fournirons une sélection de <br />candidats qualifiés dans les 48 heures.</p>
        <button
            className="bg-red-600 w-44 h-12 text-white border-2 rounded border-red-600 ml-10  leading-3 relative right-5 bottom-14  hover:scale-105 translate-x-0.5 duration-75 hover:bg-black hover:border-black"
            type="button"
          >
            En savoir plus
          </button>
        </section>
        <section className='m-auto flex justify-around mb-28' >
            <div>
           <strong> <h1 className='flex ml-10 text-5xl text-center items-center mt-12 relative top-10'>+100 DEVELOPPEURS <br /> FORMÉS</h1></strong> 
            <p className='mt-24 '>École 241, est la première institution gabonaise dédiée à la formation gratuite de <br /> développeurs …</p>
            <p className='mt-10'>Notre approche pédagogique repose sur l’enseignement actif, où les apprenants bénéficient <br /> d’un suivi personnalisé assuré par des coachs spécialisés en développement. En <br /> collaboration avec notre partenaire principal, Symplon, notre programme intègre des cours <br /> et des évaluations rigoureuses.</p>
            </div>
             <Image className='mt-7 flex w-2/5 relative top-8 right-8' src="/eCOLE47_1297919770577707_5409795518867950751_n-1536x1024.jpeg"alt="" width={1000} height={200}></Image>
        </section>
      </body>
    
    </>
    )
}
export default Formations;