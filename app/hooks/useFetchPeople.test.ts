import { renderHook } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { useFetchPeople } from '../hooks/useFetchPeople';
import { useFetchPeopleQuery } from '../store/api/personApi';
import { ApiResponse } from '../store/api/interfaces';

// Mock the API hook
vi.mock('../store/api/personApi', () => ({
  useFetchPeopleQuery: vi.fn(),
}));

describe('useFetchPeople Hook', () => {
  const mockQueryResult = {
    data: { results: [], count: 0 } as ApiResponse,
    isLoading: false,
    isError: false,
    error: null,
    refetch: vi.fn(),
  };

  it('should return default values when the query is skipped', () => {
    (useFetchPeopleQuery as vi.Mock).mockReturnValue({
      ...mockQueryResult,
      isLoading: false,
      data: undefined,
    });

    const { result } = renderHook(() => useFetchPeople('luke', 1, true));

    expect(result.current.data).toBeUndefined();
    expect(result.current.isLoading).toBe(false);
    expect(result.current.isError).toBe(false);
    expect(result.current.error).toBeNull();
  });

  it('should return data when the query is successful', () => {
    const mockData = {
      results: [{ name: 'Luke Skywalker' }],
      count: 1,
    } as ApiResponse;

    (useFetchPeopleQuery as vi.Mock).mockReturnValue({
      ...mockQueryResult,
      data: mockData,
    });

    const { result } = renderHook(() => useFetchPeople('luke', 1, false));

    expect(result.current.data).toEqual(mockData);
    expect(result.current.isLoading).toBe(false);
    expect(result.current.isError).toBe(false);
    expect(result.current.error).toBeNull();
  });

  it('should call refetch function', () => {
    const refetch = vi.fn();

    (useFetchPeopleQuery as vi.Mock).mockReturnValue({
      ...mockQueryResult,
      refetch,
    });

    const { result } = renderHook(() => useFetchPeople('luke', 1, false));

    result.current.refetch();

    expect(refetch).toHaveBeenCalled();
  });
});
