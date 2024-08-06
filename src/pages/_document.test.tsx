import React from 'react';
import { render } from '@testing-library/react';
import { vi, describe, it, expect } from 'vitest';

interface DocumentProps {
  children: React.ReactNode;
}

vi.mock('next/document', () => ({
  __esModule: true,
  default: class Document extends React.Component<DocumentProps> {
    render() {
      return this.props.children;
    }
  },
  Html: ({ children, ...props }: React.ComponentProps<'html'>) => (
    <html data-testid="mock-html" {...props}>
      {children}
    </html>
  ),
  Head: ({ children }: { children: React.ReactNode }) => (
    <head data-testid="mock-head">{children}</head>
  ),
  Main: () => <main data-testid="mock-main" />,
  NextScript: () => <script data-testid="mock-next-script" />,
}));

import MyDocument from './_document';

describe('MyDocument', () => {
  it('renders without crashing', () => {
    const { container } = render(React.createElement(MyDocument));
    expect(container).toBeTruthy();
  });

  it('includes correct meta tags', () => {
    const { getByTestId } = render(React.createElement(MyDocument));

    const head = getByTestId('mock-head');

    expect(head.querySelector('meta[charSet="utf-8"]')).toBeTruthy();
    expect(head.querySelector('meta[name="description"]')).toHaveAttribute(
      'content',
      'seygorin: Star Wars Characters Search App',
    );
  });

  it('includes correct link tags', () => {
    const { getByTestId } = render(React.createElement(MyDocument));

    const head = getByTestId('mock-head');

    expect(
      head.querySelector('link[href="https://fonts.googleapis.com"]'),
    ).toBeTruthy();
    expect(
      head.querySelector('link[href="https://fonts.gstatic.com"]'),
    ).toHaveAttribute('crossOrigin', 'anonymous');
    expect(
      head.querySelector('link[href^="https://fonts.googleapis.com/css2"]'),
    ).toBeTruthy();
  });

  it('renders Main and NextScript components', () => {
    const { getByTestId } = render(React.createElement(MyDocument));

    expect(getByTestId('mock-main')).toBeTruthy();
    expect(getByTestId('mock-next-script')).toBeTruthy();
  });

  it('sets correct lang attribute on Html', () => {
    const { getByTestId } = render(React.createElement(MyDocument));
    expect(getByTestId('mock-html')).toHaveAttribute('lang', 'en');
  });
});
