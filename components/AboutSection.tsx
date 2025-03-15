import Image from 'next/image';
import '@/app/globals.css';

function AboutSection() {
  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-24">
      <div className="container mx-auto max-w-6xl px-6 lg:px-8">
        {/* En-tête avec titre et sous-titre */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-800 mb-6 leading-tight">
            Ben je op zoek naar balans in je leven?
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Als vader of als man? Of je nu vader bent of (nog) geen kinderen hebt, je vraagt je misschien af: Hoe blijf ik mezelf trouw in een wereld vol verwachtingen, in een snelheidsmaatschappij waar we het altijd druk hebben?
          </p>
        </div>

        {/* Contenu principal avec image et texte */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Contenu texte - 7 colonnes sur écrans larges */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Als mannencoach én vaderschapscoach ben ik er voor jou. Voor vaders die zoeken naar verbinding in hun gezin, én voor mannen die op zoek zijn naar mentale balans, persoonlijke groei en veerkracht.
            </p>
            
            <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Wat ik voor je kan betekenen:</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-blue-50 p-2 rounded-full mr-4 mt-1">
                    <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <div>
                    <span className="font-medium text-gray-800">Persoonlijke groei:</span> 
                    <span className="text-gray-600"> Samen kijken we naar wie je bent en wie je wilt zijn, als vader en als individu.</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-50 p-2 rounded-full mr-4 mt-1">
                    <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <div>
                    <span className="font-medium text-gray-800">Holistische aanpak:</span> 
                    <span className="text-gray-600"> We werken aan alle dimensies die belangrijk zijn voor jouw welzijn, want alles hangt met elkaar samen.</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-50 p-2 rounded-full mr-4 mt-1">
                    <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <div>
                    <span className="font-medium text-gray-800">Praktische tools:</span> 
                    <span className="text-gray-600"> Handvatten die je dagelijks kunt inzetten om sterker in het leven te staan.</span>
                  </div>
                </li>
              </ul>
            </div>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              Coaching biedt een veilige plek om stil te staan, inzicht te krijgen en stappen te zetten. Neem contact op en ontdek wat Vaderhart voor jou kan betekenen.
            </p>
          </div>
          
          {/* Image - 5 colonnes sur écrans larges */}
          <div className="lg:col-span-5 order-1 lg:order-2">
            <div className="relative h-full">
              <div className="rounded-2xl overflow-hidden shadow-xl bg-white p-2">
                <div className="rounded-xl overflow-hidden aspect-w-4 aspect-h-5 relative">
                  <Image
                    src="/images/about.jpeg"
                    alt="Profile Picture"
                    width={600}
                    height={750}
                    className="object-cover w-full h-full"
                    priority
                  />
                </div>
              </div>
              {/* Élément décoratif */}
              <div className="absolute -z-10 -bottom-6 -right-6 w-64 h-64 bg-blue-50 rounded-full opacity-70"></div>
              <div className="absolute -z-10 -top-6 -left-6 w-32 h-32 bg-gray-100 rounded-full opacity-70"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;






