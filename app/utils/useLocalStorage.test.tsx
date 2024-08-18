import { renderHook, act } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import useLocalStorage from './useLocalStorage';

describe('useLocalStorage Hook', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    localStorage.clear();
  });

  it('should return initial value if localStorage is empty', () => {
    const { result } = renderHook(() => useLocalStorage('key', 'initialValue'));
    const [value] = result.current;

    expect(value).toBe('initialValue');
  });

  it('should return stored value from localStorage if it exists', () => {
    localStorage.setItem('key', 'storedValue');
    const { result } = renderHook(() => useLocalStorage('key', 'initialValue'));
    const [value] = result.current;

    expect(value).toBe('storedValue');
  });

  it('should update localStorage when value changes', () => {
    const { result } = renderHook(() => useLocalStorage('key', 'initialValue'));
    const [, setValue] = result.current;

    act(() => {
      setValue('newValue');
    });

    expect(localStorage.getItem('key')).toBe('newValue');
  });

  it('should update value when key changes', () => {
    const { result, rerender } = renderHook(
      ({ key }) => useLocalStorage(key, 'initialValue'),
      { initialProps: { key: 'key1' } },
    );

    localStorage.setItem('key2', 'storedValue2');

    rerender({ key: 'key2' });

    const [value] = result.current;

    expect(value).toBe('storedValue2');
  });
});
