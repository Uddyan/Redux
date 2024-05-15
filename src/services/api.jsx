import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const api = createApi({

    reducerPath: "api",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/" }),
    endpoints: (builder) => ({
        getPosts: builder.query({
            query: () => "posts",
        }),
        getPost: builder.query({
            query: (id) => `posts/${id}`,
        }),
        createPost: builder.mutation({
            query: (newPost) => ({
                url: `./posts`,
                method: "POST",
                body: newPost,
            }),
        }),
        deletePost: builder.mutation({
            query: (id) => ({
                url: `./posts/${id}`,
                method: "DELETE",
            }),
        }), 
        updatePost: builder.mutation({
            query: (id,...updatePost) => ({
                url: `./posts/${id}`,
                method: "PUT",
                body: updatePost,
            }),
        }),
    }),
});

export const { useGetPostsQuery, useGetPostQuery,useCreatePostMutation,useDeletePostMutation, useUpdatePostMutation } = api;