
import React from 'react';

const ZoneCard: React.FC<{ title: string; status: string; children: React.ReactNode }> = ({ title, status, children }) => (
    <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-brand-accent">
        <span className={`inline-block px-3 py-1 text-sm font-semibold rounded-full mb-3 ${status === 'Active' ? 'bg-green-200 text-green-800' : 'bg-yellow-200 text-yellow-800'}`}>{status}</span>
        <h3 className="text-3xl font-semibold text-brand-dark mb-4 font-serif">{title}</h3>
        <div className="text-gray-600 font-sans space-y-2">{children}</div>
    </div>
);

const MasterPlan: React.FC = () => {
  return (
    <div className="font-serif bg-brand-light">
      <header 
        className="h-80 bg-cover bg-center flex items-center justify-center text-white" 
        style={{ backgroundImage: `linear-gradient(rgba(26, 46, 43, 0.5), rgba(26, 46, 43, 0.5)), url(https://picsum.photos/1200/400?random=3)` }}
      >
        <div className="text-center p-6">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight">The Master Plan</h1>
          <p className="mt-2 text-xl md:text-2xl font-light">A Phased Approach to Community Development</p>
        </div>
      </header>

      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-semibold text-brand-dark mb-6">A Vision Unfolding</h2>
          <p className="text-lg text-gray-700 leading-relaxed font-sans max-w-4xl mx-auto">
            The Pines Ridge master plan is a carefully considered design, dividing our 170-kanal estate into four distinct zones. This phased development strategy ensures that infrastructure and amenities grow with the community, maintaining our high standards of quality and tranquility throughout the process.
          </p>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
            <div className="lg:flex lg:items-center lg:gap-12">
                <div className="lg:w-1/2">
                    <img src="https://picsum.photos/800/600?random=10" alt="Master Plan Visual" className="rounded-lg shadow-2xl w-full h-auto object-cover"/>
                </div>
                <div className="lg:w-1/2 mt-10 lg:mt-0">
                    <h2 className="text-4xl font-semibold text-brand-dark mb-8">Zones & Phases</h2>
                    <div className="space-y-8">
                        <ZoneCard title="Zone 1 – Villas" status="Phase 1: Active">
                            <p>High-end residential villas on spacious 600 sq. yd. plots. Features modern and regional aesthetics, with customization available within the approved design framework.</p>
                        </ZoneCard>
                         <ZoneCard title="Zone 2 – Apartments & Hotel" status="Future Development">
                            <p>Phase 1 includes a multi-family apartment building. A future phase will introduce a luxury boutique hotel. Shared facilities include a gym, food services, and landscaped courtyards.</p>
                        </ZoneCard>
                        <ZoneCard title="Zone 3 – TBD" status="Future Development">
                            <p>Reserved for potential residential plots, townhouses, or a community park. The final use is currently under planning to best serve the community.</p>
                        </ZoneCard>
                        <ZoneCard title="Zone 4 – TBD" status="Future Development">
                            <p>Reserved for potential commercial/community services or an eco-resort, offering long-term development potential for the estate.</p>
                        </ZoneCard>
                    </div>
                </div>
            </div>
        </div>
      </section>
    </div>
  );
};

export default MasterPlan;
