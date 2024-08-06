import React from 'react';
import { render } from '@testing-library/react';
import { vi, describe, it, expect } from 'vitest';
import MyApp from './_app';
import { AppProps } from 'next/app';
import { Router } from 'next/router';

vi.mock('next/head', () => ({
  default: ({ children }: { children: React.ReactNode }) => <>{children}</>,
}));
vi.mock('../store/store', () => ({
  store: {
    getState: vi.fn(),
    subscribe: vi.fn(),
    dispatch: vi.fn(),
  },
}));
vi.mock('../context/ThemeContext', () => ({
  ThemeProvider: ({ children }: { children: React.ReactNode }) => (
    <>{children}</>
  ),
}));
vi.mock('../components/ErrorBoundary/ErrorBoundary', () => ({
  default: ({ children }: { children: React.ReactNode }) => <>{children}</>,
}));
vi.mock('next/router', () => ({
  useRouter: () => ({
    route: '/',
    pathname: '',
    query: {},
    asPath: '',
  }),
}));

const mockRouter: Partial<Router> = {
  route: '/',
  pathname: '',
  query: {},
  asPath: '',
  basePath: '',
  events: {
    on: vi.fn(),
    off: vi.fn(),
    emit: vi.fn(),
  },
  push: vi.fn(),
  replace: vi.fn(),
  reload: vi.fn(),
  back: vi.fn(),
  prefetch: vi.fn(),
  beforePopState: vi.fn(),
  isFallback: false,
  isReady: true,
  isLocaleDomain: false,
  isPreview: false,
};

const renderMyApp = (pageProps: AppProps['pageProps'] = {}) => {
  const Component = () => <div>Test Component</div>;
  return render(
    <MyApp
      Component={Component}
      pageProps={pageProps}
      router={mockRouter as Router}
    />,
  );
};

describe('MyApp', () => {
  it('renders without crashing', () => {
    const { getByText } = renderMyApp();
    expect(getByText('Test Component')).toBeInTheDocument();
  });

  it('includes correct meta tags', () => {
    renderMyApp();
    const viewport = document.querySelector('meta[name="viewport"]');
    expect(viewport).toHaveAttribute(
      'content',
      'width=device-width, initial-scale=1.0',
    );
  });

  it('sets correct title', () => {
    renderMyApp();
    expect(document.title).toBe('RS School - React Project');
  });

  it('includes favicon', () => {
    renderMyApp();
    const favicon = document.querySelector('link[rel="icon"]');
    expect(favicon).toHaveAttribute('href', '/favicon.ico');
  });
});
