
import React from 'react';

const GalleryImage: React.FC<{ src: string; alt: string }> = ({ src, alt }) => (
    <div className="overflow-hidden rounded-lg shadow-lg group">
        <img 
            src={src} 
            alt={alt} 
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500 ease-in-out"
        />
    </div>
);

const Gallery: React.FC = () => {
  const images = [
    { src: 'https://picsum.photos/600/800?random=20', alt: 'Site surroundings' },
    { src: 'https://picsum.photos/600/400?random=21', alt: 'Architectural concept' },
    { src: 'https://picsum.photos/600/400?random=22', alt: 'Natural landscape' },
    { src: 'https://picsum.photos/600/800?random=23', alt: 'View from a plot' },
    { src: 'https://picsum.photos/600/400?random=24', alt: 'Lush greenery' },
    { src: 'https://picsum.photos/600/400?random=25', alt: 'Winter at Pines Ridge' },
    { src: 'https://picsum.photos/600/400?random=26', alt: 'Road infrastructure' },
    { src: 'https://picsum.photos/600/800?random=27', alt: 'Community area concept' },
    { src: 'https://picsum.photos/600/400?random=28', alt: 'Sunset over the hills' },
  ];

  return (
    <div className="font-serif bg-brand-light">
      <header 
        className="h-80 bg-cover bg-center flex items-center justify-center text-white" 
        style={{ backgroundImage: `linear-gradient(rgba(26, 46, 43, 0.5), rgba(26, 46, 43, 0.5)), url(https://picsum.photos/1200/400?random=5)` }}
      >
        <div className="text-center p-6">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight">Gallery</h1>
          <p className="mt-2 text-xl md:text-2xl font-light">A Glimpse into the Pines Ridge Experience</p>
        </div>
      </header>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <p className="text-lg text-gray-700 leading-relaxed font-sans max-w-4xl mx-auto mb-12 text-center">
            Explore high-resolution images of the Pines Ridge site, its breathtaking surroundings, and our architectural concepts. Visualize the serenity and luxury that awaits.
          </p>
          <div className="columns-2 md:columns-3 gap-4">
            {images.map((image, index) => (
              <div key={index} className="mb-4 break-inside-avoid">
                <GalleryImage src={image.src} alt={image.alt} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
