// components/ContactForm.js

const ContactForm = () => (
  <section className="mb-8 px-4 py-8 bg-gray-100">
    <div className="flex flex-col md:flex-row gap-4">
      {/* Formulaire de Contact */}
      <div className="flex-1 flex flex-col">
        <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
        <form className="flex flex-col gap-4">
          {/* Nom et Email sur la même ligne */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1">Nom</label>
              <input 
                id="name" 
                type="text" 
                placeholder="Nom" 
                className="border border-red-700 p-2 w-full rounded" 
                required 
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
              <input 
                id="email" 
                type="email" 
                placeholder="Email" 
                className="border border-red-700 p-2 w-full rounded" 
                required 
              />
            </div>
          </div>
          {/* Message plus grand */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
            <textarea 
              id="message" 
              placeholder="Message" 
              className="border border-red-700 p-4 w-full h-48 rounded resize-none" 
              required 
            />
          </div>
          {/* Bouton Envoyer */}
          <button 
            className="bg-red-500 text-white px-4 py-2 rounded mt-4 self-start"
            type="submit"
          >
            Envoyer
          </button>
        </form>
      </div>

      {/* Informations et Carte */}
      <div className="flex-1 flex flex-col">
        <section className="mb-8 flex-1">
          <h2 className="text-2xl font-bold mb-4">Nos informations</h2>
          <div className="flex flex-col space-y-4">
            <div className="flex md:flex-row sm:flex-col space-x-36 items-center">
              <div className="flex sm:flex-col  items-center">
                <img src="/tel.png" alt="Téléphone" className="w-14 h-14" />
                <p className="text-sm md:text-base">+241 01 23 45 67</p>
              </div>
              <div className="flex flex-col items-center">
                <img src="/mail.png" alt="Email" className="w-14 h-14" />
                <span className="text-sm md:text-base">pog@example.com</span>
              </div>
              <div className="flex flex-col items-center">
                <img src="/loc.png" alt="Localisation" className="w-14 h-14" />
                <span className="text-sm md:text-base">Port-Gentil, Gabon</span>
              </div>
            </div>
          </div>
        </section>

        <iframe
          className="w-full h-64 border-0"
          src="https://maps.google.com/maps?q=Rue%20Faye%20faye%2C%20Port-Gentil&amp;t=m&amp;z=10&amp;output=embed&amp;iwloc=near"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    </div>
  </section>
);

export default ContactForm;
