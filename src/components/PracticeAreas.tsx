import React from 'react';
import { Building2, Users, Heart, Gavel, Home, Briefcase, FileText, DollarSign, Car, Hammer, FileCheck } from 'lucide-react';

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
    title: 'Dreptul Familiei',
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
  },
  {
    icon: FileText,
    title: 'Drept Contravențional',
    description: 'Reprezentare în cazuri contravenționale și apărarea drepturilor în fața autorităților administrative.'
  },
  {
    icon: DollarSign,
    title: 'Drept Administrativ și Fiscal',
    description: 'Consultanță și reprezentare în probleme administrative și fiscale, inclusiv dispute cu autoritățile publice.'
  },
  {
    icon: Car,
    title: 'Despăgubiri din Accidente',
    description: 'Recuperarea despăgubirilor pentru accidente de muncă, auto și alte prejudicii suferite.'
  },
  {
    icon: Hammer,
    title: 'Executare Silită',
    description: 'Proceduri de executare silită și recuperarea creanțelor prin mijloace legale eficiente.'
  },
  {
    icon: FileCheck,
    title: 'Contracte și Creanțe',
    description: 'Redactarea contractelor, verificarea clauzelor și recuperarea creanțelor comerciale și civile.'
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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {practiceAreas.map((area, index) => {
            const IconComponent = area.icon;
            return (
              <div 
                key={index}
                className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 text-center"
              >
                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 mx-auto">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                
                {/* Content */}
                <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4 group-hover:text-yellow-600 transition-colors duration-300 text-center">
                  {area.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed text-center">
                  {area.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PracticeAreas;