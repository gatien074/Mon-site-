import Link from "next/link";
import Image from "next/image";


export const section2 = () => {

    return (
        <>

        <section className='container bg-black text-white sm:w-full ml-20  sm:px-10 h-auto'>
  <div className='sm:ml-10'>
    <h1 className='text-3xl sm:text-4xl  font-bold ml-8 py-6 mt-10 sm:mt-24 mb-6'>
      Notre programme
    </h1>
    <p className='text-sm ml-8 sm:text-base leading-relaxed'>
      Ecole 241, c’est une formation en informatique d’excellence pour tous et toutes. Au programme de cette école
      différente et innovante : une approche par projets pour progresser et développer des compétences techniques
      et humaines recherchées sur le marché du travail.
    </p>
  </div>


  <div className='mt-16 sm:mt-24 pb-8'>

    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center'>
      <div className='flex flex-col items-center'>
        <Image className='w-12 sm:w-16' src='/Capture d’écran du 2024-08-01 10-35-49.png' alt='Pas de cours, pas de profs' width={1000} height={800} />
        <div className='mt-4 text-center'>

          <h6>PAS DE COURS.</h6>
          <h6>PAS DE PROFS.</h6>
        </div>
      </div>

      <div className='flex flex-col items-center'>
        <Image className='w-12 sm:w-16' src='/Capture d’écran du 2024-08-01 10-57-10.png' alt='Une pédagogie par projets' width={1000} height={800} />
        <div className='mt-4 text-center'>

          <h6>UNE PÉDAGOGIE PAR <br /> PROJETS</h6>
        </div>
      </div>

      <div className='flex flex-col items-center'>
        <Image className='w-12 sm:w-16' src='/Capture d’écran du 2024-08-01 10-57-48.png' alt='Un apprentissage peer-to-peer' width={1000} height={800} />
        <div className='mt-4 text-center'>

          <h6>UN APPRENTISSAGE <br /> PEER-TO-PEER</h6>

        </div>
      </div>

      <div className='flex flex-col items-center'>
        <Image className='w-12 sm:w-16' src='/Capture d’écran du 2024-08-01 10-58-12.png' alt='Apprendre en s’amusant' width={1000} height={800} />
        <div className='mt-4 text-center'>

          <h6>APPRENDRE EN <br /> S’AMUSANT</h6>

        </div>
      </div>
    </div>
  </div>
</section>

       
        </>
    )
}

export default section2;

