import Image from "next/image";


export default function Outils() {
    return (
      <div className="overflow-clip whitespace-nowrap " >
        <div className="inline-block icon-marquee">      
 <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-56 text-white ">
    <div className="text-center animate-pulse">
      <Image className="rounded-full p-4 mx-auto hover:animate-bounce" src="/logo-cava.jpg" alt="" width={200} height={100} />
      <p>Canva</p>
    </div>
    <div className="text-center animate-pulse">
      <Image className="rounded-full p-4 mx-auto hover:animate-bounce" src="/photoshop.png" alt="" width={200} height={100} />
      <p>Photoshop</p>
    </div>
    <div className="text-center animate-pulse">
      <Image className="rounded-full p-4 mx-auto hover:animate-bounce" src="/logo-Html.png" alt="" width={200} height={100} />
      <p>Html</p>
    </div>
    <div className="text-center animate-pulse mt-8">
      <Image className=" p-4 mx-auto  hover:animate-bounce" src="/css-3.webp" alt="" width={200} height={250} />
      <p>Css</p>
    </div>
   
  </div>
        </div>
      </div>
    );
  }
  