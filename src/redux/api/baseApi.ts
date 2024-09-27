import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/",
    credentials: "include",
  }),
  endpoints: (builder) => ({
    fetchUserById: builder.query({
      query: (userId) => `/auth/user/${userId}`,
    }),
    fetchBookingsByUser: builder.query({
      query: (userId) => `/bookings/user/${userId}`,
    }),
    fetchUserByEmail: builder.query({
      query: (email) => `/auth/getUserByEmail/${email}`,
    }),
    // Promote user to admin
    promoteUserToAdmin: builder.mutation({
      query: (id) => ({
        url: `/auth/promoteToAdmin/${id}`,
        method: "PUT",
      }),
    }),
    fetchRooms: builder.query({
      query: () => "/rooms",
    }),

    fetchRoom: builder.query({
      query: (roomId) => `/rooms/${roomId}`, // Add this line to fetch a single room
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
        url: "/bookings/create",
        method: "POST",
        body: bookingData,
      }),
    }),
    // Booking Management Endpoints
    fetchBookings: builder.query({
      query: () => "/bookings/getb",
      providesTags: ["Bookings"],
    }),

    approveBooking: builder.mutation({
      query: (bookingId) => ({
        url: `/bookings/bookings/${bookingId}`,
        method: "PUT",
        body: { isConfirmed: "confirmed" },
      }),
      invalidatesTags: ["Bookings"],
    }),

    rejectBooking: builder.mutation({
      query: (bookingId) => ({
        url: `/bookings/bookings/reject/${bookingId}`,
        method: "PUT",
      }),
      invalidatesTags: ["Bookings"],
    }),
    deleteBooking: builder.mutation({
      query: (bookingId) => ({
        url: `/bookings/bookings/${bookingId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Bookings"],
    }),
  }),
});

export const {
  useFetchUserByIdQuery,
  useFetchBookingsByUserQuery,
  useFetchUserByEmailQuery,


  usePromoteUserToAdminMutation,

  useFetchRoomsQuery,
  useFetchRoomQuery,
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

  useFetchBookingsQuery,
  useApproveBookingMutation,
  useRejectBookingMutation,
  useDeleteBookingMutation,
} = baseApi;
