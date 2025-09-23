import React from 'react';
import { Award, Shield, Users } from 'lucide-react';

interface AboutProps {
  id?: string;
}

const About: React.FC<AboutProps> = ({ id }) => {
  return (
    <section id={id} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Portrait */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="/Poza_Avocat copy.jpeg"
                alt="Lasc Camelia Irina - Professional Lawyer"
                className="w-full h-96 sm:h-[500px] object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-yellow-400/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-yellow-400/10 rounded-full blur-xl"></div>
          </div>
          
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl sm:text-5xl font-serif font-bold text-gray-900 mb-4">
                Despre <span className="text-yellow-600">avocat</span>
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full mx-auto"></div>
            </div>
            
            <div className="space-y-6 text-gray-600 leading-relaxed text-justify">
              <p className="text-lg">
                <strong className="text-gray-900">Lasc Camelia Irina</strong> aduce peste două decenii de expertiză juridică dedicată pentru a servi clienții din România cu un angajament neclintit față de justiție și excelență profesională.
              </p>
              
              <p>
                Specializându-se în probleme juridice complexe, ea combină cunoștințele profunde ale dreptului românesc cu o 
                abordare centrată pe client care asigură soluții personalizate pentru fiecare caz. Practica sa 
                este construită pe fundația integrității, confidențialității și pledoariei neobosită pentru drepturile clienților săi.
              </p>
              
              <p>
                Cu un istoric dovedit de rezultate de succes și clienți mulțumiți, Camelia Irina 
                continuă să stabilească standardul pentru reprezentarea juridică în România.
              </p>
            </div>
            
            {/* Key Attributes */}
            <div className="grid sm:grid-cols-3 gap-6 pt-8">
              <div className="flex flex-col items-center text-center space-y-3 p-4 rounded-lg hover:bg-gray-50 transition-colors duration-300">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                  <Award className="w-6 h-6 text-yellow-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Excelență</h3>
                <p className="text-base text-gray-600">Angajată la cele mai înalte standarde</p>
              </div>
              
              <div className="flex flex-col items-center text-center space-y-3 p-4 rounded-lg hover:bg-gray-50 transition-colors duration-300">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                  <Shield className="w-6 h-6 text-yellow-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Confidențialitate</h3>
                <p className="text-base text-gray-600">Intimitatea dumneavoastră este prioritatea noastră</p>
              </div>
              
              <div className="flex flex-col items-center text-center space-y-3 p-4 rounded-lg hover:bg-gray-50 transition-colors duration-300">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-yellow-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Orientare spre Client</h3>
                <p className="text-base text-gray-600">Soluții juridice personalizate</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;