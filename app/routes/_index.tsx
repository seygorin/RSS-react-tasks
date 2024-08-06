import React from 'react';
import {
  Outlet,
  useLoaderData,
  useNavigate,
  useSearchParams,
} from '@remix-run/react';
import { json } from '@remix-run/node';
import type { LoaderFunction } from '@remix-run/node';
import useMainPage from '../hooks/useMainPage';
import Results from '../components/Result/Results';
import Button from '../components/Button/Button';
import Flyout from '../components/Flyout/Flyout';
import Header from '../components/Header/Header';
import styles from './index.module.css';

export const loader: LoaderFunction = async ({ request }) => {
  const url = new URL(request.url);
  const searchTerm = url.searchParams.get('search') || '';
  return json({ searchTerm });
};

const MainPage: React.FC = () => {
  const { searchTerm } = useLoaderData<{ searchTerm: string }>();
  const [searchParams] = useSearchParams();
  const { isInitialLoadComplete, closeDetails } = useMainPage();
  const navigate = useNavigate();
  const id = searchParams.get('id');
  const showDetails = !!id;

  const handleCloseDetails = () => {
    closeDetails();
    navigate('/', { replace: true });
  };

  return (
    <main className={styles['main-page']}>
      <Header />
      <div className={styles['content-section']}>
        <div className={styles['left-section']}>
          {isInitialLoadComplete && <Results searchTerm={searchTerm} />}
        </div>
        {showDetails && (
          <div className={styles['right-section']}>
            <Outlet />
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
