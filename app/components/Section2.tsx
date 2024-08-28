import Link from "next/link";
import Image from "next/image";


export const section2 = () => {

    return (
        <>
         <section className='bg-black text-white  h-96'>
      <div className='ml-10 mt-8 '>
        <h1 className='text-4xl font-bold mt-10 relative right-3 top-6'>Notre programme</h1>
        <p className='text-xm mt-10 relative right-3'>Ecole 241, c’est une formation en informatique d’excellence pour tous et toutes. Au programme de cette école <br />
différente et innovante : une approche par projets pour progresser et développer des compétances techniques <br />
et humaines recherchées sur le marché du travail.</p>
      </div>


      <div className='mt-24'>
      <div className='flex mt-16 justify-around '>

      <Image className='w-16'  src='/Capture d’écran du 2024-08-01 10-35-49.png' alt='' width={1000} height={800}></Image>

       <div>
        <h6>PAS DE COURS.</h6>
        <h6>PAS DE PROFS.</h6> 
      </div>
      <Image className='w-16 ' src='/Capture d’écran du 2024-08-01 10-57-10.png' alt='' width={1000} height={800}></Image>

      <div>
        <h6>UNE PEDAGOGIE PAR <br /> PROJETS</h6>
      </div>
      <Image className='w-16' src='/Capture d’écran du 2024-08-01 10-57-48.png' alt='' width={1000} height={800}></Image>

      <div>
        <h6>UN APPRENTISSAGE <br />
        PEER-TO-PEER</h6>
      </div>
      <Image className='w-16' src='/Capture d’écran du 2024-08-01 10-58-12.png' alt='' width={1000} height={800}></Image>

      <div >
        <h6>APPRENDRE EN <br /> S’AMMUSANT</h6>
      </div >
      </div> 
   </div> 
    </section>
       
        </>
    )
}

export default section2;

