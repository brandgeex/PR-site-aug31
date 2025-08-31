
import React from 'react';

const ServiceCard: React.FC<{ title: string; description: string; imageUrl: string }> = ({ title, description, imageUrl }) => (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
        <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
        <div className="p-6">
            <h3 className="text-2xl font-semibold text-brand-dark mb-3 font-serif">{title}</h3>
            <p className="text-gray-600 font-sans leading-relaxed">{description}</p>
        </div>
    </div>
);

const Community: React.FC = () => {
  return (
    <div className="font-serif bg-brand-light">
      <header 
        className="h-80 bg-cover bg-center flex items-center justify-center text-white" 
        style={{ backgroundImage: `linear-gradient(rgba(26, 46, 43, 0.5), rgba(26, 46, 43, 0.5)), url(https://picsum.photos/1200/400?random=6)` }}
      >
        <div className="text-center p-6">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight">Community Living</h1>
          <p className="mt-2 text-xl md:text-2xl font-light">Managed with Excellence, Designed for Harmony</p>
        </div>
      </header>
      
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-semibold text-brand-dark mb-6">A Cohesive & Cared-For Environment</h2>
          <p className="text-lg text-gray-700 leading-relaxed font-sans max-w-4xl mx-auto">
            At Pines Ridge, community is paramount. Our bylaws and centralized management ensure aesthetic harmony and a peaceful living experience for all residents. We handle the details so you can focus on enjoying the unparalleled beauty of your surroundings.
          </p>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-semibold text-brand-dark mb-12 text-center">Features & Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard 
              title="24/7 Security" 
              description="A gated entrance and dedicated security personnel provide peace of mind for you and your family."
              imageUrl="https://picsum.photos/400/300?random=30"
            />
            <ServiceCard 
              title="Landscaping & Upkeep" 
              description="Our team maintains all common areas, ensuring the pristine beauty of the estate is preserved year-round."
              imageUrl="https://picsum.photos/400/300?random=31"
            />
            <ServiceCard 
              title="Utility Management" 
              description="We manage essential utilities including water, sewerage, and electricity to ensure reliable service."
              imageUrl="https://picsum.photos/400/300?random=32"
            />
             <ServiceCard 
              title="Snow & Rain Management" 
              description="Timely clearing of roads and drainage systems to ensure accessibility and safety during all seasons."
              imageUrl="https://picsum.photos/400/300?random=33"
            />
             <ServiceCard 
              title="Centralized Operations" 
              description="A single point of contact for all community-related needs, managed by the professional Pines Ridge Operations Team."
              imageUrl="https://picsum.photos/400/300?random=34"
            />
             <ServiceCard 
              title="Monthly Maintenance" 
              description="A transparent monthly fee covers all homeowner and apartment services, with a zero-excuse policy on quality."
              imageUrl="https://picsum.photos/400/300?random=35"
            />
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-4xl font-semibold text-brand-dark mb-8 text-center">Community Guidelines</h2>
          <div className="bg-white p-8 rounded-lg shadow-lg font-sans text-gray-700 space-y-4">
              <p><strong>• Aesthetic Harmony:</strong> Bylaws are in place to ensure all construction and modifications maintain the community's cohesive and elegant aesthetic.</p>
              <p><strong>• Peaceful Environment:</strong> No commercial or disruptive activities are permitted within the enclave, preserving its residential tranquility.</p>
              <p><strong>• Centralized Approvals:</strong> All external modifications require approval from the management, ensuring quality and consistency.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Community;
