import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import useMainPage from '../hooks/useMainPage';
import useBoundaryError from '../hooks/useBoundaryError';
import DetailsPage from './details/DetailsPage';
import Results from '../components/Result/Results';
import Button from '../components/Button/Button';
import Flyout from '../components/Flyout/Flyout';
import Header from '../components/Header/Header';
import { useTheme } from '../context/ThemeContext';
import styles from './index.module.css';

const MainPage: React.FC = () => {
  const { isInitialLoadComplete, closeDetails } = useMainPage();
  const { theme } = useTheme();
  const router = useRouter();
  const showDetails = router.pathname.includes('/details');
  const searchTerm = (router.query.search as string) || '';

  const { hasError, throwError } = useBoundaryError();

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  if (hasError) {
    throw new Error('Test error');
  }

  return (
    <main className={styles['main-page']}>
      <Header throwError={throwError} />
      <div className={styles['content-section']}>
        <div className={styles['left-section']}>
          {isInitialLoadComplete && <Results searchTerm={searchTerm} />}
        </div>
        {showDetails && (
          <div className={styles['right-section']}>
            {router.query.id && (
              <>
                <div>
                  {router.query.id && (
                    <DetailsPage id={router.query.id as string} />
                  )}
                </div>
                <Button variant="pagination" onClick={closeDetails}>
                  Close
                </Button>
              </>
            )}
          </div>
        )}
      </div>
      <Flyout />
    </main>
  );
};

export default MainPage;
