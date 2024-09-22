import { createSlice, PayloadAction } from "@reduxjs/toolkit";



interface Room {  
    id: string;  
    name: string;  
    roomNo: string;  
    floorNo: string;  
    capacity: number;  
    pricePerSlot: number;  
  }  
  
  interface RoomState {  
    rooms: Room[];  
  }  
  
  const initialState: RoomState = {  
    rooms: [],  
  };  


const roomSlice = createSlice({  
    name: 'rooms',  
    initialState,  
    reducers: {  
      createRoom(state, action: PayloadAction<Room>) {  
        state.rooms.push({ ...action.payload, id: Date.now().toString() });  
      },  
      updateRoom(state, action: PayloadAction<{ id: string; updatedRoom: Room }>) {  
        const index = state.rooms.findIndex(room => room.id === action.payload.id);  
        if (index !== -1) {  
          state.rooms[index] = { ...state.rooms[index], ...action.payload.updatedRoom };  
        }  
      },  
      deleteRoom(state, action: PayloadAction<string>) {  
        state.rooms = state.rooms.filter(room => room.id !== action.payload);  
      },  
    },  
  });

  // Export actions  
export const { createRoom, updateRoom, deleteRoom } = roomSlice.actions;  

// Selector to get all rooms  
export const selectRooms = (state: { rooms: RoomState }) => state.rooms.rooms;  

// Export reducer  
export default roomSlice.reducer;