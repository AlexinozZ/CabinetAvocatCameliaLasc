import React from 'react';
import { Building2, Users, Heart, Gavel, Home, Briefcase } from 'lucide-react';

const practiceAreas = [
  {
    icon: Building2,
    title: 'Drept Civil',
    description: 'Servicii complete de litigii civile și rezolvare a disputelor cu expertiză în dreptul contractelor și cazuri de vătămare corporală.'
  },
  {
    icon: Briefcase,
    title: 'Drept Comercial',
    description: 'Înființarea afacerilor, contracte comerciale și conformitatea corporativă pentru a ajuta afacerea dumneavoastră să prospere pe piața României.'
  },
  {
    icon: Heart,
    title: 'Drept de Familie',
    description: 'Gestionarea sensibilă a problemelor de familie, inclusiv divorț, custodie, adopție și relații domestice cu compasiune.'
  },
  {
    icon: Gavel,
    title: 'Drept Penal',
    description: 'Reprezentare agresivă în apărarea penală cu experiență vastă în sistemul de justiție penală românesc.'
  },
  {
    icon: Home,
    title: 'Imobiliare',
    description: 'Tranzacții imobiliare, dispute imobiliare și probleme de zonare cu due diligence amănunțit și protecție juridică.'
  },
  {
    icon: Users,
    title: 'Drept Muncii',
    description: 'Probleme de dreptul muncii, dispute la locul de muncă și negocieri de contracte de muncă pentru angajatori și angajați.'
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
            Domenii de <span className="text-yellow-600">Practică</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Servicii juridice complete în multiple domenii de practică, 
            oferind reprezentare expertă adaptată nevoilor dumneavoastră specifice.
          </p>
        </div>
        
        {/* Practice Areas Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {practiceAreas.map((area, index) => {
            const IconComponent = area.icon;
            return (
              <div 
                key={index}
                className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                
                {/* Content */}
                <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4 group-hover:text-yellow-600 transition-colors duration-300">
                  {area.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {area.description}
                </p>
                
                {/* Read More Link */}
                <div className="mt-6">
                  <span className="text-yellow-600 font-medium hover:text-yellow-700 cursor-pointer inline-flex items-center group/link">
                    Află Mai Multe
                    <svg className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PracticeAreas;