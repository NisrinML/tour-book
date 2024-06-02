import { createSlice } from "@reduxjs/toolkit";
import restaurant1 from '../../assets/images/restaurant1.png'
import restaurant2 from '../../assets/images/restaurant2.png'
import restaurant3 from '../../assets/images/restaurant3.png'
const initialState = {
  
  profileInfo:
  {
  size:'100 Persons',
  website:'facebook',
  services:"Swimming pool \n Wifi \n restaurant \n Hotel",
  images:[restaurant1,restaurant2,restaurant3]
}
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
      setSize: (state, action) => {
        state.profileInfo.size = action.payload;
      },
      setWebsite: (state, action) => {
        state.profileInfo.website = action.payload;
      },
      setServices: (state, action) => {
        state.profileInfo.services = action.payload;
      },
      setImages: (state, action) => {
        state.profileInfo.services = action.payload;
      },
      addImage: (state, action) => {
        state.profileInfo.images.push(action.payload);
      },
      removeImage: (state, action) => {
        state.profileInfo.images = state.profileInfo.images.filter((image) => image !== action.payload);
      },
    },
});
export const {setUserName,setPassword, setSize, setWebsite, setServices,setImages}=presenterSlice.actions
export default presenterSlice.reducer;