import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const transactionsApi = createApi({
  reducerPath: 'transactionsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_BASE_URL,
  }),
  endpoints: (builder) => ({
    getTransactions: builder.query({
      query: ({ page, pageSize, sort, search }) => {
        return {
          url: 'client/transactions',
          method: 'GET',
          params: { page, pageSize, sort, search },
        };
      },
    }),
  }),
});

export const { useGetTransactionsQuery } = transactionsApi;
export { transactionsApi };
