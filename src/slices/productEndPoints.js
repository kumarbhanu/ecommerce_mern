import { PRODUCTS_URL } from "../constants";

export const getProducts = (builder) => ({
  getProducts: builder.query({
    query: () => ({
      url: PRODUCTS_URL,
    }),
    keepUnusedDataFor: 5,
  }),
});
export const getProductDetails = (builder) => ({
  getProductDetails: builder.query({
    query: (id) => ({
      url: `${PRODUCTS_URL}/${id}`,
    }),
    keepUnusedDataFor: 5,
  }),
});
