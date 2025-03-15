'use client'

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FaUsers, FaRegLightbulb, FaArrowRight } from "react-icons/fa";

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative w-full h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 z-10"></div>
      
      {/* Background image with modern blur effect */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
        style={{ 
          backgroundImage: `url('/images/banner.jpg')`,
          backgroundPosition: 'center 30%',
        }}
      >
        <div className="absolute inset-0 backdrop-blur-[2px]"></div>
      </div>
      
      {/* Content container */}
      <div className="container relative z-20 mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-5xl mx-auto"
        >
          {/* Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-8">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="inline-block bg-white text-blue-600 px-5 py-2 rounded-lg shadow-lg mb-4"
            >
              In verbinding met jezelf,
            </motion.span>
            <br />
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="inline-block drop-shadow-lg"
            >
              in verbinding met je gezin
            </motion.span>
          </h1>
          
          {/* Service cards */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col md:flex-row justify-center items-center w-full max-w-4xl mx-auto gap-8 my-8"
          >
            <motion.div 
              whileHover={{ y: -10, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }} 
              className="bg-white/95 rounded-xl p-6 shadow-xl w-full md:w-auto flex-1"
            >
              <div className="flex flex-col items-center">
                <div className="w-24 h-24 mb-4 flex items-center justify-center">
                  <img 
                    src="/images/Vadermetkind.svg" 
                    alt="Vaderschapscoach"
                    className="w-full h-full object-contain"
                  />
                </div>
                <h2 className="text-xl font-bold text-primary/90 mb-2">Vaderschapscoach</h2>
                <p className="text-gray-600 text-sm text-center mb-4 max-w-xs">
                  Versterk je band met je kinderen en ontwikkel sterke vaderlijke vaardigheden
                </p>
                <Button variant="link" className="text-primary hover:text-primary/80 p-0 h-auto">
                  Meer informatie <FaArrowRight className="ml-2 h-3 w-3" />
                </Button>
              </div>
            </motion.div>
            
            <motion.div 
              whileHover={{ y: -10, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }} 
              className="bg-white/95 rounded-xl p-6 shadow-xl w-full md:w-auto flex-1"
            >
              <div className="flex flex-col items-center">
                <div className="w-24 h-24 mb-4 flex items-center justify-center">
                  <img 
                    src="/images/vader.svg" 
                    alt="Mental health coach"
                    className="w-full h-full object-contain"
                  />
                </div>
                <h2 className="text-xl font-bold text-primary/90 mb-2">Mental health coach</h2>
                <p className="text-gray-600 text-sm text-center mb-4 max-w-xs">
                  Verbeter je mentale gezondheid en bereik emotioneel evenwicht
                </p>
                <Button variant="link" className="text-primary hover:text-primary/80 p-0 h-auto">
                  Meer informatie <FaArrowRight className="ml-2 h-3 w-3" />
                </Button>
              </div>
            </motion.div>
          </motion.div>
          
          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 1.0 }}
            className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-6"
          >
            <Button size="lg" className="bg-blue-500 text-white rounded-lg font-medium">
              Maak een afspraak <FaArrowRight className="ml-2 h-3 w-3" />
            </Button>
            <Button size="lg" variant="outline" className="bg-white text-primary hover:bg-white/90 rounded-lg font-medium">
              Ontdek onze diensten
            </Button>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Professional badge */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={isLoaded ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
        transition={{ duration: 0.5, delay: 1.2 }}
        className="absolute bottom-8 right-8 z-20 bg-white/90 px-4 py-2 rounded-full shadow-md hidden md:flex items-center"
      >
        <span className="text-primary/90 font-medium text-sm">Professionele begeleiding</span>
      </motion.div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-background to-transparent z-10"></div>
    </section>
  );
};

export default Hero;







