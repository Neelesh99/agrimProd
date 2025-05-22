import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { findProductData } from '../data/ProductsPageDataSource';

const ProductDetail: React.FC = () => {
  const { productSlug } = useParams<{ productSlug: string }>();
  const navigate = useNavigate();
  
  // Convert slug to the product name format used in the data source
  // For example: "black-pepper" -> "blackPepper"
  const productKey = productSlug ? 
    productSlug
      .split('-')
      .map((part, index) => 
        index === 0 ? part : part.charAt(0).toUpperCase() + part.slice(1)
      )
      .join('') 
    : '';
  
  const productData = findProductData(productKey);
  
  if (!productData) {
    return (
      <div className="bg-white text-gray-800">
        <Header />
        <div className="container mx-auto py-16 px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Product Not Found</h2>
          <p className="mb-8">The product you're looking for doesn't exist or has been removed.</p>
          <button 
            onClick={() => navigate('/products')}
            className="bg-orange-500 hover:bg-green-900 text-white font-bold py-2 px-6 rounded transition duration-300"
          >
            Back to Products
          </button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="bg-white text-gray-800">
      <Header />
      
      <section className="container mx-auto py-12 px-6">
        <div className="flex items-center gap-8 mb-8">
          <span 
            onClick={() => navigate('/products')}
            className="text-gray-800 hover:text-green-900 font-medium cursor-pointer transition duration-300"
          >
            ← Back to Products
          </span>
          <h1 className="text-4xl font-bold text-left">
            {productSlug ? productSlug.split('-').map(word => 
              word.charAt(0).toUpperCase() + word.slice(1)
            ).join(' ') : ''}
          </h1>
        </div>
        
        <div className="flex flex-col md:flex-row gap-12 mb-12">
          {/* Product Image */}
          <div className="md:w-2/5">
            <img 
              src={productData.imageSrc} 
              alt={productSlug} 
              className="w-full rounded-lg shadow-lg"
            />
          </div>
          
          {/* Product Description */}
          <div className="md:w-3/5">
            <div className="prose max-w-none text-base leading-relaxed text-left">
              {productData.description}
            </div>
          </div>
        </div>
        
        {/* Lower Gallery Section (if available) */}
        {productData.lowerGallery && (
          <div className="mt-16">
            <div className="overflow-x-auto">
              {productData.lowerGallery}
            </div>
          </div>
        )}
      </section>
      
      <Footer />
    </div>
  );
};

export default ProductDetail; 