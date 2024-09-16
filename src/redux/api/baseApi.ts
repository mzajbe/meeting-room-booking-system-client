import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/" }),
  endpoints: (builder) => ({
    fetchRooms: builder.query({
      query: () => "/rooms",
    }),
    signUp: builder.mutation({
      query: (userData) => ({
        url: "/auth/signup", // API endpoint for sign-up
        method: "POST",
        body: userData,
      }),
    }),
  }),
});

export const { useFetchRoomsQuery, useSignUpMutation } = baseApi;
