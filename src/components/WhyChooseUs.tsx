import React from 'react';
import { Shield, Clock, Target, Star } from 'lucide-react';

interface WhyChooseUsProps {
  onOpenConsultationModal: () => void;
  id?: string;
}

const strengths = [
  {
    icon: Shield,
    title: 'Integritate',
    description: 'Angajament neclintit față de practicile etice și comunicarea transparentă pe parcursul fiecărui caz.'
  },
  {
    icon: Clock,
    title: 'Experiență',
    description: 'Peste un deceniu de practică juridică de succes cu înțelegere profundă a legii și procedurilor românești.'
  },
  {
    icon: Target,
    title: 'Soluții Personalizate',
    description: 'Strategii juridice adaptate special pentru situația și obiectivele dumneavoastră unice.'
  },
  {
    icon: Star,
    title: 'Dedicare',
    description: 'Pledoarie neobosită și atenție personală pentru a asigura cel mai bun rezultat posibil pentru fiecare client.'
  }
];

const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ onOpenConsultationModal, id }) => {
  return (
    <section id={id} className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-yellow-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-yellow-400 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-serif font-bold mb-4">
            De Ce să Alegeți <span className="text-yellow-400">Cabinetul Nostru</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Angajamentul nostru față de excelență, combinat cu atenția personalizată și rezultatele dovedite, 
            ne face alegerea de încredere pentru reprezentarea juridică în România.
          </p>
        </div>
        
        {/* Strengths Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {strengths.map((strength, index) => {
            const IconComponent = strength.icon;
            return (
              <div 
                key={index}
                className="group text-center space-y-6 p-6 rounded-xl hover:bg-white/5 transition-all duration-300"
              >
                {/* Icon */}
                <div className="relative">
                  <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-10 h-10 text-black" />
                  </div>
                  <div className="absolute inset-0 bg-yellow-400/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                </div>
                
                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-serif font-bold text-yellow-400 group-hover:text-yellow-300 transition-colors duration-300">
                    {strength.title}
                  </h3>
                  
                  <p className="text-gray-300 leading-relaxed">
                    {strength.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Call to Action */}
        <div className="text-center mt-16">
          <button 
            onClick={onOpenConsultationModal}
            className="bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
          >
            Programează Consultația Ta Astăzi
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;