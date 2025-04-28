import whatsappLogo from "../assets/whatsapp.png"
import linkedInLogo from "../assets/original/Linkedin_circle_black-512.png"
import emailLogo from "../assets/original/Pasted_Graphic-removebg-preview.png"
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
            <li><Link to="/products" className="hover:underline">Products</Link></li>
            <li><Link to="/exhibitions" className="hover:underline">Exhibitions</Link></li>
            <li><Link to="/gallery" className="hover:underline">Gallery</Link></li>
          </ul>
        </div>

        {/* Empty Column for spacing (optional) - Moved to middle */}
        <div>
          {/* Can add logo or copyright here if needed */}
        </div>

        {/* Contact Info - Moved to right */}
        <div className="space-y-8 text-center">
        <div className="flex flex-row w-56 justify-between">
                        <div className="text-xl text-white self-center">
                            Follow Us
                        </div>
                        <a href="https://www.linkedin.com/company/agrimltd/">
                            <img className="h-12 cursor-pointer" src={whatsappLogo}/>
                        </a>
                    </div>
                    <div className="flex flex-row w-56 justify-between">
                        <div className="text-xl text-white self-center">
                            Email Us
                        </div>
                        <a href="mailto:trade@agrimltd.com">
                            <img className="h-12 cursor-pointer" src={emailLogo}/>
                        </a>
                    </div>
                    <div className="flex flex-row w-56 justify-between">
                        <div className="text-xl text-white self-center">
                            Whatsapp Us
                        </div>
                        <a href="tel:+62 811 6000 625">
                            <img className="h-12 cursor-pointer" src={linkedInLogo}/>
                        </a>
                    </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer; 