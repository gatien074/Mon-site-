import Image from 'next/image';

const Section1 = () => (
  <section className="mx-auto  container flex flex-col md:flex-row justify-center items-center bg-black p-6 md:p-9">
    <h1 className="text-white text-3xl md:text-5xl font-bold text-center md:text-left mb-4 md:mb-0">
      A propos
    </h1>
    <div className="w-full md:w-1/2 flex justify-center">
      <Image 
        src="/code.jpg" 
        alt="Code" 
        width={400} 
        height={400} 
        className="w-full max-w-sm md:max-w-md"
      />
    </div>
  </section>
);

export default Section1;
