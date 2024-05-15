import { createSlice } from "@reduxjs/toolkit";

const initialState = {
 password:'1234',
 email:'www.***@gmail.com',
};

const orgnizerSlice = createSlice({
  name:"orgnizer",
  initialState,
  reducers: { 
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    setEmail:(state,action)=>{
      state.email=action.payload
    }
  },
});
export const {setPassword,setEmail}=orgnizerSlice.actions
export default orgnizerSlice.reducer;