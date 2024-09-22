import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/",
    credentials: "include",
  }),
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
    fetchAvailableSlots: builder.query({
      query: (date) => `/slots?date=${date}`,
    }),

    submitBooking: builder.mutation({
      query: (bookingData) => ({
        url: "/bookings",
        method: "POST",
        body: bookingData,
      }),
    }),
  }),
});

export const { useFetchRoomsQuery, useSignUpMutation,useFetchAvailableSlotsQuery,useSubmitBookingMutation } = baseApi;
