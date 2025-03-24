import Image from 'next/image';

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl w-full mx-auto py-12">
        <h1 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Neem contact met ons op
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Linker sectie - informatie */}
          <div className="bg-white rounded-2xl p-8 shadow-2xl hover:shadow-3xl transition-shadow duration-300">
            <div className="space-y-8">
              <h2 className="text-2xl font-semibold text-gray-900 border-l-4 border-blue-600 pl-4">
                Onze contactgegevens
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                      📍
                    </div>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Adres</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Praktijk Bidaya<br />
                      Poststraat 9<br />
                      2140 Borgerhout
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                      📞
                    </div>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Telefoon</h3>
                    <p className="text-blue-600 hover:text-blue-700 transition-colors">
                      <a href="tel:+32456740311">+32 456 740 311</a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                      ✉️
                    </div>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">E-mail</h3>
                    <p className="text-blue-600 hover:text-blue-700 transition-colors">
                      <a href="mailto:info@vaderhart.com">info@vaderhart.com</a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-gray-100">
                <div className="flex flex-col space-y-4">
                  <a href="#" className="flex items-center space-x-3 group">
                    <span className="w-6 h-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white">
                      📸
                    </span>
                    <span className="text-gray-700 group-hover:text-gray-900 transition-colors">
                      Instagram @vaderhartofficial
                    </span>
                  </a>
                  <a href="#" className="flex items-center space-x-3 group">
                    <span className="w-6 h-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white">
                      ▶️
                    </span>
                    <span className="text-gray-700 group-hover:text-gray-900 transition-colors">
                      YouTube @vaderhartofficial
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Rechter sectie - formulier */}
          <div className="bg-white rounded-2xl p-8 shadow-2xl hover:shadow-3xl transition-shadow duration-300">
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Naam*</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">E-mail*</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Telefoon*</label>
                  <input 
                    type="tel" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Bedrijfsnaam</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" 
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Onderwerp</label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all appearance-none">
                  <option>Informatieverzoek</option>
                  <option>Ondersteuning</option>
                  <option>Samenwerking</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Uw bericht*</label>
                <textarea 
                  rows="4" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-6 rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-md hover:shadow-lg"
              >
                Verzenden
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
