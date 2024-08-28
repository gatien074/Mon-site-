import Link from "next/link";
import Image from "next/image";



 const Logo = () => {


    return (
        <>
        
        <section>
        <Image
          className="flex text-center relative  left-2 mt-2"
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

