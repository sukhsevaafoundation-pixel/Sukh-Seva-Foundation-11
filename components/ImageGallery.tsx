import React from 'react';
import { EyeIcon } from './Icons';
import { ImageData } from './ImageModal';

interface ImageGalleryProps {
    images: ImageData[];
    categories: string[];
    activeFilter: string;
    onFilterChange: (filter: string) => void;
    onImageClick: (index: number) => void;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images, categories, activeFilter, onFilterChange, onImageClick }) => {
    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
                        Glimpses of Our <span className="text-indigo-700">Journey</span>
                    </h2>
                    <p className="mt-4 text-lg text-gray-600">
                        A collection of moments that capture the heart of our work and the impact of your support.
                    </p>
                </div>
                
                <div className="mt-12 flex justify-center flex-wrap gap-2 sm:gap-4">
                    {categories.map(category => (
                        <button
                            key={category}
                            onClick={() => onFilterChange(category)}
                            className={`px-4 sm:px-6 py-2 rounded-full font-semibold text-sm sm:text-base transition-all duration-300 ${
                                activeFilter === category
                                    ? 'bg-indigo-600 text-white shadow-md'
                                    : 'bg-white text-gray-700 hover:bg-gray-200'
                            }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
                    {images.map((image, index) => (
                        <div
                            key={index}
                            onClick={() => onImageClick(index)}
                            className="group relative aspect-square overflow-hidden rounded-xl shadow-lg cursor-pointer transform hover:scale-105 transition-transform duration-300"
                            role="button"
                            tabIndex={0}
                            onKeyDown={(e) => { if (e.key === 'Enter') onImageClick(index); }}
                        >
                            <img src={image.src} alt={image.alt} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 text-center">
                                <EyeIcon className="w-10 h-10 text-white mb-2" />
                                <p className="text-white font-semibold">{image.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ImageGallery;
