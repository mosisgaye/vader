'use client'

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    text: "I became the woman who decided she's worthy of what she wants and creates it for herself.",
    name: "Jane Doe",
    role: "Mother of two",
  },
  {
    text: "I transformed my mindset and now I achieve everything I set my mind to.",
    name: "Mary Smith",
    role: "Business owner",
  },
  {
    text: "I turned my dreams into reality, one step at a time.",
    name: "Emma Brown",
    role: "Entrepreneur",
  },
];

const TestimonialSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const handlePrevious = () => {
    setCurrentTestimonial((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentTestimonial((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  // Auto-scroll testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-b from-secondary/50 to-secondary/20">
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-60 h-60 bg-primary/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto text-center mb-16">
          <span className="inline-block px-3 py-1 bg-secondary text-primary text-sm font-medium rounded-full mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            What Clients Say About Our Coaching
          </h2>
          <div className="w-24 h-1 bg-primary/30 mx-auto rounded-full"></div>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 relative overflow-hidden">
            <FaQuoteLeft className="absolute text-secondary/30 text-6xl top-8 left-8" />
            <FaQuoteRight className="absolute text-secondary/30 text-6xl bottom-8 right-8" />
            
            <div className="relative z-10 min-h-[240px] flex flex-col justify-center items-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentTestimonial}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="text-center"
                >
                  <p className="text-2xl md:text-3xl font-medium text-gray-800 leading-relaxed mb-8">
                    {testimonials[currentTestimonial].text}
                  </p>
                  <div className="flex flex-col items-center">
                    <h3 className="text-xl font-bold text-primary">
                      {testimonials[currentTestimonial].name}
                    </h3>
                    <p className="text-gray-500">
                      {testimonials[currentTestimonial].role}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          <div className="flex justify-center mt-8 gap-4">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentTestimonial === index ? "bg-primary scale-125" : "bg-gray-300"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          <Button 
            variant="outline"
            size="icon"
            className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-6 bg-white shadow-md hover:bg-primary hover:text-white z-10"
            onClick={handlePrevious}
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          
          <Button 
            variant="outline"
            size="icon"
            className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-6 bg-white shadow-md hover:bg-primary hover:text-white z-10"
            onClick={handleNext}
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;