import React from 'react';
import { useNavigate } from 'react-router-dom';

interface ProductCardProps {
  title: string;
  imageUrl?: string; // Optional image URL
  onClick?: () => void; // Optional custom onClick handler
}

const ProductCard: React.FC<ProductCardProps> = ({ title, imageUrl, onClick }) => {
  const navigate = useNavigate();
  const titleBaseStyles = "bg-orange-500 text-white font-semibold p-4 cursor-pointer transition duration-300 hover:bg-green-900";
  const imagePlaceholderStyles = "h-60 bg-gray-500 flex items-center justify-center"; // Increased height for aspect ratio
  const cardBaseStyles = "bg-gray-700 rounded-3xl overflow-hidden shadow-lg flex flex-col max-w-[270px] mx-auto";

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      // Default navigation to products page
      navigate('/products');
    }
  };

  return (
    <div className={cardBaseStyles} onClick={handleClick}>
      <div className={imagePlaceholderStyles}>
        {imageUrl ? (
          <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
        ) : (
          <span className="text-gray-400 text-sm">Image Placeholder</span>
        )}
      </div>
      <div className={titleBaseStyles}>
        <h3 className="text-lg text-center">{title}</h3> {/* Centered text */}
      </div>
    </div>
  );
};

export default ProductCard; 