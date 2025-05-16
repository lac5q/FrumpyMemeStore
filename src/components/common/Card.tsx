'use client';

import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  hoverable?: boolean;
}

/**
 * Reusable Card component
 */
const Card: React.FC<CardProps> = ({
  children,
  className = '',
  onClick,
  hoverable = false,
}) => {
  // Base styles
  const baseStyles = 'bg-white rounded-lg shadow-md overflow-hidden';
  
  // Hoverable styles
  const hoverStyles = hoverable ? 'transition-transform hover:scale-105 cursor-pointer' : '';
  
  // Combine all styles
  const cardStyles = `${baseStyles} ${hoverStyles} ${className}`;
  
  return (
    <div className={cardStyles} onClick={onClick}>
      {children}
    </div>
  );
};

export default Card;
