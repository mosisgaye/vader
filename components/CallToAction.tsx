import React from 'react';
import '@/app/globals.css';

export default function CallToAction() {
  return (
    <section className="bg-gradient-to-r from-gray-50 to-blue-50 py-24 px-6 lg:px-0">
      <div className="container mx-auto max-w-5xl">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="flex flex-col items-center p-12 md:p-16 relative">
            {/* Élément décoratif */}
            <div className="absolute top-0 right-0 w-32 h-32 md:w-64 md:h-64 bg-blue-500 opacity-5 rounded-full transform translate-x-1/3 -translate-y-1/3"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-blue-400 opacity-5 rounded-full transform -translate-x-1/3 translate-y-1/3"></div>
            
            {/* Contenu principal */}
            <div className="text-center max-w-3xl mx-auto mb-12 relative z-10">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                <span className="text-[#0065de]">Klaar om aan jezelf te werken</span> of stappen te zetten in je vaderschap?
              </h2>
              <p className="text-gray-600 text-lg mb-10">
                Ontdek hoe persoonlijke coaching je kan helpen om een betere vader te worden en een diepere verbinding met jezelf te creëren.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button className="bg-[#0065de] text-white font-medium py-3 px-8 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-blue-300 focus:ring-opacity-50 w-full sm:w-auto">
                  Maak een afspraak
                </button>
                <button className="bg-transparent text-[#0065de] border border-[#0065de] font-medium py-3 px-8 rounded-lg hover:bg-[#0065de] hover:text-white transition duration-300 focus:outline-none focus:ring-4 focus:ring-blue-300 focus:ring-opacity-50 w-full sm:w-auto">
                  Meer informatie
                </button>
              </div>
            </div>
            
            {/* Indicateurs de confiance */}
            <div className="w-full border-t border-gray-100 pt-8 mt-6">
              <div className="flex flex-wrap justify-center gap-6 md:gap-12">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#0065de]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium">Persoonlijke aanpak</span>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#0065de]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium">Flexibele tijden</span>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#0065de]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium">Gratis kennismaking</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}