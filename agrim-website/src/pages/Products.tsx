import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import { findProductData } from '../data/ProductsPageDataSource';

const Products: React.FC = () => {
  const navigate = useNavigate();

  const navigateToProductDetail = (productName: string) => {
    // Convert product name to URL-friendly format (kebab-case)
    const productSlug = productName.toLowerCase().replace(/\s+/g, '-');
    navigate(`/products/${productSlug}`);
  };

  // Helper function to get product image
  const getProductImage = (productName: string): string | undefined => {
    const productKey = productName
      .toLowerCase()
      .split(' ')
      .map((part, index) => 
        index === 0 ? part : part.charAt(0).toUpperCase() + part.slice(1)
      )
      .join('')
      .replace(/[\/]/g, ''); // Remove any slashes in the name
    
    const productData = findProductData(productKey);
    return productData?.imageSrc;
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
                imageUrl={getProductImage('cassia')} 
                onClick={() => navigateToProductDetail('Cassia')} 
              />
              <ProductCard 
                title="Cloves" 
                imageUrl={getProductImage('cloves')} 
                onClick={() => navigateToProductDetail('Cloves')} 
              />
              <ProductCard 
                title="Nutmeg" 
                imageUrl={getProductImage('nutmeg')} 
                onClick={() => navigateToProductDetail('Nutmeg')} 
              />
              <ProductCard 
                title="Mace" 
                imageUrl={getProductImage('mace')} 
                onClick={() => navigateToProductDetail('Mace')} 
              />
            </div>
            
            {/* Spices Grid - Second Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-6">
              <ProductCard 
                title="Cloves Stem" 
                imageUrl={getProductImage('clovesStem')} 
                onClick={() => navigateToProductDetail('Cloves Stem')} 
              />
              <ProductCard 
                title="White Cardamom" 
                imageUrl={getProductImage('whiteCardamom')} 
                onClick={() => navigateToProductDetail('White Cardamom')} 
              />
              <ProductCard 
                title="Black Pepper" 
                imageUrl={getProductImage('blackPepper')} 
                onClick={() => navigateToProductDetail('Black Pepper')} 
              />
              <ProductCard 
                title="Long Pepper" 
                imageUrl={getProductImage('longPepper')} 
                onClick={() => navigateToProductDetail('Long Pepper')} 
              />
            </div>
            
            {/* Spices Grid - Third Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              <ProductCard 
                title="Turmeric Slices" 
                imageUrl={getProductImage('tumericSlices')} 
                onClick={() => navigateToProductDetail('Turmeric Slices')} 
              />
              <ProductCard 
                title="Galangal Slices" 
                imageUrl={getProductImage('galangalSlices')} 
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
                imageUrl={getProductImage('dessicatedCoconut')} 
                onClick={() => navigateToProductDetail('Desiccated Coconut')} 
              />
              <ProductCard 
                title="Coconut Water" 
                imageUrl={getProductImage('coconutWater')} 
                onClick={() => navigateToProductDetail('Coconut Water')} 
              />
              <ProductCard 
                title="Coconut Milk/Cream" 
                imageUrl={getProductImage('coconutMilk')} 
                onClick={() => navigateToProductDetail('Coconut Milk Cream')} 
              />
              <ProductCard 
                title="Coconut Sugar" 
                imageUrl={getProductImage('coconutSugar')} 
                onClick={() => navigateToProductDetail('Coconut Sugar')} 
              />
            </div>
            
            {/* Coconut Products Grid - Second Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              <ProductCard 
                title="Virgin Coconut Oil" 
                imageUrl={getProductImage('coconutOil')} 
                onClick={() => navigateToProductDetail('Virgin Coconut Oil')} 
              />
              <ProductCard 
                title="Coconut Flour" 
                imageUrl={getProductImage('coconutFlour')} 
                onClick={() => navigateToProductDetail('Coconut Flour')} 
              />
              <ProductCard 
                title="Coconut Butter" 
                imageUrl={getProductImage('coconutButter')} 
                onClick={() => navigateToProductDetail('Coconut Butter')} 
              />
              <div className="hidden md:block"></div>
            </div>
          </div>

          {/* Manufacturing Process Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-12">Our Manufacturing Process</h2>
            <div className="aspect-video bg-gray-300 mx-auto max-w-4xl flex items-center justify-center">
              <span className="text-xl">Youtube video embedded</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products; 