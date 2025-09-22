import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

interface ContactProps {
  id?: string;
}

const Contact: React.FC<ContactProps> = ({ id }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will contact you soon.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };
  
  return (
    <section id={id} className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-gray-900 mb-4">
            <span className="text-yellow-600">Contactați-ne</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Gata să discutați nevoile dumneavoastră juridice? Contactați-ne astăzi pentru o consultație. 
            Suntem aici să vă oferim îndrumarea juridică pe care o meritați.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {/* Contact Information Cards */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Address Card */}
            <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin className="w-8 h-8 text-yellow-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Adresa Cabinetului</h4>
              <p className="text-gray-600 mb-6">
                Bulevardul Revoluției din 1989 7<br />
                Timișoara 300054<br />
                România
              </p>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Bulevardul+Revolu%C8%9Biei+din+1989+7%2C+Timi%C8%99oara+300054"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-gray-800 hover:bg-gray-900 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
              >
                <MapPin className="w-5 h-5" />
                <span>Vezi pe hartă</span>
              </a>
            </div>

            {/* Phone Card */}
            <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone className="w-8 h-8 text-yellow-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Număr de Telefon</h4>
              <p className="text-gray-600 mb-6">+40 744 669 932</p>
              <p className="text-sm text-gray-500 mb-4">Descarcă contactul direct în agenda ta</p>
              <a
                href="data:text/vcard;charset=utf-8,BEGIN%3AVCARD%0AVERSION%3A3.0%0AFN%3ALasc%20Camelia%20Irina%0AORG%3ACabinet%20Avocat%20Lasc%20Camelia%20Irina%0ATEL%3A%2B40744669932%0AEMAIL%3Aav.camelialasc%40gmail.com%0AADR%3A%3B%3BBulevardul%20Revolu%C8%9Biei%20din%201989%207%3BTimi%C8%99oara%3B%3B300054%3BRom%C3%A2nia%0AEND%3AVCARD"
                download="Lasc_Camelia_Irina_Contact.vcf"
                className="inline-flex items-center space-x-2 bg-gray-800 hover:bg-gray-900 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span>Descarcă vCard</span>
              </a>
            </div>

            {/* Email Card */}
            <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail className="w-8 h-8 text-yellow-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Adresa de Email</h4>
              <p className="text-gray-600">av.camelialasc@gmail.com</p>
            </div>

            {/* Working Hours Card */}
            <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="w-8 h-8 text-yellow-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Program de Lucru</h4>
              <div className="text-gray-600 space-y-1">
                <p>Luni - Vineri: 9:00 - 18:00</p>
                <p>Sâmbătă: 9:00 - 13:00</p>
                <p>Duminică: Închis</p>
              </div>
            </div>
          </div>
          
          <div className="mt-16">
      </div>
    </section>
  );
};

export default Contact;
  )
}