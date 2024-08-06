import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import Button from './Button';
import styles from './Button.module.css';

describe('Button Component', () => {
  it('renders with default variant', () => {
    render(<Button>Default Button</Button>);
    const button = screen.getByRole('button');
    expect(button.className).toContain(styles.button);
    expect(button.className).not.toContain('pagination-button');
    expect(button.className).not.toContain('search-button');
    expect(button.className).not.toContain('error-boundary-button');
    expect(button.className).not.toContain('toggle-theme-button');
  });

  it('renders with pagination variant', () => {
    render(<Button variant="pagination">Pagination Button</Button>);
    const button = screen.getByRole('button');
    expect(button.className).toContain(styles.button);
    expect(button.className).toContain(styles['pagination-button']);
  });

  it('renders with search variant', () => {
    render(<Button variant="search">Search Button</Button>);
    const button = screen.getByRole('button');
    expect(button.className).toContain(styles.button);
    expect(button.className).toContain(styles['search-button']);
  });

  it('renders with errorBoundary variant', () => {
    render(<Button variant="errorBoundary">Error Boundary Button</Button>);
    const button = screen.getByRole('button');
    expect(button.className).toContain(styles.button);
    expect(button.className).toContain(styles['error-boundary-button']);
  });

  it('renders with toggleTheme variant', () => {
    render(<Button variant="toggleTheme">Toggle Theme Button</Button>);
    const button = screen.getByRole('button');
    expect(button.className).toContain(styles.button);
    expect(button.className).toContain(styles['toggle-theme-button']);
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
    expect(button.className).toContain(styles.button);
    expect(button.className).toContain('extra-class');
  });

  it('passes other props to the button element', () => {
    render(<Button disabled>Disabled Button</Button>);
    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
  });
});
