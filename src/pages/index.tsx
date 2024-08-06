import React, { useEffect } from 'react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import useMainPage from '../hooks/useMainPage';
import useBoundaryError from '../hooks/useBoundaryError';
import Results from '../components/Result/Results';
import Button from '../components/Button/Button';
import Flyout from '../components/Flyout/Flyout';
import Header from '../components/Header/Header';
import { useTheme } from '../context/ThemeContext';
import styles from './index.module.css';

const DynamicDetailsPage = dynamic(() => import('./details/[id]'), {
  loading: () => <p>Loading...</p>,
});

const MainPage: React.FC = () => {
  const { isInitialLoadComplete, closeDetails } = useMainPage();
  const { theme } = useTheme();
  const router = useRouter();
  const { id, search: searchTerm = '' } = router.query;
  const showDetails = !!id;

  const { hasError, throwError } = useBoundaryError();

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  if (hasError) {
    throw new Error('Test error');
  }

  const handleCloseDetails = () => {
    closeDetails();
    router.push('/', undefined, { shallow: true });
  };

  return (
    <main className={styles['main-page']}>
      <Header throwError={throwError} />
      <div className={styles['content-section']}>
        <div className={styles['left-section']}>
          {isInitialLoadComplete && (
            <Results searchTerm={searchTerm as string} />
          )}
        </div>
        {showDetails && (
          <div className={styles['right-section']}>
            <DynamicDetailsPage id={id as string} />
            <Button variant="pagination" onClick={handleCloseDetails}>
              Close
            </Button>
          </div>
        )}
      </div>
      <Flyout />
    </main>
  );
};

export default MainPage;
