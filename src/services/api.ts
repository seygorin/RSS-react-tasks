import axios from 'axios';
import { ApiResponse } from './interfaces';

export const fetchPeople = async (searchTerm: string, page: number) => {
  const url = `https://swapi.dev/api/people/?search=${searchTerm}&page=${page}`;
  const response = await axios.get<ApiResponse>(url);
  return response;
};
