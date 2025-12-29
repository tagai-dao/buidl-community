import React from 'react';

interface SketchyCardProps {
  children: React.ReactNode;
  className?: string;
  padding?: string;
}

export const SketchyCard: React.FC<SketchyCardProps> = ({ children, className = '', padding = 'p-8' }) => {
  return (
    <div className={`
      relative bg-white
      border-2 border-buidl-black
      rounded-[25px_225px_25px_25px/255px_25px_225px_25px]
      shadow-sm
      ${padding}
      ${className}
    `}>
      {children}
    </div>
  );
};