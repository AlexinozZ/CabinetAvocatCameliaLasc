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
          {/* Contact Information */}
          <div className="space-y-8 text-center">
            {/* Contact Details */}
            <div className="space-y-6">
              <div className="flex flex-col items-center space-y-3 p-4">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-yellow-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Adresa Cabinetului</h4>
                  <p className="text-gray-600">
                    Bulevardul Revoluției din 1989 7<br />
                    Timișoara 300054<br />
                    România
                  </p>
                  <div className="mt-4">
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
                </div>
              </div>
              
              <div className="flex flex-col items-center space-y-3 p-4">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                  <Phone className="w-6 h-6 text-yellow-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Număr de Telefon</h4>
                  <p className="text-gray-600">+40 744 669 932</p>
                </div>
              </div>
              
              <div className="flex flex-col items-center space-y-3 p-4">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-yellow-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Adresa de Email</h4>
                  <p className="text-gray-600">av.camelialasc@gmail.com</p>
                </div>
              </div>
              
              <div className="flex flex-col items-center space-y-3 p-4">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                  <Clock className="w-6 h-6 text-yellow-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Program de Lucru</h4>
                  <div className="text-gray-600 space-y-1">
                    <p>Luni - Vineri: 9:00 - 18:00</p>
                    <p>Sâmbătă: 9:00 - 13:00</p>
                    <p>Duminică: Închis</p>
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

export default Contact;