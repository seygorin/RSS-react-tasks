import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import ErrorBoundary from './ErrorBoundary';

const ThrowError: React.FC = () => {
  throw new Error('Test error');
};

describe('ErrorBoundary Component', () => {
  it('renders children without error', () => {
    render(
      <ErrorBoundary>
        <div>Child Component</div>
      </ErrorBoundary>,
    );
    expect(screen.getByText('Child Component')).toBeInTheDocument();
  });

  it('catches error and displays fallback UI', () => {
    render(
      <ErrorBoundary>
        <ThrowError />
      </ErrorBoundary>,
    );
    expect(screen.getByText('Something went wrong:')).toBeInTheDocument();
    expect(screen.getByText('Test error')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Reload/i })).toBeInTheDocument();
  });

  // it('reloads the page on button click', () => {
  //   const reloadMock = vi
  //     .spyOn(window.location, 'reload')
  //     .mockImplementation(() => {});

  //   render(
  //     <ErrorBoundary>
  //       <ThrowError />
  //     </ErrorBoundary>,
  //   );

  //   const button = screen.getByRole('button', { name: /Reload/i });
  //   fireEvent.click(button);

  //   expect(reloadMock).toHaveBeenCalledTimes(1);

  //   reloadMock.mockRestore();
  // });
});
