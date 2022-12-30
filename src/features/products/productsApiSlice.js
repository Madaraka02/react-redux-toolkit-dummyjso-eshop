import { apiSlice } from "../../app/api/apiSlice";


export const productsApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getProducts: builder.query({
            query: () => '/products'
        }),
        getSingleProduct: builder.query({
            query: (id) => `/products/${id}`
        }),
    }),
})

export const { useGetProductsQuery, useGetSingleProductQuery } = productsApiSlice