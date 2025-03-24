import Image from 'next/image';

export default function Contact() {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col items-center justify-center px-6">
      <div className="container mx-auto py-16">
        <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-10">Neem contact met ons op</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Linker sectie - informatie */}
          <div className="space-y-6 bg-white p-8 rounded-xl shadow-lg">
            <p className="text-lg text-gray-700">Wij staan klaar om u te helpen!</p>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-800">Adres</h3>
                <p className="text-gray-600">Praktijk Bidaya</p>
                <p className="text-gray-600">Poststraat 9</p>
                <p className="text-gray-600">2140 Borgerhout</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">Telefoon</h3>
                <p className="text-gray-600">+32 456 740 311</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">E-mail</h3>
                <p className="text-gray-600">info@vaderhart.com</p>
              </div>
            </div>
            <div className="flex space-x-6 mt-6">
              <a href="#" className="text-gray-700 hover:text-gray-900 text-lg font-semibold">Instagram @vaderhartofficial</a>
              <a href="#" className="text-gray-700 hover:text-gray-900 text-lg font-semibold">YouTube @vaderhartofficial</a>
            </div>
          </div>

          {/* Rechter sectie - formulier */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <form>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 text-sm">Naam*</label>
                  <input type="text" className="w-full p-3 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <div>
                  <label className="block text-gray-700 text-sm">E-mail*</label>
                  <input type="email" className="w-full p-3 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <div>
                  <label className="block text-gray-700 text-sm">Telefoon*</label>
                  <input type="text" className="w-full p-3 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <div>
                  <label className="block text-gray-700 text-sm">Bedrijfsnaam</label>
                  <input type="text" className="w-full p-3 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
              </div>
              <div className="mt-6">
                <label className="block text-gray-700 text-sm">Onderwerp</label>
                <select className="w-full p-3 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>Informatieverzoek</option>
                  <option>Ondersteuning</option>
                  <option>Samenwerking</option>
                </select>
              </div>
              <div className="mt-6">
                <label className="block text-gray-700 text-sm">Uw bericht</label>
                <textarea className="w-full p-3 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
              </div>
              <button className="w-full bg-blue-600 text-white py-3 mt-6 rounded-lg hover:bg-blue-700 transition duration-300 font-semibold">Verzenden</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
