import { render, screen } from '@testing-library/react';
import { beforeEach, describe, it, expect, vi } from 'vitest';
import DetailsPage from '../pages/details/[id]';
import usePersonDetails from '../hooks/usePersonDetails';

vi.mock('../../hooks/usePersonDetails');

const mockUsePersonDetails = vi.fn();

describe('DetailsPage', () => {
  beforeEach(() => {
    vi.mocked(usePersonDetails).mockImplementation(mockUsePersonDetails);
  });

  it('renders Loading component when loading is true', () => {
    mockUsePersonDetails.mockReturnValue({
      person: null,
      isLoading: true,
      error: null,
    });

    render(<DetailsPage id="1" />);

    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });

  it('renders ErrorMessage component when error exists', () => {
    mockUsePersonDetails.mockReturnValue({
      person: null,
      isLoading: false,
      error: 'Failed to fetch details',
    });

    render(<DetailsPage id="1" />);

    expect(screen.getByText(/failed to fetch details/i)).toBeInTheDocument();
  });

  it('renders NoResults component when person is null', () => {
    mockUsePersonDetails.mockReturnValue({
      person: null,
      isLoading: false,
      error: null,
    });

    render(<DetailsPage id="1" />);

    expect(screen.getByText(/nothing found/i)).toBeInTheDocument();
  });
});
