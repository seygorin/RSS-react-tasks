import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { ThemeProvider, useTheme } from '../context/ThemeContext';

const ThemeConsumer: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div>
      <span data-testid="theme">{theme}</span>
      <button data-testid="toggle-theme" onClick={toggleTheme}>
        Toggle Theme
      </button>
    </div>
  );
};

describe('ThemeProvider', () => {
  it('should provide the default theme', () => {
    render(
      <ThemeProvider>
        <ThemeConsumer />
      </ThemeProvider>,
    );

    expect(screen.getByTestId('theme').textContent).toBe('light');
  });

  it('should toggle the theme', () => {
    render(
      <ThemeProvider>
        <ThemeConsumer />
      </ThemeProvider>,
    );

    const themeText = screen.getByTestId('theme');
    const toggleButton = screen.getByTestId('toggle-theme');

    expect(themeText.textContent).toBe('light');
    fireEvent.click(toggleButton);
    expect(themeText.textContent).toBe('dark');
    fireEvent.click(toggleButton);
    expect(themeText.textContent).toBe('light');
  });

  it('should throw an error if useTheme is used outside of ThemeProvider', () => {
    const consoleErrorSpy = vi
      .spyOn(console, 'error')
      .mockImplementation(() => {});

    expect(() => render(<ThemeConsumer />)).toThrow(
      'useTheme must be used within a ThemeProvider',
    );

    consoleErrorSpy.mockRestore();
  });
});
