import Link from "next/link";
import Image from "next/image";
import style from '../style.module.css';
import section from './section1';


export const section2 = () => {

    return (
        <>
         <section className={style.deuxième_section}>
      <div className='ml-10 mt-8 gap-10'>
        <h1 className={style.section_test}>Notre programme</h1>
        <p className={style.section_test2}>Ecole 241, c’est une formation en informatique d’excellence pour tous et toutes. Au programme de cette école <br />
différente et innovante : une approche par projets pour progresser et développer des compétances techniques <br />
et humaines recherchées sur le marché du travail.</p>
      </div>


    <div className='mb-16 mt-8'>
      <div className={style.sections_images}>

      <Image className='w-20 relative left-20 '  src='/Capture d’écran du 2024-08-01 10-35-49.png' alt='' width={1000} height={800}></Image>

       <div >
        <h6>PAS DE COURS.</h6>
        <h6>PAS DE PROFS.</h6> 
      </div>
      <Image className='w-20 left-24 ' src='/Capture d’écran du 2024-08-01 10-57-10.png' alt='' width={1000} height={800}></Image>

      <div className="relative right-16">
        <h6>UNE PEDAGOGIE PAR <br /> PROJETS</h6>
      </div>
      <Image className='w-20 left-24 ' src='/Capture d’écran du 2024-08-01 10-57-48.png' alt='' width={1000} height={800}></Image>

      <div className="relative right-16">
        <h6>UN APPRENTISSAGE <br />
        PEER-TO-PEER</h6>
      </div>
      <Image className='w-20 left-24 ' src='/Capture d’écran du 2024-08-01 10-58-12.png' alt='' width={1000} height={800}></Image>

      <div className="relative right-16">
        <h6>APPRENDRE EN <br /> S’AMMUSANT</h6>
      </div >
      </div> 
   </div> 
    </section>
       
        </>
    )
}

export default section2;

