import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

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
  startTime:'',
  endDate:'',
  extraCost:'',
  totalCost:'',
  seatCost:'',
  transportationCost:'',
  description:'',
  numOfSeat:150,
  note:'',
  startingPlace:'',
  XstartingPlace:'',
  YstartingPlace:'',
  likeCounter:'',
  disLikeCounter:'',
  posted:false,
  postedAt:false,
  tourPoints:[{id:'',position:'',description:'',arrivalTime:'',leavingTime:'',axisX:'',axisY:'',
  offerRequest:{id:'',quantity:'',description:'',offerId:''}}],
  tourAttachment:[{id:'',attachment:'',type:''}],
  clientRequest:[{id:'',numOfSeat:'',status:'',clientId:'',client:{name:'',lastName:'',mobile:''}}],
  comments:{id:'',comment:'',feelings:'',clientId:''},
  HMdistance:0,
  KMdistance:0
 }
};

const orgnizerSlice = createSlice({
  name: "orgnizer",
  initialState,
  reducers: {
    addPoint: (state, action) => {
      state.tour.tourPoints =[...state.tour.tourPoints,action.payload] ;
    },
    setFinalTourDetails:(state,action)=>{
      state.tour.startDate=action.payload.startDate
      state.tour.extraCost=action.payload.externalCost
      state.tour.totalCost=action.payload.totalCost
      state.tour.seatCost=action.payload.seatPrice
      state.tour.transportationCost=action.payload.transportCost
      state.tour.numOfSeat=action.payload.numOfSeat
      state.tour.note=action.payload.notes
      state.tour.startTime=action.payload.startTime
    },
    setFirstTourDetails:(state,action)=>{
      state.tour.title=action.payload.title
      state.tour.KMdistance=action.payload.KMdistance
      state.tour.HMdistance=action.payload.HMdistance
    },
    changeOrderStatus:(state,action)=>{
        state.tour.clientRequest[id==action.payload.id].status=action.payload.status
    },
  },
});
export const { addPoint ,setFinalTourDetails,setFirstTourDetails,changeOrderStatus} = orgnizerSlice.actions
export default orgnizerSlice.reducer;