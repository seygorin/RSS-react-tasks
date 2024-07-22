import { useFetchPeopleQuery } from '../store/api/personApi';

export const useFetchPeople = (searchTerm: string, page: number) => {
  return useFetchPeopleQuery({ searchTerm, page });
};
