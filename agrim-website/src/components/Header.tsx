import React, { useState } from 'react';
import imageSrc from "../assets/agrim logo transparent.png";
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
        <div className="flex items-center">
          {/* Logo with Link to Home */}
          <Link to="/">
            <img src={imageSrc} alt="Agrim PTE LTD Logo" className="h-10 mr-4"/>
          </Link>
          <Link to="/" className="font-bold text-xl text-gray-700">AGRIM PTE LTD</Link>
          <span className="ml-4 text-sm text-gray-500 hidden md:inline">Delivering performance with integrity</span>
        </div>
        
        {/* Hamburger menu button - visible only on mobile */}
        <button 
          className="md:hidden flex flex-col space-y-1.5"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className="block w-6 h-0.5 bg-gray-800"></span>
          <span className="block w-6 h-0.5 bg-gray-800"></span>
          <span className="block w-6 h-0.5 bg-gray-800"></span>
        </button>

        <div className="hidden md:flex items-center space-x-6">
          {/* Placeholder: Links might go here or below */}
        </div>
      </nav>
      
      {/* Desktop Navigation */}
      <nav className="bg-orange-500 text-white hidden md:block"> 
        <div className="container mx-auto px-6 py-2 flex justify-center items-center space-x-6 text-sm">
          <Link to="/about" className="hover:underline">About us</Link>
          <span className='text-gray-300'>•</span>
          <Link to="/products" className="hover:underline">Products</Link>
          <span className='text-gray-300'>•</span>
          <Link to="/exhibitions" className="hover:underline">Exhibitions</Link>
          <span className='text-gray-300'>•</span>
          <Link to="/gallery" className="hover:underline">Gallery</Link>
          <span className='text-gray-300'>•</span>
          <Link to="/contact" className="hover:underline">Contact us</Link>
        </div>
      </nav>
      
      {/* Mobile Navigation - shown when hamburger menu is clicked */}
      {isMenuOpen && (
        <nav className="bg-orange-500 text-white md:hidden">
          <div className="container mx-auto px-6 py-2 flex flex-col space-y-4 text-sm">
            <Link to="/about" className="hover:underline py-2">About us</Link>
            <Link to="/products" className="hover:underline py-2">Products</Link>
            <Link to="/exhibitions" className="hover:underline py-2">Exhibitions</Link>
            <Link to="/gallery" className="hover:underline py-2">Gallery</Link>
            <Link to="/contact" className="hover:underline py-2">Contact us</Link>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header; 