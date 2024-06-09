import { createSlice } from "@reduxjs/toolkit";

const initialState = {
 id:'',
 name:'',
 address:'',
 evaluation:'',
 status:'',
 logo:'',
 joiningDate:'',
 situation:'',
 mobile:'',
 userId:'',
 tour:{
  id:'',
  title:'',
  startDate:'',
  endDate:'',
  extraCost:'',
  totalCost:'',
  seatCost:'',
  transportationCost:'',
  description:'',
  numOfSeat:'',
  note:'',
  startingPlace:'',
  XstartingPlace:'',
  YstartingPlace:'',
  likeCounter:'',
  disLikeCounter:'',
  tourPoints:[{id:'',position:'',description:'',arrivalTime:'',leavingTime:'',axisX:'',axisY:'',
  offerRequest:{id:'',quantity:'',description:'',offerId:''}}],
  tourAttachment:[{id:'',attachment:'',type:''}],
  clientRequest:[{id:'',numOfSeat:'',status:'',clientId:'',client:{name:'',mobile:''}}],
  comments:{id:'',comment:'',feelings:'',clientId:''}
 }
};

const orgnizerSlice = createSlice({
  name: "orgnizer",
  initialState,
  reducers: {
    addPoint: (state, action) => {
      state.tour.tourPoints =[...state.tour.tourPoints,action.payload] ;
    },
  },
});
export const { addPoint } = orgnizerSlice.actions
export default orgnizerSlice.reducer;