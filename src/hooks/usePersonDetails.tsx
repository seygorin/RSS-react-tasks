import { useFetchPersonDetailsQuery } from '../store/api/personApi';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../store/store';
import { selectItem } from '../store/slices/selectedItemSlice';
import { useEffect } from 'react';

const usePersonDetails = (id: string | undefined) => {
  const dispatch = useDispatch<AppDispatch>();
  const {
    data: person,
    isLoading,
    error,
  } = useFetchPersonDetailsQuery(id || '');

  useEffect(() => {
    if (person) {
      dispatch(selectItem(person));
    }
  }, [person, dispatch]);

  return { person, isLoading, error };
};

export default usePersonDetails;
