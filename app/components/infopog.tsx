// components/Infop.js

const Infop = () => (
    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-4">Nos informations</h2>
      <div className="flex space-x-4">
        {/* Informations de contact */}
        <div className="flex-1">
          <div className="flex items-center mb-2">
            <i className="fas fa-phone-alt mr-2"></i>
            <p>+241 01 23 45 67</p>
          </div>
          <div className="flex items-center mb-2">
            <i className="fas fa-envelope mr-2"></i>
            <span>pog@example.com</span>
          </div>
          <div className="flex items-center">
            <i className="fas fa-map-marker-alt mr-2"></i>
            <span>Port-Gentil, Gabon</span>
          </div>
        </div>
        {/* Image de la carte */}
                     
                </div>
    </section>
  );
  
  export default Infop;
  