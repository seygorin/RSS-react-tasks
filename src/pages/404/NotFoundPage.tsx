import React from 'react';
import Link from 'next/link';
import styles from './NotFoundPage.module.css';

const NotFoundPage: React.FC = () => {
  return (
    <div className={styles['not-found-page']}>
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <Link href="/">Go to Home</Link>
    </div>
  );
};

export default NotFoundPage;
