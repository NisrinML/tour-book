import { createSlice } from "@reduxjs/toolkit";

const initialState = {
 password:'1234'
};

const orgnizerSlice = createSlice({
  name:"orgnizer",
  initialState,
  reducers: { 
    setPassword: (state, action) => {
      state.password = action.payload;
    },
  },
});
export const {setPassword}=orgnizerSlice.actions
export default orgnizerSlice.reducer;