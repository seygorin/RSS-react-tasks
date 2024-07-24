import { useFetchPeopleQuery } from '../store/api/personApi';
import { ApiResponse } from '../store/api/interfaces';

interface UseFetchPeopleResult {
  data: ApiResponse | undefined;
  isLoading: boolean;
  isError: boolean;
  error: unknown;
  refetch: () => void;
}

export const useFetchPeople = (
  searchTerm: string,
  page: number,
  skip: boolean = false,
): UseFetchPeopleResult => {
  const result = useFetchPeopleQuery({ searchTerm, page }, { skip });

  return {
    data: result.data,
    isLoading: result.isLoading,
    isError: result.isError,
    error: result.error,
    refetch: result.refetch,
  };
};
