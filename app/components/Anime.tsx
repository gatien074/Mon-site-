import Image from "next/image";


export default function Anime() {
    return (
      <div className="overflow-clip whitespace-nowrap " >
        <div className="inline-block outils-marquee">       
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-32 text-white">
    <div className="text-center animate-pulse">
      <Image className="rounded-full p-4 mx-auto  hover:animate-bounce" src="/JavaScript.png" alt="JavaScript" width={100} height={100} />
      <p>JavaScript</p>
    </div>
    <div className="text-center animate-pulse">
      <Image className="rounded-full p-4 mx-auto hover:animate-bounce" src="/Laravel.png" alt="Laravel" width={100} height={100} />
      <p>Laravel</p>
    </div>
    <div className="text-center animate-pulse">
      <Image className="rounded-full p-4 mx-auto hover:animate-bounce" src="/Nextjs.png" alt="Next.js" width={100} height={100} />
      <p>Next.js</p>
    </div>
    <div className="text-center animate-pulse mt-6">
      <Image className="rounded-full p-4 mx-auto hover:animate-bounce" src="/PHP-logo.svg.png" alt="PHP" width={100} height={100} />
      <p>PHP</p>
    </div>
    <div className="text-center animate-pulse">
      <Image className="rounded-full p-4 mx-auto hover:animate-bounce" src="/React.png" alt="React" width={100} height={100} />
      <p>React</p>
    </div>
    <div className="text-center animate-pulse mt-4">
      <Image className="rounded-full p-4 mx-auto hover:animate-bounce" src="/Vuejs.png" alt="Vue.js" width={80} height={100} />
      <p>Vue.js</p>
    </div>
  </div>
    
   
   
  </div>
</div>
    );
  }
  