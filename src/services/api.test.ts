import { describe, it, expect, vi } from 'vitest';
import axios from 'axios';
import { fetchPeople, fetchPersonDetails } from './api';
import { ApiResponse, Person } from './interfaces';

vi.mock('axios');

describe('API functions tests', () => {
  describe('fetchPeople', () => {
    it('should fetch people with given search term and page', async () => {
      const mockData: ApiResponse = {
        count: 1,
        results: [{ name: 'Luke Skywalker' }],
      };

      (axios.get as vi.Mock).mockResolvedValueOnce({ data: mockData });

      const searchTerm = 'Luke';
      const page = 1;
      const response = await fetchPeople(searchTerm, page);

      expect(axios.get).toHaveBeenCalledWith(
        `https://swapi.dev/api/people/?search=${searchTerm}&page=${page}`,
      );
      expect(response.data).toEqual(mockData);
    });

    it('should handle errors', async () => {
      const errorMessage = 'Network Error';
      (axios.get as vi.Mock).mockRejectedValueOnce(new Error(errorMessage));

      const searchTerm = 'Luke';
      const page = 1;

      try {
        await fetchPeople(searchTerm, page);
      } catch (error) {
        expect(error).toEqual(new Error(errorMessage));
      }
    });
  });

  describe('fetchPersonDetails', () => {
    it('should fetch person details with given id', async () => {
      const mockData: Person = {
        name: 'Luke Skywalker',
        height: '172',
        mass: '77',
        hair_color: 'blond',
        skin_color: 'fair',
        eye_color: 'blue',
        birth_year: '19BBY',
        gender: 'male',
        url: 'https://swapi.dev/api/people/1/',
      };

      (axios.get as vi.Mock).mockResolvedValueOnce({ data: mockData });

      const id = '1';
      const response = await fetchPersonDetails(id);

      expect(axios.get).toHaveBeenCalledWith(
        `https://swapi.dev/api/people/${id}/`,
      );
      expect(response.data).toEqual(mockData);
    });

    it('should handle errors', async () => {
      const errorMessage = 'Network Error';
      (axios.get as vi.Mock).mockRejectedValueOnce(new Error(errorMessage));

      const id = '1';

      try {
        await fetchPersonDetails(id);
      } catch (error) {
        expect(error).toEqual(new Error(errorMessage));
      }
    });
  });
});
