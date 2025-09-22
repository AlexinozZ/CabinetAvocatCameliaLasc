import React from 'react';
import { Scale, Phone } from 'lucide-react';

interface HeroProps {
  onOpenConsultationModal: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenConsultationModal }) => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-transparent"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-yellow-400/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-400/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="flex flex-col items-center text-center space-y-8">
          {/* Logo Placeholder */}
          <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full mb-6">
            <Scale className="w-10 h-10 text-black" />
          </div>
          
          {/* Main Headline */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold leading-tight">
              <span className="block">Cabinet Avocat</span>
              <span className="block text-yellow-400">Lasc Camelia Irina</span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Servicii juridice profesionale cu integritate și dedicare.
            </p>
          </div>
          
          {/* Call to Action */}
          <div className="flex flex-col sm:flex-row gap-4 pt-8">
            <button 
              onClick={onOpenConsultationModal}
              className="group bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
            >
              <span className="flex items-center justify-center gap-2">
                Programează o Consultație
                <Phone className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
              </span>
            </button>
            
            <button className="border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
              Află Mai Multe
            </button>
          </div>
          
          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <div className="w-6 h-10 border-2 border-yellow-400/50 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-yellow-400 rounded-full mt-2 animate-bounce"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;