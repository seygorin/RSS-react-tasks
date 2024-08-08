import { useLoaderData, useNavigate, useSearchParams } from '@remix-run/react';
import { json } from '@remix-run/node';
import type { LoaderFunction } from '@remix-run/node';
import useMainPage from '~/hooks/useMainPage';
import Results from '~/components/Result/Results';
import Button from '~/components/Button/Button';
import Flyout from '~/components/Flyout/Flyout';
import Header from '~/components/Header/Header';
import DetailsPage from '~/routes/details.$id';
import styles from '~/styles/index.module.css';

export const loader: LoaderFunction = async ({ request }) => {
  const url = new URL(request.url);
  const searchTerm = url.searchParams.get('search') || '';
  return json({ searchTerm });
};

const MainPage = () => {
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

  const handleThrowError = () => {
    throw new Error('Test error');
  };

  return (
    <main className={styles['main-page']}>
      <Header throwError={handleThrowError} />
      <div className={styles['content-section']}>
        <div className={styles['left-section']}>
          {isInitialLoadComplete && <Results searchTerm={searchTerm} />}
        </div>
        {showDetails && (
          <div className={styles['right-section']}>
            <DetailsPage id={id} />
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
