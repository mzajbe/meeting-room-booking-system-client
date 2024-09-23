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
    createRoom: builder.mutation({
      query: (newRoom) => ({
        url: "/rooms",
        method: "POST",
        body: newRoom,
      }),
    }),
    updateRoom: builder.mutation({
      query: ({ id, ...updatedRoom }) => ({
        url: `/rooms/${id}`,
        method: "PUT",
        body: updatedRoom,
      }),
    }),
    deleteRoom: builder.mutation({
      query: (id) => ({
        url: `/rooms/${id}`,
        method: "DELETE",
      }),
    }),
    signUp: builder.mutation({
      query: (userData) => ({
        url: "/auth/signup", // API endpoint for sign-up
        method: "POST",
        body: userData,
      }),
    }),
    fetchSlots: builder.query({
      query: () => "/slots/availability",
    }),

    createSlot: builder.mutation({
      query: (newSlot) => ({
        url: "/slots/create",
        method: "POST",
        body: newSlot,
      }),
    }),

    updateSlot: builder.mutation({
      query: ({ id, ...updatedSlot }) => ({
        url: `/slots/${id}`,
        method: "PUT",
        body: updatedSlot,
      }),
    }),

    deleteSlot: builder.mutation({
      query: (id) => ({
        url: `/slots/${id}`,
        method: "DELETE",
      }),
    }),

    fetchAvailableSlots: builder.query({
      query: (date) => `/slots/availability?date=${date}`,
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

export const {
  useFetchRoomsQuery,
  useSignUpMutation,
  useFetchAvailableSlotsQuery,
  useSubmitBookingMutation,
  useCreateRoomMutation,
  useUpdateRoomMutation,
  useDeleteRoomMutation,
  useFetchSlotsQuery,
  useCreateSlotMutation,
  useUpdateSlotMutation,
  useDeleteSlotMutation,
} = baseApi;
