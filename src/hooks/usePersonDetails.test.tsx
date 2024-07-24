import { render, screen } from '@testing-library/react';
import { vi, describe, it, expect, beforeEach } from 'vitest';
import usePersonDetails from './usePersonDetails';
import { useFetchPersonDetailsQuery } from '../store/api/personApi';
import { selectItem } from '../store/slices/selectedItemSlice';
import { useDispatch } from 'react-redux';

vi.mock('../store/api/personApi', () => ({
  useFetchPersonDetailsQuery: vi.fn(),
}));

vi.mock('../store/slices/selectedItemSlice', () => ({
  selectItem: vi.fn(),
}));

vi.mock('react-redux', () => ({
  useDispatch: vi.fn(),
}));

const TestComponent = ({ id }) => {
  const { person, isLoading, error } = usePersonDetails(id);

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {person && <p>{person.name}</p>}
    </div>
  );
};

describe('usePersonDetails', () => {
  let dispatch;

  beforeEach(() => {
    dispatch = vi.fn();
    useDispatch.mockReturnValue(dispatch);
  });

  it('should display loading state initially', () => {
    useFetchPersonDetailsQuery.mockReturnValue({
      data: null,
      isLoading: true,
      error: null,
    });

    render(<TestComponent id="1" />);

    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('should display error message when there is an error', async () => {
    useFetchPersonDetailsQuery.mockReturnValue({
      data: null,
      isLoading: false,
      error: { message: 'Something went wrong' },
    });

    render(<TestComponent id="1" />);

    expect(
      await screen.findByText('Error: Something went wrong'),
    ).toBeInTheDocument();
  });

  it('should display person details and dispatch selectItem when person data is available', async () => {
    const mockPerson = { name: 'Luke Skywalker' };
    useFetchPersonDetailsQuery.mockReturnValue({
      data: mockPerson,
      isLoading: false,
      error: null,
    });

    render(<TestComponent id="1" />);

    expect(await screen.findByText('Luke Skywalker')).toBeInTheDocument();
    expect(dispatch).toHaveBeenCalledWith(selectItem(mockPerson));
  });
});
