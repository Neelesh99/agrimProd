import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import { findProductData } from '../data/ProductsPageDataSource';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

// Helper function to get product image
export const getProductImage = (productName: string): string | undefined => {
    const productSlug = productName.toLowerCase().replace(/\s+/g, '-');
    console.log(productSlug);
    const productKey = productSlug ? 
    productSlug
      .split('-')
      .map((part, index) => 
        index === 0 ? part : part.charAt(0).toUpperCase() + part.slice(1)
      )
      .join('') 
    : '';
    const productData = findProductData(productKey);
    console.log(productData);
    return productData?.imageSrc;
  };

const Products: React.FC = () => {
  const navigate = useNavigate();

  const navigateToProductDetail = (productName: string) => {
    // Convert product name to URL-friendly format (kebab-case)
    const productSlug = productName.toLowerCase().replace(/\s+/g, '-');
    navigate(`/products/${productSlug}`);
  };

  

  return (
    <div className="bg-white text-gray-800">
      <Header />

      {/* Our Products Section */}
      <section className="bg-white py-12 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">Our Products</h2>

          {/* Spices Section */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-left">Spices</h3>
            
            {/* Spices Grid - First Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-6">
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
                title="Nutmeg" 
                imageUrl={getProductImage('Nutmeg')} 
                onClick={() => navigateToProductDetail('Nutmeg')} 
              />
              <ProductCard 
                title="Mace" 
                imageUrl={getProductImage('Mace')} 
                onClick={() => navigateToProductDetail('Mace')} 
              />
            </div>
            
            {/* Spices Grid - Second Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-6">
              <ProductCard 
                title="Cloves Stem"
                imageUrl={getProductImage('Cloves Stem')} 
                onClick={() => navigateToProductDetail('Cloves Stem')} 
              />
              <ProductCard 
                title="White Cardamom" 
                imageUrl={getProductImage('White Cardamom')} 
                onClick={() => navigateToProductDetail('White Cardamom')} 
              />
              <ProductCard 
                title="Black Pepper" 
                imageUrl={getProductImage('Black Pepper')} 
                onClick={() => navigateToProductDetail('Black Pepper')} 
              />
              <ProductCard 
                title="Long Pepper" 
                imageUrl={getProductImage('Long Pepper')} 
                onClick={() => navigateToProductDetail('Long Pepper')} 
              />
            </div>
            
            {/* Spices Grid - Third Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              <ProductCard 
                title="Turmeric Slices" 
                imageUrl={getProductImage('Turmeric Slices')} 
                onClick={() => navigateToProductDetail('Turmeric Slices')} 
              />
              <ProductCard 
                title="Galangal Slices" 
                imageUrl={getProductImage('Galangal Slices')} 
                onClick={() => navigateToProductDetail('Galangal Slices')} 
              />
              <div className="hidden md:block"></div>
              <div className="hidden md:block"></div>
            </div>
          </div>

          {/* Coconut Products Section */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-left">Coconut Products</h3>
            
            {/* Coconut Products Grid - First Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-6">
              <ProductCard 
                title="Desiccated Coconut" 
                imageUrl={getProductImage('Desiccated Coconut')} 
                onClick={() => navigateToProductDetail('Desiccated Coconut')} 
              />
              <ProductCard 
                title="Coconut Water" 
                imageUrl={getProductImage('Coconut Water')} 
                onClick={() => navigateToProductDetail('Coconut Water')} 
              />
              <ProductCard 
                title="Coconut Milk/Cream" 
                imageUrl={getProductImage('Coconut Milk Cream')} 
                onClick={() => navigateToProductDetail('Coconut Milk Cream')} 
              />
              <ProductCard 
                title="Coconut Sugar" 
                imageUrl={getProductImage('Coconut Sugar')} 
                onClick={() => navigateToProductDetail('Coconut Sugar')} 
              />
            </div>
            
            {/* Coconut Products Grid - Second Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              <ProductCard 
                title="Virgin Coconut Oil" 
                imageUrl={getProductImage('Virgin Coconut Oil')} 
                onClick={() => navigateToProductDetail('Virgin Coconut Oil')} 
              />
              <ProductCard 
                title="Coconut Flour" 
                imageUrl={getProductImage('Coconut Flour')} 
                onClick={() => navigateToProductDetail('Coconut Flour')} 
              />
              <ProductCard 
                title="Coconut Butter" 
                imageUrl={getProductImage('Coconut Butter')} 
                onClick={() => navigateToProductDetail('Coconut Butter')} 
              />
              <div className="hidden md:block"></div>
            </div>
          </div>

          {/* Manufacturing Process Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-12">Our Manufacturing Process</h2>
            <div className="mx-auto max-w-4xl">
              <LiteYouTubeEmbed
                id="-aQHq6ZLDGI"
                title="Agrim Manufacturing Process"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products; 