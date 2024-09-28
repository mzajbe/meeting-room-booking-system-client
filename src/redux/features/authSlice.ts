// import { createSlice } from "@reduxjs/toolkit";
// import { RootState } from "../store";


// type TAuthState = {
//     user: null | object;
//     token: null | string;
// }

// const initialState: TAuthState = {
//     user: null,
//     token: null,
// }


// const authSlice = createSlice({
//     name:'auth',
//     initialState,
//     reducers:{
//         setUser:(state,action)=>{
//             const {user,token} = action.payload;
//             state.user = user;
//             state.token = token;
//         },
//         logout : (state) => {
//             state.user = null;
//             state.token = null;
//         },
//     },

// });

// export const { setUser,logout} = authSlice.actions;
// export default authSlice.reducer;
// export const useCurrentToken = (state:RootState)=>state.auth?.token;
// export const useCurrentUser = (state:RootState)=>state.auth?.token;


import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

type TAuthState = {
  user: null | {
    userId(userId: any): { data: any; error: any; isLoading: any; };
    _id:string,
    name: string;
    role: string;
    email: string;
  }; // Define user shape here
  token: null | string;
};

const initialState: TAuthState = {
  user: null,
  token: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      const { user, token } = action.payload;
      state.user = user;
      state.token = token;
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
    },
  },
});

export const { setUser, logout } = authSlice.actions;
export default authSlice.reducer;

// Selectors to retrieve current user and token
export const useCurrentToken = (state: RootState) => state.auth?.token;
export const useCurrentUser = (state: RootState) => state.auth?.user; // Now returns the user object
