import { apiSlice } from "../../app/api/apiSlice";


export const productsApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getProducts: builder.query({
            query: () => '/products'
        }),
        getSingleProduct: builder.query({
            query: (id) => `/products/${id}`
        }),
        searchProduct: builder.query({
            query: (searchTerm) => `/products/search?q=${searchTerm}`
        }),
        getCategories: builder.query({
            query: () => '/products/categories'
        }),
        getCategoryProducts: builder.query({
            query: (categoryName) => `/products/category/${categoryName}`
        }),
    }),
})


export const { 
    useGetProductsQuery, 
    useGetSingleProductQuery, 
    useSearchProductQuery,
    useGetCategoriesQuery,
    useGetCategoryProductsQuery } = productsApiSlice