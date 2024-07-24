import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
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
import './Results.css';

interface Props {
  searchTerm: string;
}

const Results: React.FC<Props> = ({ searchTerm }) => {
  const dispatch = useDispatch();

  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = Number(searchParams.get('page')) || 1;
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
    setSearchParams({ page: newPage.toString() });
  };

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <ErrorMessage message="Failed to fetch data" />;
  }

  return (
    <div className="results-container">
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
