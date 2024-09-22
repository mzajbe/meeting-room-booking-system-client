// src/redux/slices/bookingSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface BookingState {
  selectedSlot: string | null;
}

const initialState: BookingState = {
  selectedSlot: null,
};

const bookingSlice = createSlice({
  name: 'booking',
  initialState,
  reducers: {
    selectSlot: (state, action: PayloadAction<string>) => {
      state.selectedSlot = action.payload;
    },
  },
});

export const { selectSlot } = bookingSlice.actions;
export default bookingSlice.reducer;
