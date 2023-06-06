// Create slice api redux toolkit
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const customersApi = createApi({
  reducerPath: 'customers',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL }),
  endpoints: (builder) => ({
    getCustomers: builder.query({
      query: () => {
        return {
          url: '/client/customers',
          method: 'GET',
        };
      },
    }),
  }),
});

export const { useGetCustomersQuery } = customersApi;
export { customersApi };
