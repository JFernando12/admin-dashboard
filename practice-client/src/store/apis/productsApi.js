import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const productsApi = createApi({
  reducerPath: 'products',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => {
        return {
          url: 'client/products',
          method: 'GET',
        };
      },
    }),
  }),
});

export const { useGetProductsQuery } = productsApi;
export { productsApi };
