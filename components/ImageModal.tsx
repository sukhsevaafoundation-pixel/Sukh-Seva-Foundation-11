import React, { useEffect } from 'react';
import { CloseIcon, ChevronLeftIcon, ChevronRightIcon } from './Icons';

export interface ImageData {
  src: string;
  alt: string;
  category: string;
  description: string;
}

interface ImageModalProps {
  image: ImageData | null;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
  hasNext: boolean;
  hasPrev: boolean;
}

const ImageModal: React.FC<ImageModalProps> = ({ image, onClose, onNext, onPrev, hasNext, hasPrev }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight' && hasNext) onNext();
      if (e.key === 'ArrowLeft' && hasPrev) onPrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [onClose, onNext, onPrev, hasNext, hasPrev]);

  if (!image) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/80 z-[100] flex items-center justify-center p-4 animate-fadeIn"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="image-modal-title"
    >
      <div 
        className="relative bg-white rounded-lg shadow-2xl w-full max-w-4xl max-h-[90vh] flex flex-col animate-scaleIn"
        onClick={e => e.stopPropagation()}
      >
        <div className="p-4 flex-shrink-0 border-b flex justify-between items-center">
            <div>
                <h3 id="image-modal-title" className="text-lg font-bold text-gray-900">{image.description}</h3>
                <p className="text-sm text-indigo-600 font-semibold">{image.category}</p>
            </div>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-900" aria-label="Close modal">
            <CloseIcon className="w-6 h-6" />
          </button>
        </div>
        
        <div className="flex-grow p-4 overflow-hidden flex items-center justify-center">
          <img src={image.src} alt={image.alt} className="max-w-full max-h-full object-contain" />
        </div>
      </div>

      {hasPrev && (
        <button 
          onClick={(e) => { e.stopPropagation(); onPrev(); }}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 text-white p-3 rounded-full hover:bg-white/40 transition-colors"
          aria-label="Previous image"
        >
          <ChevronLeftIcon className="w-6 h-6" />
        </button>
      )}

      {hasNext && (
        <button 
          onClick={(e) => { e.stopPropagation(); onNext(); }}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 text-white p-3 rounded-full hover:bg-white/40 transition-colors"
          aria-label="Next image"
        >
          <ChevronRightIcon className="w-6 h-6" />
        </button>
      )}
        <style>{`
          @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
          @keyframes scaleIn { from { transform: scale(0.95); opacity: 0; } to { transform: scale(1); opacity: 1; } }
          .animate-fadeIn { animation: fadeIn 0.2s ease-out forwards; }
          .animate-scaleIn { animation: scaleIn 0.2s ease-out forwards; }
        `}</style>
    </div>
  );
};

export default ImageModal;
