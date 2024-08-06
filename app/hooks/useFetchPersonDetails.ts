import { useFetchPersonDetailsQuery } from '../store/api/personApi';
import { Person } from '../store/api/interfaces';

interface UseFetchPersonDetailsResult {
  data: Person | undefined;
  isLoading: boolean;
  isError: boolean;
  error: unknown;
  refetch: () => void;
}

export const useFetchPersonDetails = (
  id: string | undefined,
  skip: boolean = false,
): UseFetchPersonDetailsResult => {
  const result = useFetchPersonDetailsQuery(id ?? '', {
    skip: skip || !id,
  });

  return {
    data: result.data,
    isLoading: result.isLoading,
    isError: result.isError,
    error: result.error,
    refetch: result.refetch,
  };
};
