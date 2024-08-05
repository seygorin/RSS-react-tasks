import { describe, it, expect } from 'vitest';
import { extractIdFromUrl } from './urlUtils';

describe('extractIdFromUrl', () => {
  it('should extract the ID from a URL with a trailing slash', () => {
    const url = 'https://api.example.com/people/123/';
    const result = extractIdFromUrl(url);
    expect(result).toBe('123');
  });

  it('should return an empty string if there is no ID in the URL', () => {
    const url = 'https://api.example.com/people/';
    const result = extractIdFromUrl(url);
    expect(result).toBe('');
  });

  it('should return an empty string if the URL format is incorrect', () => {
    const url = 'https://api.example.com/people/abc/';
    const result = extractIdFromUrl(url);
    expect(result).toBe('');
  });

  it('should return an empty string for an empty URL', () => {
    const url = '';
    const result = extractIdFromUrl(url);
    expect(result).toBe('');
  });
});
