import React from 'react';
import { Phone } from 'lucide-react';

interface HeroProps {
  onOpenConsultationModal: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenConsultationModal }) => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white overflow-hidden pt-16">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-transparent"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-yellow-400/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-400/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="flex flex-col items-center text-center space-y-8">
          {/* Main Logo */}
          <div className="mb-6">
            <img 
              src="/main-logo.jpeg" 
              alt="Cabinet Avocat Lasc Camelia Irina - Logo Principal" 
              className="w-80 h-60 sm:w-96 sm:h-72 object-contain mx-auto"
            />
          </div>
          
          {/* Call to Action */}
          <div className="space-y-6">
            <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Servicii juridice profesionale cu integritate și dedicare.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={onOpenConsultationModal}
              className="group bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
            >
              <span className="flex items-center justify-center gap-2">
                Programează o Consultație
                <Phone className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
              </span>
            </button>
            
            <div className="relative">
              <button 
                onClick={scrollToAbout}
                className="border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
              >
                Află Mai Multe
              </button>
              
              {/* Scroll Indicator attached directly to this button */}
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-4">
                <div className="w-6 h-10 border-2 border-yellow-400/50 rounded-full flex justify-center">
                  <div className="w-1 h-3 bg-yellow-400 rounded-full mt-2 animate-bounce"></div>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;