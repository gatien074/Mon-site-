const Formp = () => (
  <section className="mb-8  flex">
   
    <div className="flex items-center gap-4">
    <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
    </div>
    <div className="flex flex-col items-center gap-4">
    <form className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-1">Nom</label>
        <input 
          id="name" 
          type="text" 
          placeholder="Nom" 
          className="border p-2 w-full rounded" 
          required 
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
        <input 
          id="email" 
          type="email" 
          placeholder="Email" 
          className="border p-2 w-full rounded" 
          required 
        />
      </div>
      <div className="col-span-2">
        <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
        <textarea 
          id="message" 
          placeholder="Message" 
          className="border p-2 w-full rounded" 
          required 
        />
      </div>
      <button 
        className="bg-red-500 text-white px-4 py-2 rounded col-span-2" 
        type="submit"
      >
        Envoyer
      </button>
    </form>
    <iframe
  className="w-full md: border-4"
   src="https://maps.google.com/maps?q=Rue%20Faye%20faye%2C%20Port-Gentil&#038;t=m&#038;z=10&#038;output=embed&#038;iwloc=near"
    width="100%"
                        height="300"
                   style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                    ></iframe>
                    </div>
  </section>
);

export default Formp;
