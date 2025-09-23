import React, { useState } from 'react';
import { X, Calendar, Clock, User, Mail, Phone, MessageSquare } from 'lucide-react';
import emailjs from '@emailjs/browser';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ConsultationModal: React.FC<ConsultationModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    legalArea: '',
    reason: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    setIsSubmitting(true);
    
    try {
      // Prepare template parameters matching EmailJS template
      const templateParams = {
        name: formData.name,
        phone: formData.phone,
        email: formData.email || 'Nu a fost specificat',
        reason: formData.reason,
        title: `Cerere consultație - ${formData.legalArea}`,
        time: new Date().toLocaleString('ro-RO')
      };

      // Send email using EmailJS
      await emailjs.send(
        'service_84g7n1f', // Service ID
        'template_xiseikc', // Template ID
        templateParams,
        'hRYJMFUiibv1G4o_P' // Public Key
      );

      alert('Mulțumim! Cererea dumneavoastră a fost trimisă cu succes. Vă vom contacta în cel mai scurt timp pentru confirmarea programării.');
      
      // Reset form
      setFormData({
        name: '',
        phone: '',
        email: '',
        legalArea: '',
        reason: ''
      });
      
      onClose();
    } catch (error) {
      console.error('Error sending email:', error);
      alert('A apărut o eroare la trimiterea cererii. Vă rugăm să încercați din nou sau să ne contactați direct la telefon.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Check if all required fields are filled
  const isFormValid = formData.name.trim() !== '' && 
                     formData.phone.trim() !== '' && 
                     formData.legalArea !== '' && 
                     formData.reason.trim() !== '';

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="bg-gradient-to-r from-gray-900 to-black text-white p-6 rounded-t-2xl relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors duration-200"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="flex items-center space-x-3 mb-2">
            <div className="w-10 h-10 bg-yellow-400 rounded-lg flex items-center justify-center">
              <Calendar className="w-6 h-6 text-black" />
            </div>
            <h2 className="text-2xl font-serif font-bold">Programează o Consultație</h2>
          </div>
          <p className="text-gray-300">Prin acest formular puteți solicita o programare pentru o consultație</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Personal Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 flex items-center">
              <User className="w-5 h-5 mr-2 text-yellow-600" />
              Informații Personale
            </h3>
            
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Nume complet *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition-colors duration-200"
                placeholder="Introduceți numele complet"
              />
            </div>
            
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                Telefon *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition-colors duration-200"
                placeholder="+40 xxx xxx xxx"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email (opțional)
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition-colors duration-200"
                placeholder="exemplu@email.com"
              />
            </div>
            
            <div>
              <label htmlFor="legalArea" className="block text-sm font-medium text-gray-700 mb-2">
                Domeniul Juridic *
              </label>
              <select
                id="legalArea"
                name="legalArea"
                value={formData.legalArea}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition-colors duration-200"
              >
                <option value="">Selectați domeniul</option>
                <option value="civil">Drept Civil</option>
                <option value="commercial">Drept Comercial</option>
                <option value="family">Dreptul Familiei</option>
                <option value="criminal">Drept Penal</option>
                <option value="real-estate">Imobiliare</option>
                <option value="labor">Dreptul Muncii</option>
                <option value="other">Altul</option>
              </select>
            </div>
          </div>

          {/* Message */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 flex items-center">
              <MessageSquare className="w-5 h-5 mr-2 text-yellow-600" />
              Detalii Consultație
            </h3>
            
            <div>
              <label htmlFor="reason" className="block text-sm font-medium text-gray-700 mb-2">
                Motiv consultație *
              </label>
              <textarea
                id="reason"
                name="reason"
                value={formData.reason}
                onChange={handleInputChange}
                required
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition-colors duration-200 resize-none"
                placeholder="Ex: divorț, succesiune, contracte, penal, etc."
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex flex-col sm:flex-row gap-4 pt-6">
            <button
              type="submit"
              disabled={!isFormValid || isSubmitting}
              className={`flex-1 font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 ${
                isFormValid && !isSubmitting
                  ? 'bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black transform hover:scale-105 hover:shadow-lg'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              <Calendar className="w-5 h-5" />
              <span>{isSubmitting ? 'Se trimite...' : 'Trimite Cererea'}</span>
            </button>
            
            <button
              type="button"
              onClick={onClose}
              className="flex-1 sm:flex-none border-2 border-gray-300 text-gray-700 hover:bg-gray-50 px-6 py-3 rounded-lg font-semibold transition-all duration-300"
            >
              Anulează
            </button>
          </div>
          
          {!isFormValid && !isSubmitting && (
            <p className="text-sm text-red-500 text-center mt-2">
              Vă rugăm să completați toate câmpurile marcate cu * pentru a trimite cererea.
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default ConsultationModal;