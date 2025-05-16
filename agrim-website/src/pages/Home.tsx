import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import ProductCard from '../components/ProductCard';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { getProductImage } from './Products';
import coverImage from '../assets/original/coverImage.jpg';
import sortingImage from '../assets/original/sorting.jpg';
import qualityLogo from "../assets/original/TQSCI.jpeg"
import gmp from "../assets/original/gmp.jpeg"
import haccp from "../assets/original/haccp.jpeg"

const Home: React.FC = () => {
  const navigate = useNavigate();

  const navigateToProductDetail = (productName: string) => {
    // Convert product name to URL-friendly format
    const productSlug = productName.toLowerCase().replace(/\s+/g, '-');
    navigate(`/products/${productSlug}`);
  };

  const navigateToProducts = () => {
    navigate('/products');
  };

  const navigateToAbout = () => {
    navigate('/about');
  };

  return (
    <div className="bg-white text-gray-800">
      <Header />

      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center text-white py-40 px-6"
        style={{ backgroundImage: `url(${coverImage})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay */}
        <div className="relative z-10 container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
            Manufacturer and supplier of<br />spices and coconut ingredients from<br />Indonesia
          </h1>
          <div className="mt-8 space-x-4">
            <Button onClick={navigateToAbout}>
              About us
            </Button>
            <Button onClick={navigateToProducts}>
              Our products
            </Button>
          </div>
        </div>
      </section>

      {/* Agrim PTE LTD Section */}
      <section className="bg-white py-16 px-6">
        <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="rounded-lg overflow-hidden shadow-lg h-80">
            <img src={sortingImage} alt="Agrim Factory Workers Sorting" className="w-full h-full object-cover"/>
          </div>
          {/* Text Content */}
          <div className="text-left">
            <h2 className="text-3xl font-bold mb-4 text-black border-b-2 border-orange-500 pb-2 inline-block">Our Company</h2>
            <p className="text-gray-800 mb-6 leading-relaxed">
              Present in the Indonesian spice market since 2004, we have acquired in-depth knowledge and expertise in regional products, enabling us to establish a global customer base in 80+ countries.
            </p>
            <Button onClick={navigateToAbout}>
              About us
            </Button>
          </div>
        </div>
      </section>

      {/* Our Products Section */}
      <section className="bg-gray-900 text-white py-16">
        <div className="container mx-auto text-center px-6">
          <h2 className="text-3xl font-bold mb-2 border-b-2 border-orange-500 pb-2 inline-block">Our Products</h2>
          <p className="text-gray-100 mb-12">We are experts in processing, producing, and exporting spices</p>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12 mx-auto max-w-xs sm:max-w-none">
            <ProductCard 
              title="Cassia" 
              imageUrl={getProductImage('Cassia')} 
              onClick={() => navigateToProductDetail('Cassia')} 
            />
            <ProductCard 
              title="Cloves" 
              imageUrl={getProductImage('Cloves')} 
              onClick={() => navigateToProductDetail('Cloves')} 
            />
            <ProductCard 
              title="Coffee" 
              imageUrl={getProductImage('Coffee')} 
              onClick={() => navigate('/products#coffee-products')} 
            />
            <ProductCard 
              title="Coconut Products" 
              imageUrl={getProductImage('Coconut Milk Cream')} 
              onClick={() => navigate('/products#coconut-products')} 
            />
          </div>

          {/* Button */}
          <Button onClick={navigateToProducts}>
            More Products
          </Button>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="bg-white py-16 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-2 text-black border-b-2 border-orange-500 pb-2 inline-block">Certifications</h2>
          <p className="text-gray-800 mb-12">Our factory is accredited with ISO-9001, HACCP, GMP certifications</p>

          {/* Certifications Logos */}
          <div className="flex justify-center items-center space-x-8 md:space-x-16">
            {/* Placeholder Logos */}
            <img src={gmp} alt="GMP Certified" className="h-24 md:h-32 object-contain"/>
            <img src={haccp} alt="HACCP Certified" className="h-24 md:h-32 object-contain"/>
            <img src={qualityLogo} alt="ISO 9001 Certified" className="h-24 md:h-32 object-contain"/>
            {/* Note: The image shows a 4th logo (TQCS?), add if needed */}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home; 