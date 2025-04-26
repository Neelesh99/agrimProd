import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  // We can add variant props here later if needed (e.g., variant: 'primary' | 'secondary')
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<ButtonProps> = ({ children, className, onClick, ...props }) => {
  const baseStyles = "bg-orange-500 hover:bg-green-900 text-white font-semibold py-2 px-6 rounded-full transition duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 cursor-pointer";

  return (
    <button
      className={`${baseStyles} ${className || ''}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;