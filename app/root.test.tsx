import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { useLoaderData, RemixBrowser } from '@remix-run/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import Root, { links, meta } from '../app/root';

vi.mock('@remix-run/react', async () => {
  const actual = await vi.importActual('@remix-run/react');
  return {
    ...actual,
    useLoaderData: vi.fn(),
    Outlet: () => <div data-testid="outlet">Outlet Content</div>,
    Scripts: () => <div data-testid="scripts">Scripts</div>,
    LiveReload: () => <div data-testid="live-reload">LiveReload</div>,
    RemixBrowser: ({ children }) => (
      <div data-testid="remix-browser">{children}</div>
    ),
  };
});

vi.mock('../app/context/ThemeContext', () => ({
  ThemeProvider: ({ children }) => (
    <div data-testid="theme-provider">{children}</div>
  ),
}));

vi.mock('react-redux', () => ({
  Provider: ({ children }) => (
    <div data-testid="redux-provider">{children}</div>
  ),
}));

vi.mock('../app/components/ErrorBoundary/ErrorBoundary', () => ({
  default: ({ children }) => <div data-testid="error-boundary">{children}</div>,
}));

vi.mock('../app/store/store', () => ({
  store: {},
}));

vi.mock(
  '../app/styles/globals.css',
  () => ({
    default: 'mocked-globals-css',
  }),
  { virtual: true },
);

vi.mock('@remix-run/css-bundle', () => ({
  cssBundleHref: '/mocked-css-bundle.css',
}));

describe('Root Component', () => {
  beforeEach(() => {
    vi.mocked(useLoaderData).mockReturnValue({ theme: 'light' });
  });

  it('includes necessary meta tags', () => {
    const metaTags = meta();
    expect(metaTags).toEqual(
      expect.arrayContaining([
        { charset: 'utf-8' },
        { title: 'RS School - React Project' },
        { name: 'viewport', content: 'width=device-width,initial-scale=1' },
        {
          name: 'description',
          content: 'seygorin: Star Wars Characters Search App',
        },
      ]),
    );
  });

  it('includes necessary link tags', () => {
    const linkTags = links();
    expect(linkTags).toEqual(
      expect.arrayContaining([
        { rel: 'stylesheet', href: '/mocked-css-bundle.css' },
        { rel: 'stylesheet', href: 'mocked-globals-css' },
        { rel: 'icon', href: '/favicon.ico' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossOrigin: 'anonymous',
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&family=Star+Jedi&display=swap',
        },
      ]),
    );
  });
});
