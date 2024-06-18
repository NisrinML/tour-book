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
 },
 tours:[ {   sn:1,
  id: 11,
  title: 'Black Friday',
  startDate: '5/5/2024', startTime: '2:20 A.M',
  totalCost: 500,
  seatCost: 15,
  numOfSeat: 150,
  posted:false,
  status:true,
  clientRequest: []
},
{
  sn:2,
  id: 22,
  title: 'Summer Weekend',
  startDate: '1/6/2024', startTime: '6:00 A.M',
  totalCost: 400,
  seatCost: 10,
  numOfSeat: 200,
  posted:true,
  status:true,
  clientRequest: [{ numOfSeat: 3, status: 'accept' }, { numOfSeat: 5, status: 'accept' }, { numOfSeat: 5, status: 'wait' }, { numOfSeat: 2, status: 'refuse' },]
},
{sn:3,
  id: 23,
  title: 'Spring is Comming',
  startDate: '1/3/2024', startTime: '8:30 A.M',
  totalCost: 350,
  seatCost: 10,
  numOfSeat: 100,
  posted:false,
  status:false,
  clientRequest: []
},]
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
    updateTour:(state,action)=>{
      state.tour=state.tours.filter(tour=>tour.id==action.payload)
    },
    deleteTour:(state,action)=>{
      state.tours=state.tours.filter(tour=> tour.id!=action.payload)
      //delete api
    }
  },
});
export const { addPoint ,setFinalTourDetails,setFirstTourDetails,changeOrderStatus,updateTour,deleteTour} = orgnizerSlice.actions
export default orgnizerSlice.reducer;