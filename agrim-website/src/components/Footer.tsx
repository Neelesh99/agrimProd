import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-orange-500 text-white py-12 px-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Navigation Links */}
        <div className="grid grid-cols-2 gap-4 text-left">
          {/* Column 1 */}
          <ul className="space-y-2">
            <li><Link to="/" className="hover:underline">Home</Link></li>
            <li><Link to="/about" className="hover:underline">About us</Link></li>
            <li><Link to="/contact" className="hover:underline">Contact us</Link></li>
          </ul>
          {/* Column 2 */}
          <ul className="space-y-2">
            <li><a href="#products" className="hover:underline">Products</a></li>
            <li><a href="#exhibitions" className="hover:underline">Exhibitions</a></li>
            <li><a href="#gallery" className="hover:underline">Gallery</a></li>
          </ul>
        </div>

        {/* Empty Column for spacing (optional) - Moved to middle */}
        <div>
          {/* Can add logo or copyright here if needed */}
        </div>

        {/* Contact Info - Moved to right */}
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold mb-1">Follow us</h4>
            {/* Placeholder Icon */}
            <a href="#" className="inline-flex items-center hover:underline">
              <span className="mr-2">[in]</span> {/* Placeholder for LinkedIn icon */}
              <span>linkedin.com/company/agrimltd/</span> { /* TODO: Make actual link */} 
            </a>
          </div>
          <div>
            <h4 className="font-semibold mb-1">Email us</h4>
            {/* Placeholder Icon */}
            <a href="mailto:trade@agrimltd.com" className="inline-flex items-center hover:underline">
              <span className="mr-2">[@]</span> {/* Placeholder for Email icon */}
              <span>trade@agrimltd.com</span>
            </a>
          </div>
          <div>
            <h4 className="font-semibold mb-1">Whatsapp us</h4>
            {/* Placeholder Icon */}
            <a href="https://wa.me/628116000625" target="_blank" rel="noopener noreferrer" className="inline-flex items-center hover:underline">
              <span className="mr-2">[wa]</span> {/* Placeholder for Whatsapp icon */}
              <span>+62 811 6000 625</span>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer; 