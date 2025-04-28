import cassia from "../assets/original/cassia.jpg"
import workersSorting from "../assets/workersSorting.jpg"
import agrimExhibition from "../assets/original/agrimExhibition.jpg"
import agrimShowFront from "../assets/original/agrimShowFront.jpg"
import agrimPosters from "../assets/original/agrimPosters.jpg"
import agrimSeats from "../assets/original/agrimSeats.jpg"
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';

const Gallery: React.FC = () => {
  const navigate = useNavigate();
  
  // Navigation handlers
  const navigateToProducts = () => {
    navigate('/products');
  };
  
  const navigateToContact = () => {
    navigate('/contact');
  };

  // Image data for the gallery
  const galleryImages = [
    {
      id: 1,
      src: cassia,
      alt: 'Raw spices and cinnamon sticks with powder'
    },
    {
      id: 2,
      src: workersSorting,
      alt: 'Worker processing spices'
    },
    {
      id: 3,
      src: agrimExhibition,
      alt: 'Agrim exhibition booth with product displays'
    },
    {
      id: 4,
      src: agrimShowFront,
      alt: 'Larger exhibition display with Agrim products'
    },
    {
      id: 5,
      src: agrimPosters,
      alt: 'PT Agrim Java Indonesia exhibition booth'
    },
    {
      id: 6,
      src: agrimSeats,
      alt: 'Agrim Industries Ltd exhibition stand'
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      <Header />

      {/* Gallery Hero Section */}
      <section className="py-12 px-6">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4 text-gray-800 pb-2 inline-block">Gallery</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our facilities, products, and exhibition presence across the globe.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* First Row - 3 images */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src={galleryImages[0].src} 
                alt={galleryImages[0].alt} 
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src={galleryImages[1].src} 
                alt={galleryImages[1].alt} 
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src={galleryImages[2].src} 
                alt={galleryImages[2].alt} 
                className="w-full h-64 object-cover"
              />
            </div>

            {/* Second Row - Large image spanning 2 columns on medium screens and up */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden md:col-span-2">
              <img 
                src={galleryImages[3].src} 
                alt={galleryImages[3].alt} 
                className="w-full h-64 object-cover"
              />
            </div>

            {/* Third Row - 2 more images */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden md:col-span-1 lg:col-span-1">
              <img 
                src={galleryImages[4].src} 
                alt={galleryImages[4].alt} 
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden md:col-span-1 lg:col-span-2">
              <img 
                src={galleryImages[5].src} 
                alt={galleryImages[5].alt} 
                className="w-full h-64 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 px-6 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Want to learn more about our products?</h2>
          <p className="text-gray-600 mb-6">
            Visit our products page or contact us for more information.
          </p>
          <div className="flex justify-center space-x-4">
            <Button 
              onClick={navigateToProducts}
            >
              Our Products
            </Button>
            <Button 
              onClick={navigateToContact}
              className="bg-gray-700 hover:bg-gray-800 focus:ring-gray-700"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Gallery; 