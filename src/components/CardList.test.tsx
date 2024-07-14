import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import CardList from './CardList';
import { Person } from '../services/interfaces';

describe('CardList', () => {
  const mockPeople: Person[] = [
    {
      name: 'John Doe',
      height: '199',
      mass: '90',
      hair_color: 'brown',
      skin_color: 'light',
      eye_color: 'blue',
      birth_year: '1970',
      gender: 'male',
      url: '/person/1/',
    },
    {
      name: 'Jane Smith',
      height: '165',
      mass: '60',
      hair_color: 'black',
      skin_color: 'fair',
      eye_color: 'green',
      birth_year: '1980',
      gender: 'female',
      url: '/person/2/',
    },
  ];

  const mockOnItemClick = vi.fn();

  it('renders the specified number of cards', () => {
    render(<CardList people={mockPeople} onItemClick={mockOnItemClick} />);

    const cards = screen.getAllByRole('listitem');
    expect(cards).toHaveLength(mockPeople.length);
  });

  it('displays appropriate message if no cards are present', () => {
    render(<CardList people={[]} onItemClick={mockOnItemClick} />);

    expect(screen.getByText(/Nothing found/i)).toBeInTheDocument();
  });
});
