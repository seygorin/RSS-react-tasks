import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import Button from './Button';

describe('Button Component', () => {
  it('renders with default variant', () => {
    render(<Button>Default Button</Button>);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('button');
    expect(button).not.toHaveClass('pagination-button');
    expect(button).not.toHaveClass('search-button');
    expect(button).not.toHaveClass('error-boundary-button');
  });

  it('renders with pagination variant', () => {
    render(<Button variant="pagination">Pagination Button</Button>);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('button pagination-button');
  });

  it('renders with search variant', () => {
    render(<Button variant="search">Search Button</Button>);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('button search-button');
  });

  it('renders with errorBoundary variant', () => {
    render(<Button variant="errorBoundary">Error Boundary Button</Button>);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('button error-boundary-button');
  });

  it('handles click events', () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Click Me</Button>);
    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('applies additional class names', () => {
    render(<Button className="extra-class">Button with Extra Class</Button>);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('button extra-class');
  });

  it('passes other props to the button element', () => {
    render(<Button disabled>Disabled Button</Button>);
    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
  });
});
