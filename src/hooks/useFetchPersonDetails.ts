import { useFetchPersonDetailsQuery } from '../store/api/personApi';

export const useFetchPersonDetails = (id: string) => {
  return useFetchPersonDetailsQuery(id);
};
