import React from 'react';
import { Person } from '../../store/api/interfaces';
import CardList from '../CardList/CardList';
import Pagination from '../Pagination/Pagination';
import Loading from '../Loading/Loading';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import NoResults from '../NoResults/NoResults';
import { useFetchPeopleQuery } from '../../store/api/personApi';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/store';
import { setPage } from '../../store/slices/pageSlice';
import { selectItem, unselectItem } from '../../store/slices/selectedItemSlice';
import './Results.css';

interface Props {
  searchTerm: string;
  onItemClick: (person: Person) => void;
}

const Results: React.FC<Props> = ({ searchTerm, onItemClick }) => {
  const dispatch = useDispatch();
  const selectedItems = useSelector(
    (state: RootState) => state.selectedItem.selectedItems,
  );
  const currentPage = useSelector((state: RootState) => state.page.currentPage);
  const { data, error, isLoading } = useFetchPeopleQuery({
    searchTerm,
    page: currentPage,
  });

  const handlePageChange = (newPage: number) => {
    dispatch(setPage(newPage));
  };

  const handleCheckboxChange = (person: Person, checked: boolean) => {
    if (checked) {
      dispatch(selectItem(person));
    } else {
      dispatch(unselectItem(person.url));
    }
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
          <CardList
            people={data.results}
            onItemClick={onItemClick}
            onCheckboxChange={handleCheckboxChange}
            selectedItems={selectedItems}
          />
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
