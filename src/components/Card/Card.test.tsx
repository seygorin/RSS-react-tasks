import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Card from './Card';
import { Person } from '../../store/api/interfaces';

describe('Card', () => {
  const mockPerson: Person = {
    name: 'John Doe',
    height: '180',
    mass: '75',
    hair_color: 'brown',
    skin_color: 'fair',
    eye_color: 'blue',
    birth_year: '1990',
    gender: 'male',
    url: '/person/1/',
  };

  const mockOnClick = vi.fn();

  it('renders relevant card data', () => {
    render(<Card person={mockPerson} onClick={mockOnClick} />);

    expect(screen.getByText(mockPerson.name)).toBeInTheDocument();
    expect(screen.getByText(/height/i)).toBeInTheDocument();
    expect(screen.getByText(/180/i)).toBeInTheDocument();
    expect(screen.getByText(/mass/i)).toBeInTheDocument();
    expect(screen.getByText(/75/i)).toBeInTheDocument();
    expect(screen.getByText(/hair color/i)).toBeInTheDocument();
    expect(screen.getByText(/brown/i)).toBeInTheDocument();
    expect(screen.getByText(/skin color/i)).toBeInTheDocument();
    expect(screen.getByText(/fair/i)).toBeInTheDocument();
    expect(screen.getByText(/eye color/i)).toBeInTheDocument();
    expect(screen.getByText(/blue/i)).toBeInTheDocument();
    expect(screen.getByText(/birth year/i)).toBeInTheDocument();
    expect(screen.getByText(/1990/i)).toBeInTheDocument();
    expect(screen.getByText(/gender/i)).toBeInTheDocument();
    expect(screen.getByText(/male/i)).toBeInTheDocument();
  });

  it('calls onClick with the correct id when clicked', () => {
    render(<Card person={mockPerson} onClick={mockOnClick} />);

    const card = screen.getByRole('listitem');
    fireEvent.click(card);

    expect(mockOnClick).toHaveBeenCalledWith(1);
  });

  it('triggers an additional API call to fetch detailed information on click', async () => {
    const mockFetchDetailedInformation = vi.fn().mockResolvedValue({
      data: mockPerson,
    });

    render(<Card person={mockPerson} onClick={mockFetchDetailedInformation} />);

    const card = screen.getByRole('listitem');
    fireEvent.click(card);

    expect(mockFetchDetailedInformation).toHaveBeenCalledWith(1);
    await expect(mockFetchDetailedInformation).toHaveBeenCalledTimes(1);
  });
});
