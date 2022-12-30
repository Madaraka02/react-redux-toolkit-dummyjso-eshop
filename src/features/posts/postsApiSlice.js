import { apiSlice } from "../../app/api/apiSlice";

export const postsApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getAllPosts: builder.query({
            query: () => '/posts'

        }),
        getSinglePost: builder.query({
            query: (id) => `/posts/${id}`

        }),
        searchPost: builder.query({
            query: (searchTerm) => `/posts/search?q=${searchTerm}`

        }),
        getUserPosts: builder.query({
            query: (userId) => `/posts/user/${userId}`

        }),
        getPostComments: builder.query({
            query: (userId) => `/posts/${userId}/comments`

        }),
    })
})

export const { useGetAllPostsQuery, 
    useGetSinglePostQuery, 
    useSearchPostQuery, 
    useGetUserPostsQuery, 
    useGetPostCommentsQuery } = postsApiSlice