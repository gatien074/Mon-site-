
   import Main from "../components/Main";
import Link from 'next/link';

import { Footer } from '../components/Footer';//+



const Detaille =()=>{
    return(

        <>
        <Main/>
        <section className="bg-gray-900 ">
        <div className=" flex flex-col  items-center ">
            <h1 className="text-white text-5xl  py-32 px-32 flex items-center justify-center">Développeur web</h1>
            <button
             className="bg-red-600 w-52 h-14 text-white animate-blink  border-2  rounded border-black  mb-32 leading-3 hover:scale-105 translate-x-0.5 duration-75 hover:bg-black ml-8 hover:border-black"
            type="button"  
          >
             <Link href="http://localhost:3000">en savoir plus</Link>
            
          </button>
        </div>
        </section>
        <section>

          
        <div className=" flex mt-12 flex-col items-center ">
            <h1 className="text-black text-5xl  py-32 px-32 flex items-center justify-center">Référent digital</h1>
            <button
             className="bg-red-600 w-52 h-14 text-white animate-blink  border-2  rounded border-black  mb-32 leading-3 hover:scale-105 translate-x-0.5 duration-75 hover:bg-black ml-8 hover:border-black"
            type="button"  
          >
             <Link href="http://localhost:3000">en savoir plus</Link>
            
          </button>
        </div>
        </section>

        <Footer/>

        </>
    )
}

export default Detaille;