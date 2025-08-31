
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { NAV_LINKS } from '../constants';
import { MenuIcon, XIcon } from './IconComponents';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const activeLinkStyle = {
    textDecoration: 'underline',
    textUnderlineOffset: '8px',
    color: '#1a2e2b',
  };

  return (
    <header className="sticky top-0 z-50 bg-brand-light/80 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <NavLink to="/" className="text-2xl font-serif font-bold text-brand-dark tracking-wider">
          Pines Ridge
        </NavLink>

        <nav className="hidden md:flex items-center space-x-8">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className="text-brand-dark hover:text-brand-accent transition-colors duration-300 font-sans"
              style={({ isActive }) => (isActive ? activeLinkStyle : {})}
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        <div className="md:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-brand-light shadow-lg">
          <nav className="flex flex-col items-center space-y-4 py-4">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className="text-brand-dark hover:text-brand-accent transition-colors duration-300 font-sans text-lg"
                onClick={() => setIsMobileMenuOpen(false)}
                style={({ isActive }) => (isActive ? activeLinkStyle : {})}
              >
                {link.name}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
