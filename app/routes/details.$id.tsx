import { json } from '@remix-run/node';
import type { LoaderFunction } from '@remix-run/node';
import usePersonDetails from '~/hooks/usePersonDetails';
import Card from '~/components/Card/Card';
import Loading from '~/components/Loading/Loading';
import ErrorMessage from '~/components/ErrorMessage/ErrorMessage';
import NoResults from '~/components/NoResults/NoResults';
import styles from '~/styles/details.module.css';

interface DetailsPageProps {
  id: string;
}

export const loader: LoaderFunction = async ({ params }) => {
  const { id } = params;
  return json({ id });
};

const DetailsPage: React.FC<DetailsPageProps> = ({ id }) => {
  const { person, isLoading, error } = usePersonDetails(id);

  if (isLoading) return <Loading />;
  if (error) return <ErrorMessage message={error.toString()} />;
  if (!person) return <NoResults />;

  return (
    <div className={styles['details-container']}>
      <Card person={person} />
    </div>
  );
};

export default DetailsPage;
