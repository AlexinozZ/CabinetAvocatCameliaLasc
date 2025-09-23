import React from 'react';
import { CheckCircle, Star, X } from 'lucide-react';

interface ThankYouModalProps {
  isOpen: boolean;
  onClose: () => void;
  reviewerName: string;
  rating: number;
}

const ThankYouModal: React.FC<ThankYouModalProps> = ({ isOpen, onClose, reviewerName, rating }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden">
        {/* Header with success icon */}
        <div className="bg-gradient-to-r from-green-400 to-green-500 text-white p-8 text-center relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors duration-200"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-12 h-12 text-white" />
          </div>
          
          <h2 className="text-2xl font-serif font-bold mb-2">Mulțumim!</h2>
          <p className="text-white/90">Review-ul dumneavoastră a fost publicat cu succes</p>
        </div>

        {/* Content */}
        <div className="p-8 text-center space-y-6">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900">
              Vă mulțumim, {reviewerName}!
            </h3>
            
            <div className="flex justify-center space-x-1 mb-4">
              {[...Array(rating)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
              ))}
            </div>
            
            <p className="text-gray-600 leading-relaxed">
              Review-ul dumneavoastră cu {rating} {rating === 1 ? 'stea' : 'stele'} a fost publicat 
              și va ajuta alți clienți să înțeleagă calitatea serviciilor noastre juridice.
            </p>
            
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <p className="text-yellow-800 text-sm">
                <strong>💡 Știați că:</strong> Feedback-ul dumneavoastră ne ajută să îmbunătățim 
                continuu serviciile juridice oferite clienților noștri.
              </p>
            </div>
          </div>

          <div className="space-y-3">
            <button
              onClick={onClose}
              className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Perfect! Închide
            </button>
            
            <p className="text-xs text-gray-500">
              Review-ul dumneavoastră este acum vizibil în secțiunea "Ce spun clienții"
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYouModal;