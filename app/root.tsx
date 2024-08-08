import React from 'react';
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from '@remix-run/react';
import type {
  LinksFunction,
  LoaderFunction,
  MetaFunction,
} from '@remix-run/node';
import { ThemeProvider } from './context/ThemeContext';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import { Provider } from 'react-redux';
import { store } from '../app/store/store';
import { cssBundleHref } from '@remix-run/css-bundle';
import styles from '~/styles/globals.css';
import { getTheme } from './theme.server';

type Theme = 'light' | 'dark';

export const loader: LoaderFunction = async ({ request }) => {
  const theme = await getTheme(request);
  return { theme };
};

export const links: LinksFunction = () => [
  ...(cssBundleHref ? [{ rel: 'stylesheet', href: cssBundleHref }] : []),
  { rel: 'stylesheet', href: styles },
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
];

export const meta: MetaFunction = () => [
  { charset: 'utf-8' },
  { title: 'RS School - React Project' },
  { name: 'viewport', content: 'width=device-width,initial-scale=1' },
  { name: 'description', content: 'seygorin: Star Wars Characters Search App' },
];

export default function Root() {
  const { theme } = useLoaderData<{ theme: Theme }>();

  return (
    <html lang="en" data-theme={theme}>
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Provider store={store}>
          <ThemeProvider initialTheme={theme}>
            <ErrorBoundary>
              <Outlet />
            </ErrorBoundary>
          </ThemeProvider>
        </Provider>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

export { ErrorBoundary };
