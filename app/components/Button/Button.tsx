import React, { ButtonHTMLAttributes } from 'react';
import styles from './Button.module.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?:
    | 'default'
    | 'pagination'
    | 'search'
    | 'errorBoundary'
    | 'toggleTheme';
}

const Button: React.FC<ButtonProps> = ({
  variant = 'default',
  className,
  ...props
}) => {
  const variantClass = {
    default: styles.button,
    pagination: `${styles.button} ${styles['pagination-button']}`,
    search: `${styles.button} ${styles['search-button']}`,
    errorBoundary: `${styles.button} ${styles['error-boundary-button']}`,
    toggleTheme: `${styles.button} ${styles['toggle-theme-button']}`,
  }[variant];

  return <button className={`${variantClass} ${className}`} {...props} />;
};

export default Button;
