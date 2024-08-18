import { createCookieSessionStorage } from '@remix-run/node';

type Theme = 'light' | 'dark';

const { getSession, commitSession } = createCookieSessionStorage({
  cookie: {
    name: 'theme',
    secure: process.env.NODE_ENV === 'production',
    secrets: [process.env.COOKIE_SECRET || 'secret-key'],
    sameSite: 'lax',
    path: '/',
    maxAge: 60 * 60 * 24 * 30,
    httpOnly: true,
  },
});

export const getTheme = async (request: Request): Promise<Theme> => {
  const session = await getSession(request.headers.get('Cookie'));
  return session.get('theme') || 'light';
};

export const setTheme = async (request: Request, theme: Theme) => {
  const session = await getSession(request.headers.get('Cookie'));
  session.set('theme', theme);
  return commitSession(session);
};
