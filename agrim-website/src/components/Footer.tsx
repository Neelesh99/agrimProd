import whatsappLogo from "../assets/whatsapp.png"
import linkedInLogo from "../assets/original/Linkedin_circle_black-512.png"
import emailLogo from "../assets/original/Pasted_Graphic-removebg-preview.png"
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-orange-500 text-white py-8 px-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Navigation Links */}
        <div className="grid grid-cols-2 gap-8 md:gap-4 text-left md:text-left text-center mx-auto md:mx-0">
          {/* Column 1 */}
          <ul className="space-y-4 flex flex-col justify-between">
            <li><Link to="/" className="hover:text-green-900 transition duration-300">Home</Link></li>
            <li><Link to="/about" className="hover:text-green-900 transition duration-300">About us</Link></li>
            <li><Link to="/contact" className="hover:text-green-900 transition duration-300">Contact us</Link></li>
          </ul>
          {/* Column 2 */}
          <ul className="space-y-4 flex flex-col justify-between">
            <li><Link to="/products" className="hover:text-green-900 transition duration-300">Products</Link></li>
            <li><Link to="/exhibitions" className="hover:text-green-900 transition duration-300">Exhibitions</Link></li>
            <li><Link to="/gallery" className="hover:text-green-900 transition duration-300">Gallery</Link></li>
          </ul>
        </div>

        {/* Empty Column for spacing (optional) - Moved to middle */}
        <div>
          {/* Can add logo or copyright here if needed */}
        </div>

        {/* Contact Info - Moved to right */}
        <div className="space-y-4 text-center mx-auto md:mx-0">
        <div className="flex flex-row w-56 justify-between">
                        <div className="text-white self-center cursor-pointer hover:text-green-900 transition duration-300" onClick={() => window.open("https://www.linkedin.com/company/agrimltd/", "_blank")}>
                            Follow Us
                        </div>
                        <a href="https://www.linkedin.com/company/agrimltd/">
                            <img className="h-8 cursor-pointer" src={linkedInLogo}/>
                        </a>
                    </div>
                    <div className="flex flex-row w-56 justify-between">
                        <div className="text-white self-center cursor-pointer hover:text-green-900 transition duration-300" onClick={() => window.open("mailto:trade@agrimltd.com", "_blank")}>
                            Email Us
                        </div>
                        <a href="mailto:trade@agrimltd.com">
                            <img className="h-8 cursor-pointer" src={emailLogo}/>
                        </a>
                    </div>
                    <div className="flex flex-row w-56 justify-between">
                        <div className="text-white self-center cursor-pointer hover:text-green-900 transition duration-300" onClick={() => window.open("https://wa.me/628116000625", "_blank")}>
                            WhatsApp Us
                        </div>
                        <a href="tel:+62 811 6000 625">
                            <img className="h-8 cursor-pointer" src={whatsappLogo}/>
                        </a>
                    </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer; 