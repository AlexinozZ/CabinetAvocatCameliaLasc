import React from 'react';
import { Scale, Linkedin, Facebook, Mail, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center">
                <Scale className="w-6 h-6 text-black" />
              </div>
              <div>
                <h3 className="text-xl font-serif font-bold text-yellow-400">
                  Cabinet Avocat
                </h3>
                <p className="text-yellow-400">Lasc Camelia Irina</p>
              </div>
            </div>
            
            <p className="text-gray-300 leading-relaxed max-w-md">
              Oferim servicii juridice excepționale cu integritate, dedicare și expertiză. 
              Partenerul dumneavoastră de încredere pentru toate problemele juridice din România.
            </p>
            
            {/* Social Media Links */}
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-yellow-400/10 hover:bg-yellow-400/20 rounded-lg flex items-center justify-center transition-colors duration-300 group"
              >
                <Linkedin className="w-5 h-5 text-yellow-400 group-hover:text-yellow-300" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-yellow-400/10 hover:bg-yellow-400/20 rounded-lg flex items-center justify-center transition-colors duration-300 group"
              >
                <Facebook className="w-5 h-5 text-yellow-400 group-hover:text-yellow-300" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-yellow-400">Link-uri Rapide</h4>
            <ul className="space-y-3">
              {[
                'Despre Noi',
                'Domenii de Practică', 
                'De Ce Să Ne Alegeți',
                'Mărturii',
                'Contactați-ne'
              ].map((link, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-gray-300 hover:text-yellow-400 transition-colors duration-200 inline-flex items-center group"
                  >
                    <span>{link}</span>
                    <svg className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Information */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-yellow-400">Informații de Contact</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">office@cabinetlasc.ro</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">+40 21 xxx xxxx</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Scale className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">
                    Str. Exemplu Nr. 123<br />
                    Sector 1, București<br />
                    România
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Footer */}
      <div className="border-t border-yellow-400/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2025 Cabinet Avocat Lasc Camelia Irina. All rights reserved.
            </div>
            
            <div className="flex space-x-6">
              <a 
                href="#" 
                className="text-gray-400 hover:text-yellow-400 text-sm transition-colors duration-200"
              >
                Politica de Confidențialitate
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-yellow-400 text-sm transition-colors duration-200"
              >
                Termeni și Condiții
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;