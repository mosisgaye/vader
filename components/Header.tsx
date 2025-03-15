"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import "@/app/globals.css";

export default function Header() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const dropdownRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  // Handle scroll event to add shadow only when scrolled
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle clicks outside the dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (activeDropdown) {
        const currentRef = dropdownRefs.current[activeDropdown];
        if (currentRef && !currentRef.contains(event.target as Node)) {
          setActiveDropdown(null);
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [activeDropdown]);

  const toggleDropdown = (menuName: string) => {
    setActiveDropdown(activeDropdown === menuName ? null : menuName);
  };

  const closeAllMenus = () => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
  };

  // WhatsApp link
  const whatsappLink = "https://wa.me/+yourphonenumber"; // Remplacez 'yourphonenumber' par votre numéro

  return (
    <header className={`top-0 z-50 bg-white ${isScrolled ? 'shadow-md' : ''} text-gray-800 h-16 md:h-20 flex items-center justify-between fixed w-full px-6 lg:px-12 xl:px-24 transition-all duration-300`}>
      {/* Left Navigation */}
      <nav className="hidden xl:flex items-center space-x-12 font-medium">
        <Link href="/" className="hover:text-blue-600 transition duration-300">
          HOME
        </Link>

        {/* Diensten Dropdown */}
        <div
          className="relative"
          ref={el => { dropdownRefs.current["diensten"] = el; }}
        >
          <button
            className="flex items-center hover:text-blue-600 transition duration-300"
            onClick={() => toggleDropdown("diensten")}
            aria-expanded={activeDropdown === "diensten"}
            aria-haspopup="true"
          >
            DIENSTEN
            <span className="ml-1 transform transition-transform duration-200 text-xs">
              {activeDropdown === "diensten" ? "▲" : "▼"}
            </span>
          </button>
          {activeDropdown === "diensten" && (
            <div className="absolute top-full left-0 mt-2 w-64 bg-white shadow-lg rounded-md py-2 z-10">
              <Link
                href="/coaching"
                className="block px-4 py-2 hover:bg-blue-50 transition duration-200"
                onClick={closeAllMenus}
              >
                Coaching
              </Link>
              <Link
                href="/groepsbijeenkomsten"
                className="block px-4 py-2 hover:bg-blue-50 transition duration-200"
                onClick={closeAllMenus}
              >
                Groepsbijeenkomsten
              </Link>
              <Link
                href="/trainingen"
                className="block px-4 py-2 hover:bg-blue-50 transition duration-200"
                onClick={closeAllMenus}
              >
                Trainingen en webinars
              </Link>
            </div>
          )}
        </div>

        {/* Afspraak Dropdown */}
        <div
          className="relative"
          ref={el => { dropdownRefs.current["afspraak"] = el; }}
        >
          <button
            className="flex items-center hover:text-blue-600 transition duration-300"
            onClick={() => toggleDropdown("afspraak")}
            aria-expanded={activeDropdown === "afspraak"}
            aria-haspopup="true"
          >
            AFSPRAAK
            <span className="ml-1 transform transition-transform duration-200 text-xs">
              {activeDropdown === "afspraak" ? "▲" : "▼"}
            </span>
          </button>
          {activeDropdown === "afspraak" && (
            <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-md py-3 z-10">
              <Link
                href="/afspraak"
                className="block px-6 py-3 hover:bg-blue-50 transition duration-200"
                onClick={closeAllMenus}
              >
                Appointment
              </Link>
              <Link
                href="/agenda"
                className="block px-6 py-3 hover:bg-blue-50 transition duration-200"
                onClick={closeAllMenus}
              >
                Agenda
              </Link>
            </div>
          )}
        </div>
      </nav>

      {/* Centered Logo */}
      <div className="flex items-center justify-center">
        <Link href="/" className="flex items-center" onClick={closeAllMenus}>
          <Image
            src="/images/logo.png"
            alt="Logo vaderhart"
            width={150}
            height={50}
            className="w-28 sm:w-36 lg:w-40"
            priority
          />
        </Link>
      </div>

      {/* Right Navigation */}
      <nav className="hidden xl:flex items-center justify-end space-x-8 font-medium">
       
        <Link href="/about" className="hover:text-blue-600 transition duration-300">
          OVER MIJ
        </Link>
        <div className="flex space-x-4">
          <Link
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="button px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition duration-300 flex items-center"
          >
            <svg 
              className="w-5 h-5 mr-2" 
              fill="currentColor" 
              viewBox="0 0 24 24"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            WhatsApp
          </Link>
          <Link
            href="/contact"
            className="button px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300"
          >
            CONTACT
          </Link>
        </div>
      </nav>

      {/* Mobile Menu Toggle */}
      <button
        className="xl:hidden"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle Menu"
      >
        {isMenuOpen ? (
          <svg
            className="w-8 h-8 text-gray-800"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg
            className="w-8 h-8 text-gray-800"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-white text-gray-800 transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out xl:hidden overflow-y-auto`}
      >
        <div className="flex justify-between items-center p-6 border-b">
          <Image
            src="/images/logo.png"
            alt="Logo vaderhart"
            width={120}
            height={40}
            className="w-28"
          />
          <button onClick={closeAllMenus} aria-label="Close Menu">
            <svg
              className="w-8 h-8 text-gray-800"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <nav className="flex flex-col px-6 py-8 space-y-6">
          <Link href="/" onClick={closeAllMenus} className="text-lg font-medium hover:text-blue-600 transition">
            HOME
          </Link>
          
          {/* Mobile Diensten Dropdown */}
          <div className="space-y-2">
            <button 
              onClick={() => toggleDropdown("diensten-mobile")}
              className="flex justify-between items-center w-full text-lg font-medium hover:text-blue-600 transition"
            >
              DIENSTEN
              <span className="transform transition-transform duration-200">
                {activeDropdown === "diensten-mobile" ? "▲" : "▼"}
              </span>
            </button>
            {activeDropdown === "diensten-mobile" && (
              <div className="pl-4 space-y-3 mt-2">
                <Link
                  href="/coaching"
                  onClick={closeAllMenus}
                  className="block py-1 hover:text-blue-600 transition"
                >
                  Coaching
                </Link>
                <Link
                  href="/groepsbijeenkomsten"
                  onClick={closeAllMenus}
                  className="block py-1 hover:text-blue-600 transition"
                >
                  Groepsbijeenkomsten
                </Link>
                <Link
                  href="/trainingen"
                  onClick={closeAllMenus}
                  className="block py-1 hover:text-blue-600 transition"
                >
                  Trainingen en webinars
                </Link>
              </div>
            )}
          </div>
          
          {/* Mobile Afspraak Dropdown */}
          <div className="space-y-2">
            <button 
              onClick={() => toggleDropdown("afspraak-mobile")}
              className="flex justify-between items-center w-full text-lg font-medium hover:text-blue-600 transition"
            >
              AFSPRAAK
              <span className="transform transition-transform duration-200">
                {activeDropdown === "afspraak-mobile" ? "▲" : "▼"}
              </span>
            </button>
            {activeDropdown === "afspraak-mobile" && (
              <div className="pl-4 space-y-3 mt-2">
                <Link
                  href="/afspraak"
                  onClick={closeAllMenus}
                  className="block py-1 hover:text-blue-600 transition"
                >
                  Appointment
                </Link>
                <Link
                  href="/agenda"
                  onClick={closeAllMenus}
                  className="block py-1 hover:text-blue-600 transition"
                >
                  Agenda
                </Link>
              </div>
            )}
          </div>
          
          <Link
            href="/about"
            onClick={closeAllMenus}
            className="text-lg font-medium hover:text-blue-600 transition"
          >
            OVER MIJ
          </Link>
          
          <div className="pt-4 space-y-4">
            <Link
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeAllMenus}
              className="px-4 py-3 bg-green-500 text-white rounded-md text-center hover:bg-green-600 transition flex items-center justify-center"
            >
              <svg 
                className="w-5 h-5 mr-2" 
                fill="currentColor" 
                viewBox="0 0 24 24"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Contactez-nous sur WhatsApp
            </Link>
            <Link
              href="/contact"
              onClick={closeAllMenus}
              className="block px-4 py-3 bg-blue-600 text-white rounded-md text-center hover:bg-blue-700 transition"
            >
              CONTACT
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}