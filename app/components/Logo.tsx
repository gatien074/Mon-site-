import Image from "next/image";

const Logo = () => {
  return (
    <section className="flex justify-center items-center p-4">
      <Image
        src="/images.jpg"
        alt="Company Logo" // Update this with a descriptive alt text
        width={250}
        height={250}
        className="w-14 h-14 sm:w-12 sm:h-12 md:w-32 md:h-24 sm:ml-28"
      />
    </section>
  );
};

export default Logo;
