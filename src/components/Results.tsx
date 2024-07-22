import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/store';
import { useFetchPeopleQuery } from '../store/api/personApi';
import { setPage } from '../store/slices/pageSlice';

import CardList from './CardList';
import Pagination from './Pagination';
import Loading from './Loading';
import ErrorMessage from './ErrorMessage';
import NoResults from './NoResults';
import './Results.css';
import { Person } from '../store/api/interfaces';

interface Props {
  searchTerm: string;
  onItemClick: (person: Person) => void;
}

const Results: React.FC<Props> = ({ searchTerm, onItemClick }) => {
  const dispatch = useDispatch();
  const currentPage = useSelector((state: RootState) => state.page.currentPage);
  const [searchParams, setSearchParams] = useSearchParams();

  const { data, error, isLoading } = useFetchPeopleQuery({
    searchTerm,
    page: currentPage,
  });

  useEffect(() => {
    const pageParam = parseInt(searchParams.get('page') || '1', 10);
    if (pageParam !== currentPage) {
      dispatch(setPage(pageParam));
    }
  }, [searchParams, currentPage, dispatch]);

  const handlePageChange = (newPage: number) => {
    setSearchParams({ page: newPage.toString() });
    dispatch(setPage(newPage));
  };

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <ErrorMessage message="Failed to fetch data" />;
  }

  return (
    <div className="results-container">
      {data && data.results.length > 0 ? (
        <>
          <CardList people={data.results} onItemClick={onItemClick} />
          <Pagination
            currentPage={currentPage}
            totalPages={Math.ceil(data.count / 10)}
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
