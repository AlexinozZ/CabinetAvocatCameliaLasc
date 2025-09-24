import React from 'react';
import { Building2, Users, Heart, Gavel, Home, Briefcase, FileText, DollarSign, Car, Hammer, FileCheck } from 'lucide-react';

const practiceAreas = [
  {
    icon: Building2,
    title: 'Drept Civil'
  },
  {
    icon: Briefcase,
    title: 'Drept Comercial'
  },
  {
    icon: Heart,
    title: 'Dreptul Familiei'
  },
  {
    icon: Gavel,
    title: 'Drept Penal'
  },
  {
    icon: Home,
    title: 'Imobiliare'
  },
  {
    icon: Users,
    title: 'Dreptul Muncii'
  },
  {
    icon: FileText,
    title: 'Drept Contravențional'
  },
  {
    icon: Car,
    title: 'Despăgubiri din Accidente'
  },
  {
    icon: Hammer,
    title: 'Executare Silită'
  },
  {
    icon: FileCheck,
    title: 'Contracte și Creanțe'
  }
];

interface PracticeAreasProps {
  id?: string;
}

const PracticeAreas: React.FC<PracticeAreasProps> = ({ id }) => {
  return (
    <section id={id} className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-gray-900 mb-4">
            Domenii de <span className="text-yellow-600">practică</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Servicii juridice complete în multiple domenii de practică, 
            oferind reprezentare expertă adaptată nevoilor dumneavoastră specifice.
          </p>
        </div>
        
        {/* Practice Areas Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          {practiceAreas.map((area, index) => {
            const IconComponent = area.icon;
            
            return (
              <div 
                className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 text-center h-40 flex flex-col justify-center"
                key={index}
              >
                {/* Icon */}
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 mx-auto">
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
                
                {/* Content */}
                <h3 className="text-lg font-serif font-bold text-gray-900 group-hover:text-yellow-600 transition-colors duration-300 text-center leading-tight">
                  {area.title}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PracticeAreas;