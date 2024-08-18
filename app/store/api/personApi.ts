import { createApi } from '@reduxjs/toolkit/query/react';
import { ApiResponse, Person } from './interfaces';
import axiosBaseQuery from './axiosBaseQuery';

export const personApi = createApi({
  reducerPath: 'personApi',
  baseQuery: axiosBaseQuery({ baseUrl: 'https://swapi.dev/api/' }),
  endpoints: (builder) => ({
    fetchPeople: builder.query<
      ApiResponse,
      { searchTerm: string; page: number }
    >({
      query: ({ searchTerm, page }) => ({
        url: `people/?search=${searchTerm}&page=${page}`,
        method: 'get',
      }),
    }),
    fetchPersonDetails: builder.query<Person, string>({
      query: (id) => ({ url: `people/${id}/`, method: 'get' }),
    }),
  }),
});

export const { useFetchPeopleQuery, useFetchPersonDetailsQuery } = personApi;
