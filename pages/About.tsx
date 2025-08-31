
import React from 'react';

const ValueCard: React.FC<{ title: string; description: string }> = ({ title, description }) => (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
        <h3 className="text-2xl font-semibold text-brand-dark mb-3 font-serif">{title}</h3>
        <p className="text-gray-600 font-sans leading-relaxed">{description}</p>
    </div>
);

const About: React.FC = () => {
  return (
    <div className="font-serif bg-brand-light">
      <header 
        className="h-80 bg-cover bg-center flex items-center justify-center text-white" 
        style={{ backgroundImage: `linear-gradient(rgba(26, 46, 43, 0.5), rgba(26, 46, 43, 0.5)), url(https://picsum.photos/1200/400?random=2)` }}
      >
        <div className="text-center p-6">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight">Our Philosophy</h1>
          <p className="mt-2 text-xl md:text-2xl font-light">Inspired by Nature, Built for Longevity</p>
        </div>
      </header>

      <section className="py-20">
        <div className="container mx-auto px-6 max-w-4xl text-center">
            <h2 className="text-4xl font-semibold text-brand-dark mb-6">The Vision Behind Pines Ridge</h2>
            <p className="text-lg text-gray-700 leading-relaxed font-sans">
              Pines Ridge Enclave was born from the guiding philosophy of our reference project, Windy Hills. We aim to create a highland residential community that embodies integrity, quality, and a profound respect for the natural environment. Our vision is to offer a tranquil and exclusive living experience for discerning individuals and families who value peace, privacy, and community harmony.
            </p>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
              <h2 className="text-4xl font-semibold text-brand-dark mb-12 text-center">Our Core Values</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <ValueCard title="Integrity & Transparency" description="We believe in open communication and honest practices in every phase of development, from plot sales to community management." />
                  <ValueCard title="Quality & Longevity" description="Our commitment is to build not just for today, but for generations to come, using the highest standards of construction and materials." />
                  <ValueCard title="Privacy & Community" description="We foster a close-knit community while ensuring that each resident enjoys the personal space and privacy they desire." />
                  <ValueCard title="Respect for Nature" description="Sustainability is at our core. We design and build in harmony with the surrounding landscape, preserving its natural beauty." />
                  <ValueCard title="Service & Accountability" description="Our dedicated operations team ensures a seamless living experience with a zero-excuse approach to service and maintenance." />
                  <ValueCard title="Exclusivity" description="We carefully select residents who share our vision, ensuring a community of like-minded individuals, not speculative investors." />
              </div>
          </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6 max-w-4xl text-center">
            <h2 className="text-4xl font-semibold text-brand-dark mb-6">Founder's Message</h2>
            <blockquote className="text-xl italic text-gray-700 leading-relaxed font-sans border-l-4 border-brand-accent pl-6">
              "We didn't just want to build houses; we wanted to create a sanctuary. A place where families can connect with nature and each other, building memories that last a lifetime. Pines Ridge is the culmination of that dream."
            </blockquote>
        </div>
      </section>
    </div>
  );
};

export default About;
