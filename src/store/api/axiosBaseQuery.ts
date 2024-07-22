import axios, { AxiosError } from 'axios';

export interface AxiosBaseQueryArgs {
  url: string;
  method: 'get' | 'post' | 'put' | 'delete';
  data?: object;
  params?: Record<string, string | number>;
}

const axiosBaseQuery =
  ({ baseUrl }: { baseUrl: string }) =>
  async ({ url, method, data, params }: AxiosBaseQueryArgs) => {
    try {
      const result = await axios({ url: baseUrl + url, method, data, params });
      return { data: result.data };
    } catch (axiosError) {
      const err = axiosError as AxiosError;
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      };
    }
  };

export default axiosBaseQuery;
