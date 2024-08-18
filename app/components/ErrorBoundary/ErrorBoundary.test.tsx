import React from 'react';
import { beforeAll, afterAll, describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import ErrorBoundary from './ErrorBoundary';

vi.mock('@remix-run/react', async () => {
  const actual = await vi.importActual('@remix-run/react');
  return {
    ...actual,
    useRouteError: vi.fn(),
  };
});

describe('ErrorBoundary Component', () => {
  beforeAll(() => {
    vi.spyOn(console, 'error').mockImplementation(() => {});
  });

  afterAll(() => {
    vi.restoreAllMocks();
  });

  const renderWithRouter = (ui: React.ReactNode) => {
    return render(
      <MemoryRouter>
        <Routes>
          <Route path="/" element={ui} errorElement={<ErrorBoundary />} />
        </Routes>
      </MemoryRouter>,
    );
  };

  it('renders children without error', () => {
    renderWithRouter(
      <ErrorBoundary>
        <div>Child Component</div>
      </ErrorBoundary>,
    );
    expect(screen.getByText('Child Component')).toBeInTheDocument();
  });
});
