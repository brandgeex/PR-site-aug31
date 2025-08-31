
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    message: '',
  });
  const [formStatus, setFormStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('Sending...');
    // In a real app, you would integrate with an email service here.
    setTimeout(() => {
      setFormStatus('Thank you for your inquiry! We will be in touch shortly.');
      setFormData({ name: '', email: '', phone: '', city: '', message: '' });
    }, 1500);
  };

  return (
    <div className="font-serif bg-brand-light">
      <header 
        className="h-80 bg-cover bg-center flex items-center justify-center text-white" 
        style={{ backgroundImage: `linear-gradient(rgba(26, 46, 43, 0.5), rgba(26, 46, 43, 0.5)), url(https://picsum.photos/1200/400?random=7)` }}
      >
        <div className="text-center p-6">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight">Contact Us</h1>
          <p className="mt-2 text-xl md:text-2xl font-light">Begin Your Journey to Pines Ridge</p>
        </div>
      </header>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="font-sans">
              <h2 className="text-4xl font-serif font-semibold text-brand-dark mb-4">Make an Inquiry</h2>
              <p className="text-gray-700 mb-8">
                We invite you to learn more about this exclusive opportunity. Please fill out the form below, and a representative from Pines Ridge will contact you for a private consultation.
              </p>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} required className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-accent"/>
                <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} required className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-accent"/>
                <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} required className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-accent"/>
                <input type="text" name="city" placeholder="City" value={formData.city} onChange={handleChange} required className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-accent"/>
                <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} rows={5} required className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-accent"></textarea>
                <button type="submit" className="w-full bg-brand-accent hover:bg-brand-accent-dark text-white font-bold py-3 px-6 rounded-md transition-all duration-300">
                  Submit Inquiry
                </button>
                {formStatus && <p className="mt-4 text-center">{formStatus}</p>}
              </form>
            </div>
            <div>
               <div className="bg-white p-8 rounded-lg shadow-lg">
                  <h3 className="text-2xl font-serif font-semibold text-brand-dark mb-6">Contact Information</h3>
                  <div className="font-sans text-gray-700 space-y-4">
                    <p><strong>Location:</strong> Kuza Gali, Abbottabad Road, Galiyat</p>
                    <p><strong>Email:</strong> sales@pinesridge.com.pk</p>
                    <p><strong>Phone / WhatsApp:</strong> +92 300 1234567</p>
                  </div>
                  <div className="mt-6">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.717612711158!2d73.38719261521501!3d34.05101998060638!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38de38980a3e0f9b%3A0xc3b843f876d75c6!2sKuza%20Gali!5e0!3m2!1sen!2s!4v1620055000000"
                      width="100%"
                      height="300"
                      style={{ border: 0 }}
                      allowFullScreen={false}
                      loading="lazy"
                      title="Project Location"
                      className="rounded-md"
                    ></iframe>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
