import Link from "next/link";
import Image from "next/image";



 const Logo = () => {


    return (
        <>
        
        <section>
        <Image
          className="sm:flex-col md:flex-row flex text-center relative  sm:left-28 "
          src="/images.jpg"
          alt=""
          width={150}
          height={150}
        ></Image>
        </section>
        
        </>
    )
}

export default Logo;

