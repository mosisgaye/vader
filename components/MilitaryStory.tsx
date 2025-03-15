import Image from 'next/image';

function MilitaryStory() {
  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-24">
      <div className="container mx-auto max-w-6xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Wat mag ik verwachten en hoe kan Vaderhart je helpen groeien?
          </h1>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
            Bij Vaderhart vind je een veilige ruimte om te ontdekken, te reflecteren en te groeien 
            <span className="inline-block transform translate-y-1 ml-1">🌱</span>. Mijn aanpak is gebouwd op twee kernconcepten: her-verbinding met jezelf en de lens van afgestemd opvoeden.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-start justify-between gap-12">
          {/* Photo avec design moderne */}
          <div className="lg:w-2/5 w-full">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl transform transition-transform duration-300 hover:scale-102 group">
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
              <Image
                src="/images/illias.jpg"
                alt="Profile Picture"
                width={600}
                height={800}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          </div>

          {/* Contenu texte avec design élégant */}
          <div className="lg:w-3/5 w-full">
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="text-blue-600 mr-2">01.</span> Her-verbinding met jezelf
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  <span className="text-gray-500 italic block mb-2">"Heling betekent (terug) heel worden, alle delen van jezelf integreren en al die aspecten van jezelf erkennen die je hebt verafschuwd, gehaat, afgewezen of waarvan je hebt geprobeerd weg te rennen. Het is een terugkeer naar je authentieke zelf, dat nooit is verdwenen, maar waarmee je het contact bent verloren."</span>
                  <span className="font-medium text-gray-900">– G. Maté</span>
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="text-blue-600 mr-2">02.</span> Afgestemd opvoeden
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Afgestemd opvoeden is meer dan een opvoedstijl; het is een manier om jezelf en je kinderen beter te begrijpen. Door te kijken naar je eigen opvoeding, ontdek je hoe jouw verleden invloed heeft op wie je vandaag bent. Dit proces helpt je om bewust te reageren en echte verbinding te creëren met je kinderen.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 flex items-center">
                  Wat is het aanbod van Vaderhart? <span className="inline-block transform translate-y-1 ml-2">🚀</span>
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 border border-gray-100 rounded-lg bg-gray-50 transition-colors duration-300 hover:bg-blue-50">
                    <h3 className="font-bold text-gray-900 mb-2 flex items-center">
                      <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-2 text-sm">1</span>
                      Individuele coaching
                    </h3>
                    <p className="text-gray-700">Een-op-een begeleiding om je persoonlijke uitdagingen aan te pakken en richting te vinden. <span className="inline-block">💡</span></p>
                  </div>
                  <div className="p-4 border border-gray-100 rounded-lg bg-gray-50 transition-colors duration-300 hover:bg-blue-50">
                    <h3 className="font-bold text-gray-900 mb-2 flex items-center">
                      <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-2 text-sm">2</span>
                      Vadergroepen
                    </h3>
                    <p className="text-gray-700">Inspirerende bijeenkomsten waarin je leert van en met andere vaders. <span className="inline-block">🤗</span></p>
                  </div>
                  <div className="p-4 border border-gray-100 rounded-lg bg-gray-50 transition-colors duration-300 hover:bg-blue-50">
                    <h3 className="font-bold text-gray-900 mb-2 flex items-center">
                      <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-2 text-sm">3</span>
                      Trainingen
                    </h3>
                    <p className="text-gray-700">Praktische workshops om je vaardigheden te verdiepen en te groeien als ouder en als mens. <span className="inline-block">🎓</span></p>
                  </div>
                  <div className="p-4 border border-gray-100 rounded-lg bg-gray-50 transition-colors duration-300 hover:bg-blue-50">
                    <h3 className="font-bold text-gray-900 mb-2 flex items-center">
                      <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-2 text-sm">4</span>
                      Kennis delen
                    </h3>
                    <p className="text-gray-700">Via blog en sociale media. <span className="inline-block">📚</span></p>
                  </div>
                </div>
                <div className="mt-6 text-center">
                  <p className="text-gray-800 font-medium">
                    Benieuwd wat dit voor jou kan betekenen? Neem contact op en laten we samen ontdekken wat mogelijk is! <span className="inline-block">✨</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MilitaryStory;