import React from 'react';

interface SketchyButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
}

export const SketchyButton: React.FC<SketchyButtonProps> = ({ children, variant = 'primary', className = '', ...props }) => {
  return (
    <button
      className={`
        px-8 py-3 
        font-hand text-xl font-bold tracking-wide
        border-2 border-buidl-black
        rounded-[255px_15px_225px_15px/15px_225px_15px_255px]
        transition-all duration-300 transform hover:-translate-y-1 hover:shadow-sketch
        ${variant === 'primary' ? 'bg-white text-buidl-black hover:bg-gray-50' : 'bg-buidl-black text-white hover:bg-gray-800'}
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
};