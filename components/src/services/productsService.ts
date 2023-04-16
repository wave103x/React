import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { URLs } from '../enums/URLs';
import IProduct from '../Types/Product';

const CATALOGUE = 'catalog';

export const productAPI = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({ baseUrl: URLs.PRODUCT_FETCH }),
  endpoints: (build) => ({
    fetchAllProducts: build.query<IProduct[], string>({
      query: (value: string) => ({
        url: CATALOGUE,
        params: {
          q: value,
        },
      }),
    }),
  }),
});
