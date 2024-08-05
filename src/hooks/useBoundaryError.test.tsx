import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import useBoundaryError from './useBoundaryError';

const TestComponent = () => {
  const { hasError, throwError } = useBoundaryError();
  return (
    <div>
      <div data-testid="error-status">{hasError ? 'Error' : 'No Error'}</div>
      <button onClick={throwError}>Throw Error</button>
    </div>
  );
};

describe('useBoundaryError', () => {
  it('should initialize with hasError as false', () => {
    render(<TestComponent />);
    expect(screen.getByTestId('error-status')).toHaveTextContent('No Error');
  });

  it('should set hasError to true when throwError is called', () => {
    render(<TestComponent />);
    fireEvent.click(screen.getByText('Throw Error'));
    expect(screen.getByTestId('error-status')).toHaveTextContent('Error');
  });

  it('should not change hasError when throwError is called multiple times', () => {
    render(<TestComponent />);
    fireEvent.click(screen.getByText('Throw Error'));
    expect(screen.getByTestId('error-status')).toHaveTextContent('Error');
    fireEvent.click(screen.getByText('Throw Error'));
    expect(screen.getByTestId('error-status')).toHaveTextContent('Error');
  });

  it('should return the same throwError function on re-renders', () => {
    const { rerender } = render(<TestComponent />);
    const initialThrowError = screen.getByText('Throw Error').onclick;

    rerender(<TestComponent />);

    expect(screen.getByText('Throw Error').onclick).toBe(initialThrowError);
  });
});
