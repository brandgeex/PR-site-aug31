
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark text-brand-light font-sans">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <h3 className="text-xl font-serif font-bold mb-4">Pines Ridge Estate</h3>
            <p className="text-sm text-gray-300">
              An exclusive, private, eco-sensitive community in the heart of Galiyat.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/#/about" className="hover:text-brand-accent">About Us</a></li>
              <li><a href="/#/master-plan" className="hover:text-brand-accent">Master Plan</a></li>
              <li><a href="/#/contact" className="hover:text-brand-accent">Inquire Now</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p className="text-sm text-gray-300">Kuza Gali, Abbottabad Road, Galiyat</p>
            <p className="text-sm text-gray-300">info@pinesridge.com.pk</p>
            <div className="flex justify-center md:justify-start space-x-4 mt-4">
              {/* Add social links here */}
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Pines Ridge Estate. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
