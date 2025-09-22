import React, { useState } from 'react';
import { Star, Send, X } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface TestimonialFormProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

const TestimonialForm: React.FC<TestimonialFormProps> = ({ isOpen, onClose, onSuccess }) => {
  const [formData, setFormData] = useState({
    name: '',
    content: '',
    rating: 5
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hoveredRating, setHoveredRating] = useState(0);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleRatingClick = (rating: number) => {
    setFormData(prev => ({
      ...prev,
      rating
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    

    setIsSubmitting(true);
    
    try {
      const { error } = await supabase
        .from('reviews')
        .insert([
          {
            name: formData.name,
            content: formData.content,
            rating: formData.rating,
            is_active: false // Will be reviewed before being made active
          }
        ]);

      if (error) {
        throw error;
      }

      alert('Mulțumim pentru review! Va fi publicat după verificare.');
      setFormData({ name: '', content: '', rating: 0 });
      onSuccess();
      onClose();
    } catch (error) {
      console.error('Error submitting testimonial:', error);
      alert('A apărut o eroare. Vă rugăm să încercați din nou.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Check if all required fields are filled
  const isFormValid = formData.name.trim() !== '' && 
                     formData.content.trim() !== '' && 
                     formData.rating > 0;

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black p-6 rounded-t-2xl relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 bg-black/10 hover:bg-black/20 rounded-full flex items-center justify-center transition-colors duration-200"
          >
            <X className="w-5 h-5" />
          </button>
          
          <h2 className="text-2xl font-serif font-bold mb-2">Lăsați un Review</h2>
          <p className="text-black/80">Împărtășiți experiența dumneavoastră</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Name Field */}
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

          {/* Rating Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Evaluare *
            </label>
            <div className="flex space-x-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => handleRatingClick(star)}
                  onMouseEnter={() => setHoveredRating(star)}
                  onMouseLeave={() => setHoveredRating(0)}
                  className="p-1 transition-transform duration-200 hover:scale-110"
                >
                  <Star
                    className={`w-8 h-8 transition-colors duration-200 ${
                      star <= (hoveredRating || formData.rating)
                        ? 'text-yellow-400 fill-current'
                        : 'text-gray-300'
                    }`}
                  />
                </button>
              ))}
            </div>
            <p className="text-sm text-gray-600 mt-2">
              Ați selectat {formData.rating} din 5 stele
            </p>
          </div>

          {/* Message Field */}
          <div>
            <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-2">
              Mesajul dumneavoastră *
            </label>
            <textarea
              id="content"
              name="content"
              value={formData.content}
              onChange={handleInputChange}
              required
              rows={5}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition-colors duration-200 resize-none"
              placeholder="Descrieți experiența dumneavoastră cu serviciile noastre..."
            />
          </div>

          {/* Submit Button */}
          <div className="flex flex-col space-y-3 pt-4">
            <button
              type="submit"
              disabled={isSubmitting || !isFormValid}
              className={`w-full font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 ${
                isFormValid && !isSubmitting
                  ? 'bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black transform hover:scale-105 hover:shadow-lg'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              <Send className="w-5 h-5" />
              <span>{isSubmitting ? 'Se trimite...' : 'Trimite review-ul'}</span>
            </button>
            
            {!isFormValid && (
              <p className="text-xs text-red-500 text-center">
                Vă rugăm să completați toate câmpurile pentru a trimite review-ul.
              </p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default TestimonialForm;