import React, { ButtonHTMLAttributes } from 'react';
import './Button.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'pagination' | 'search' | 'errorBoundary';
}

const Button: React.FC<ButtonProps> = ({
  variant = 'default',
  className,
  ...props
}) => {
  const variantClass = {
    default: 'button',
    pagination: 'button pagination-button',
    search: 'button search-button',
    errorBoundary: 'button error-boundary-button',
  }[variant];

  return <button className={`${variantClass} ${className}`} {...props} />;
};

export default Button;
