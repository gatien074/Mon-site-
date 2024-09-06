const Gallery = () => (
    <section className="mb-8">
      <h2 className="text-3xl font-bold mb-4">Visitez notre campus de Port-Gentil</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <img src="/pog.webp" alt="Image 1" className="w-full h-auto object-cover" />
        <img src="/pog.webp" alt="Image 2" className="w-full h-auto object-cover" />
        <img src="/pog.webp" alt="Image 3" className="w-full h-auto object-cover" />
        <img src="/pog.webp" alt="Image 4" className="w-full h-auto object-cover" />
      </div>
    </section>
  );
  
  export default Gallery;
  