import { render, screen } from '@testing-library/react';
import { act } from 'react';
import { describe, expect, it, vi } from 'vitest';
import App from './App';

vi.mock('./pages/MainPage', () => ({
  default: () => <div>Main Page</div>,
}));

vi.mock('./pages/DetailsPage', () => ({
  default: () => <div>Details Page</div>,
}));

describe('App component tests', () => {
  it('renders without crashing', async () => {
    const result = await act(async () => render(<App />));
    const { container } = result;

    expect(container.firstChild).not.toBeNull();
  });

  it('renders MainPage for root path', async () => {
    await act(async () => render(<App />));

    expect(screen.getByText('Main Page')).toBeInTheDocument();
  });

  it('does not log errors in console', async () => {
    const spy = vi.spyOn(global.console, 'error');

    await act(async () => render(<App />));
    expect(spy).not.toHaveBeenCalled();
  });
});
