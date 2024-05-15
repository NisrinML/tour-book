import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loginInfo: 
  {
  userName:'',
  password:'',
},
};

const presenterSlice = createSlice({
  name:"presenter",
  initialState,
    reducers: { 
      setUserName: (state, action) => {
        state.loginInfo.userName = action.payload;
      },
      setPassword: (state, action) => {
        state.loginInfo.password = action.payload;
      },
    },
});
export const {setUserName,setPassword}=presenterSlice.actions
export default presenterSlice.reducer;