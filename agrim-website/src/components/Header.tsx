import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
        <div className="flex items-center">
          {/* Logo with Link to Home */}
          <Link to="/">
            <img src="https://via.placeholder.com/150x50?text=Agrim+Logo" alt="Agrim PTE LTD Logo" className="h-10 mr-4"/>
          </Link>
          <Link to="/" className="font-bold text-xl text-gray-700">AGRIM PTE LTD</Link>
          <span className="ml-4 text-sm text-gray-500 hidden md:inline">Delivering performance with integrity</span>
        </div>
        <div className="hidden md:flex items-center space-x-6">
          {/* Placeholder: Links might go here or below */}
        </div>
      </nav>
      <nav className="bg-orange-500 text-white"> {/* Second Nav Bar */}
        <div className="container mx-auto px-6 py-2 flex justify-center items-center space-x-6 text-sm">
          <Link to="/about" className="hover:underline">About us</Link>
          <span className='text-gray-300'>•</span>
          <a href="/products" className="hover:underline">Products</a>
          <span className='text-gray-300'>•</span>
          <a href="/exhibitions" className="hover:underline">Exhibitions</a>
          <span className='text-gray-300'>•</span>
          <a href="/gallery" className="hover:underline">Gallery</a>
          <span className='text-gray-300'>•</span>
          <Link to="/contact" className="hover:underline">Contact us</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header; 