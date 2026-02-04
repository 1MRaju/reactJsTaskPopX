import React from 'react';

const Button = ({ children, onClick, className }) => {
  return (
    <button
      className={`w-full bg-[var(--col1)] active:scale-95 text-white py-3 rounded-md mt-4 hover:bg-[var(--col2)] font-medium ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
