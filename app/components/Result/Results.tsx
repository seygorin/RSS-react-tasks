import React, { useEffect } from 'react';
import { useLocation, useNavigate } from '@remix-run/react';
import CardList from '../CardList/CardList';
import Pagination from '../Pagination/Pagination';
import Loading from '../Loading/Loading';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import NoResults from '../NoResults/NoResults';
import { useFetchPeopleQuery } from '../../store/api/personApi';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/store';
import { setPage } from '../../store/slices/pageSlice';
import { setPeople } from '../../store/slices/peopleSlice';
import styles from './Results.module.css';

interface Props {
  searchTerm: string;
}

const Results: React.FC<Props> = ({ searchTerm }) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const currentPage =
    Number(new URLSearchParams(location.search).get('page')) || 1;
  const peopleData = useSelector(
    (state: RootState) => state.people.currentPageData,
  );
  const { data, error, isLoading } = useFetchPeopleQuery({
    searchTerm,
    page: currentPage,
  });

  useEffect(() => {
    dispatch(setPage(currentPage));
  }, [currentPage, dispatch]);

  useEffect(() => {
    if (data && data.results) {
      dispatch(setPeople(data.results));
    }
  }, [data, dispatch]);

  const handlePageChange = (newPage: number) => {
    dispatch(setPage(newPage));
    navigate(`?page=${newPage}`, { replace: true });
  };

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <ErrorMessage message="Failed to fetch data" />;
  }

  return (
    <div className={styles['results-container']}>
      {peopleData && peopleData.length > 0 ? (
        <>
          <CardList people={peopleData} />
          <Pagination
            currentPage={currentPage}
            totalPages={Math.ceil((data?.count || 0) / 10)}
            onPageChange={handlePageChange}
          />
        </>
      ) : (
        <NoResults />
      )}
    </div>
  );
};

export default Results;
