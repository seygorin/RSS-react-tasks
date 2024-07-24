import { expect, describe, it, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Results from './Results';

const mockPeople = [
  { name: 'John Doe', age: 30, job: 'Developer', url: '/1/' },
  { name: 'Jane Smith', age: 25, job: 'Designer', url: '/2/' },
];

vi.mock('../services/api', () => ({
  fetchPeople: vi.fn(() =>
    Promise.resolve({ data: { results: mockPeople, count: 2 } }),
  ),
}));

const mockProps = {
  searchTerm: 'Developer',
  onItemClick: vi.fn(),
};

describe('Results Component', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders people', async () => {
    render(
      <MemoryRouter>
        <Results {...mockProps} />
      </MemoryRouter>,
    );

    const items = await waitFor(() =>
      screen.getAllByRole('heading', { level: 3 }),
    );
    expect(items).toHaveLength(2);
  });

  it('calls onItemClick when a person is clicked', async () => {
    render(
      <MemoryRouter>
        <Results {...mockProps} />
      </MemoryRouter>,
    );

    const items = await waitFor(() =>
      screen.getAllByRole('heading', { level: 3 }),
    );
    fireEvent.click(items[0]);
    expect(mockProps.onItemClick).toHaveBeenCalledWith(1);
  });
});
