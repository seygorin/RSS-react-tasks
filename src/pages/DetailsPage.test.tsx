import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { beforeEach, describe, it, expect, vi } from 'vitest';
import DetailsPage from './DetailsPage';
import usePersonDetails from '../hooks/usePersonDetails';

vi.mock('../hooks/usePersonDetails');

const mockUsePersonDetails = vi.fn();

describe('DetailsPage', () => {
  beforeEach(() => {
    vi.mocked(usePersonDetails).mockImplementation(mockUsePersonDetails);
  });

  it('renders Loading component when loading is true', () => {
    mockUsePersonDetails.mockReturnValue({
      person: null,
      loading: true,
      error: null,
    });

    render(
      <MemoryRouter initialEntries={['/details/1']}>
        <Routes>
          <Route path="/details/:id" element={<DetailsPage />} />
        </Routes>
      </MemoryRouter>,
    );

    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });

  it('renders ErrorMessage component when error exists', () => {
    mockUsePersonDetails.mockReturnValue({
      person: null,
      loading: false,
      error: 'Failed to fetch details',
    });

    render(
      <MemoryRouter initialEntries={['/details/1']}>
        <Routes>
          <Route path="/details/:id" element={<DetailsPage />} />
        </Routes>
      </MemoryRouter>,
    );

    expect(screen.getByText(/failed to fetch details/i)).toBeInTheDocument();
  });

  it('renders NoResults component when person is null', () => {
    mockUsePersonDetails.mockReturnValue({
      person: null,
      loading: false,
      error: null,
    });

    render(
      <MemoryRouter initialEntries={['/details/1']}>
        <Routes>
          <Route path="/details/:id" element={<DetailsPage />} />
        </Routes>
      </MemoryRouter>,
    );

    expect(screen.getByText(/nothing found/i)).toBeInTheDocument();
  });

  it('renders Card component when person data is available', () => {
    const person = { id: 1, name: 'John Doe', age: 30, url: '/person/1/' };

    mockUsePersonDetails.mockReturnValue({
      person,
      loading: false,
      error: null,
    });

    render(
      <MemoryRouter initialEntries={['/details/1']}>
        <Routes>
          <Route path="/details/:id" element={<DetailsPage />} />
        </Routes>
      </MemoryRouter>,
    );

    expect(screen.getByText(/john doe/i)).toBeInTheDocument();
  });
});
