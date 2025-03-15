import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-white py-40">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-800">
          Jouw Pad naar Groei en Verbinding begint hier.
        </h1>
        <p className="text-lg md:text-xl font-light mb-8 max-w-3xl mx-auto text-gray-600">
          Bij Vaderhart begeleid ik vaders en mannen die willen groeien – als individu, als vader, en als man. 
          Of je nu kiest voor persoonlijke coaching, inspirerende groepsbijeenkomsten ou des formations et webinars, 
          samen zetten we stappen richting meer zelfinzicht, balans en verbinding. Kies de begeleiding die bij jou past.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="/contact"
            className="bg-blue-500 text-white font-medium px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
          >
            Neem Contact op
          </a>
          <a
            href="/appointment"
            className="bg-blue-500 text-white font-medium px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
          >
            Maak een Afspraak
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
