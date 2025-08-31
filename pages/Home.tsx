import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="font-serif">
      {/* Hero Section */}
      <section 
        className="h-[70vh] bg-cover bg-center flex items-center justify-center text-white" 
        style={{ backgroundImage: `linear-gradient(rgba(26, 46, 43, 0.6), rgba(26, 46, 43, 0.6)), url(https://images.unsplash.com/photo-1580137189272-c97691420368?q=80&w=1600&auto=format&fit=crop)` }}
      >
        <div className="text-center p-6">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">Pines Ridge Estate</h1>
          <p className="mt-4 text-xl md:text-2xl font-light">Experience Serenity. Embrace Luxury.</p>
          <Link 
            to="/gallery" 
            className="mt-8 inline-block bg-brand-accent hover:bg-brand-accent-dark text-white font-sans font-bold py-3 px-8 rounded-md transition-all duration-300"
          >
            Explore the Vision
          </Link>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-brand-light">
        <div className="container mx-auto px-6 text-center max-w-4xl">
          <h2 className="text-4xl font-semibold text-brand-dark mb-6">A Sanctuary in the Galiyat Highlands</h2>
          <p className="text-lg text-gray-700 leading-relaxed font-sans">
            Pines Ridge Enclave is more than a residence; it's a legacy. A flagship gated community designed for those who seek peace, privacy, and a profound connection with nature. Our vision is to create an exclusive, eco-sensitive haven that sets a new benchmark for highland living.
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div className="p-4">
              <h3 className="text-2xl font-semibold mb-3 text-brand-dark">Exclusive & Private</h3>
              <p className="text-gray-600 font-sans">A gated community with carefully selected, non-speculative buyers ensures a harmonious and secure environment.</p>
            </div>
            <div className="p-4">
              <h3 className="text-2xl font-semibold mb-3 text-brand-dark">Sustainable by Design</h3>
              <p className="text-gray-600 font-sans">Embracing eco-sensitive living with a deep respect for nature, ensuring long-term sustainability and harmony.</p>
            </div>
            <div className="p-4">
              <h3 className="text-2xl font-semibold mb-3 text-brand-dark">Uncompromising Quality</h3>
              <p className="text-gray-600 font-sans">From infrastructure to home construction, we employ a zero-excuse approach to quality and service excellence.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
       <section className="py-20 bg-brand-dark text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-semibold mb-4">Discover Your Future Home</h2>
          <p className="text-lg mb-8 font-sans">Learn more about our master plan, available villas, and community guidelines.</p>
          <Link 
            to="/contact" 
            className="bg-white text-brand-dark hover:bg-gray-200 font-sans font-bold py-3 px-8 rounded-md transition-all duration-300"
          >
            Make an Inquiry
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;