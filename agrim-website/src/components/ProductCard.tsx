import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface ProductCardProps {
  title: string;
  imageUrl?: string; // Optional image URL
  onClick?: () => void; // Optional custom onClick handler
}

const ProductCard: React.FC<ProductCardProps> = ({ title, imageUrl, onClick }) => {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);
  const titleBaseStyles = `text-white font-semibold p-4 cursor-pointer transition duration-300 ${isHovered ? 'bg-green-900' : 'bg-orange-500'}`;
  const imagePlaceholderStyles = "h-60 bg-gray-500 flex items-center justify-center cursor-pointer"; // Added cursor-pointer
  const cardBaseStyles = "bg-gray-700 rounded-3xl overflow-hidden shadow-lg flex flex-col max-w-[270px] mx-auto cursor-pointer";

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      // Default navigation to products page
      navigate('/products');
    }
  };

  return (
    <div 
      className={cardBaseStyles} 
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
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