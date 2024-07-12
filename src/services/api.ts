import axios from 'axios';
import { ApiResponse, Person } from './interfaces';

export const fetchPeople = async (searchTerm: string, page: number) => {
  const url = `https://swapi.dev/api/people/?search=${searchTerm}&page=${page}`;
  const response = await axios.get<ApiResponse>(url);
  return response;
};

export const fetchPersonDetails = async (id: string) => {
  const url = `https://swapi.dev/api/people/${id}/`;
  const response = await axios.get<Person>(url);
  return response;
};
