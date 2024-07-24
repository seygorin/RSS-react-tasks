import axios from 'axios';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import axiosBaseQuery from './axiosBaseQuery';

vi.mock('axios');

describe('axiosBaseQuery', () => {
  const baseUrl = 'https://api.example.com';
  const baseQuery = axiosBaseQuery({ baseUrl });

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should return data when the request is successful', async () => {
    const responseData = { id: 1, name: 'Luke Skywalker' };
    axios.mockResolvedValueOnce({ data: responseData });

    const result = await baseQuery({ url: '/people/1', method: 'GET' });

    expect(result).toEqual({ data: responseData });
    expect(axios).toHaveBeenCalledWith({
      url: `${baseUrl}/people/1`,
      method: 'GET',
    });
  });

  it('should return an error when the request fails', async () => {
    const axiosError = {
      response: {
        status: 404,
        data: 'Not Found',
      },
    };
    axios.mockRejectedValueOnce(axiosError);

    const result = await baseQuery({ url: '/people/1', method: 'GET' });

    expect(result).toEqual({
      error: {
        status: 404,
        data: 'Not Found',
      },
    });
    expect(axios).toHaveBeenCalledWith({
      url: `${baseUrl}/people/1`,
      method: 'GET',
    });
  });
});
