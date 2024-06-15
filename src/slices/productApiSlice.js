
import { apiSlice } from "./apiSlices";
import { getProducts, getProductDetails } from "./productEndPoints";


const endpointsObj={
  endpoints:(builder)=>({
    ... getProducts(builder),
    ...getProductDetails(builder)
  })
};
export const productApiSlice = apiSlice.injectEndpoints(endpointsObj)
export const { useGetProductsQuery,useGetProductDetailsQuery } = productApiSlice;

