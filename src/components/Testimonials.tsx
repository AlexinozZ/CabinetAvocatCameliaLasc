import React, { useState } from 'react';
import { useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Plus } from 'lucide-react';
import { supabase, type Review } from '../lib/supabase';
import TestimonialForm from './TestimonialForm';

interface TestimonialsProps {
  id?: string;
}

const Testimonials: React.FC<TestimonialsProps> = ({ id }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [testimonials, setTestimonials] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isFormOpen, setIsFormOpen] = useState(false);

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const fetchTestimonials = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('reviews')
        .select('*')
        .eq('is_active', true)
        .order('created_at', { ascending: false });

      if (error) {
        throw error;
      }

      setTestimonials(data || []);
    } catch (err) {
      console.error('Error fetching testimonials:', err);
      setError('Nu am putut încărca mărturiile clienților.');
    } finally {
      setLoading(false);
    }
  };
  
  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };
  
  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const handleFormSuccess = () => {
    fetchTestimonials(); // Refresh testimonials after new submission
  };

  if (loading) {
    return (
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-xl text-gray-600">Se încarcă mărturiile clienților...</div>
        </div>
      </section>
    );
  }
  
  return (
    <section id={id} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-gray-900 mb-4">
            Ce spun <span className="text-yellow-600">clienții</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nu luați doar cuvântul nostru. Iată ce au de spus clienții noștri mulțumiți 
            despre experiența lor cu serviciile noastre juridice.
          </p>
          
          {/* Add Review Button */}
          <div className="mt-8">
            <button
              onClick={() => setIsFormOpen(true)}
              className="bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center space-x-2 mx-auto"
            >
              <Plus className="w-5 h-5" />
              <span>Lăsați un Review</span>
            </button>
          </div>
        </div>
        
        {/* Testimonial Carousel */}
        {testimonials.length > 0 ? (
          <div className="relative max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 sm:p-12 shadow-xl">
              {/* Quote Icon */}
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mx-auto">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                  </svg>
                </div>
              </div>
              
              {/* Testimonial Content */}
              <div className="text-center space-y-6">
                {/* Stars */}
                <div className="flex justify-center space-x-1">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                {/* Content */}
                <blockquote className="text-xl sm:text-2xl text-gray-700 leading-relaxed italic">
                  "{testimonials[currentIndex].content}"
                </blockquote>
                
                {/* Author */}
                <div className="space-y-2">
                  <div className="text-lg font-bold text-gray-900">
                    {testimonials[currentIndex].name}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Navigation */}
            <div className="flex justify-center items-center space-x-4 mt-8">
              <button
                onClick={prevTestimonial}
                className="w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-yellow-50 hover:shadow-xl transition-all duration-300 group"
              >
                <ChevronLeft className="w-6 h-6 text-gray-600 group-hover:text-yellow-600" />
              </button>
              
              {/* Dots Indicator */}
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentIndex 
                        ? 'bg-yellow-400 w-6' 
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>
                
              <button
                onClick={nextTestimonial}
                className="w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-yellow-50 hover:shadow-xl transition-all duration-300 group"
              >
                <ChevronRight className="w-6 h-6 text-gray-600 group-hover:text-yellow-600" />
              </button>
            </div>
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Star className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Încă nu avem testimoniale
            </h3>
            <p className="text-gray-600 mb-6">
              Fiți primul care lasă un review despre serviciile noastre!
            </p>
          </div>
        )}
        
        {/* Testimonial Form Modal */}
        <TestimonialForm 
          isOpen={isFormOpen}
          onClose={() => setIsFormOpen(false)}
          onSuccess={handleFormSuccess}
        />
      </div>
    </section>
  );
};

export default Testimonials;