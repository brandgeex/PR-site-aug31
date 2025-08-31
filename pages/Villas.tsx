
import React from 'react';
import { Link } from 'react-router-dom';

const FeatureItem: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <li className="flex items-start">
        <svg className="w-6 h-6 text-green-600 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
        <span>{children}</span>
    </li>
);

const Villas: React.FC = () => {
  return (
    <div className="font-serif bg-brand-light">
      <header 
        className="h-80 bg-cover bg-center flex items-center justify-center text-white" 
        style={{ backgroundImage: `linear-gradient(rgba(26, 46, 43, 0.5), rgba(26, 46, 43, 0.5)), url(https://picsum.photos/1200/400?random=4)` }}
      >
        <div className="text-center p-6">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight">Plots & Villas</h1>
          <p className="mt-2 text-xl md:text-2xl font-light">Craft Your Dream Mountain Retreat</p>
        </div>
      </header>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-brand-accent font-bold font-sans">PHASE 1: ACTIVE</span>
              <h2 className="text-4xl font-semibold text-brand-dark my-4">Exclusive Villa Plots</h2>
              <p className="text-gray-700 leading-relaxed font-sans mb-6">
                Zone 1 of Pines Ridge Enclave offers a limited selection of premium residential plots, providing the perfect canvas for your high-end villa. Each plot is designed to maximize views, privacy, and connection with the natural landscape.
              </p>
              <ul className="space-y-4 text-gray-700 font-sans">
                <FeatureItem><strong>Plot Size:</strong> 600 sq. yd. (1 Kanal)</FeatureItem>
                <FeatureItem><strong>Purpose:</strong> High-end, single-family residential villas.</FeatureItem>
                <FeatureItem><strong>Design Framework:</strong> A blend of modern and regional aesthetics, compliant with GDA bylaws (2-3 stories).</FeatureItem>
                <FeatureItem><strong>Customization:</strong> Freedom to customize within the approved design framework to reflect your personal style.</FeatureItem>
                <FeatureItem><strong>Timeline:</strong> Construction of pilot villas begins in April of the next season.</FeatureItem>
              </ul>
            </div>
            <div>
              <img src="https://picsum.photos/800/650?random=11" alt="Villa plot" className="rounded-lg shadow-2xl w-full h-auto object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-semibold text-brand-dark mb-6">Design Concepts</h2>
          <p className="text-lg text-gray-700 leading-relaxed font-sans max-w-4xl mx-auto mb-12">
            We provide sample layouts and villa design concepts that can be previewed or downloaded. These serve as inspiration, showcasing how modern luxury can seamlessly integrate with the rugged beauty of the Galiyat region.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="border p-4 rounded-lg hover:shadow-xl transition-shadow">
              <img src="https://picsum.photos/500/400?random=12" alt="Villa Concept 1" className="rounded-md mb-4"/>
              <h3 className="text-2xl font-semibold text-brand-dark">The Alpine Modern</h3>
            </div>
             <div className="border p-4 rounded-lg hover:shadow-xl transition-shadow">
              <img src="https://picsum.photos/500/400?random=13" alt="Villa Concept 2" className="rounded-md mb-4"/>
              <h3 className="text-2xl font-semibold text-brand-dark">The Galiyat Heritage</h3>
            </div>
             <div className="border p-4 rounded-lg hover:shadow-xl transition-shadow">
              <img src="https://picsum.photos/500/400?random=14" alt="Villa Concept 3" className="rounded-md mb-4"/>
              <h3 className="text-2xl font-semibold text-brand-dark">The Ridgeview Contemporary</h3>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-brand-dark text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-semibold mb-4">Ready to Build Your Legacy?</h2>
          <p className="text-lg mb-8 font-sans">Plot availability is limited. Contact us for a private consultation and to learn more about our transparent sales process.</p>
          <Link 
            to="/contact" 
            className="bg-white text-brand-dark hover:bg-gray-200 font-sans font-bold py-3 px-8 rounded-md transition-all duration-300"
          >
            Inquire About Availability
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Villas;
