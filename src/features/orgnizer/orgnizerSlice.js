import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

const initialState = {
 id:'',
 name:'asfas',
 address:'',
 evaluation:'',
 status:'',
 logo:'',
 joiningDate:'',
 situation:'',
 mobile:'23464366',
 userId:'',
 tour:{
  id:'',
  title:'',
  startDate:'',
  startTime:'',
  endDate:'',
  extraCost:'',
  totalCost:'500',
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
  tourPoints:[    
    {id:1,name:"مطعم ماء زهر",lat:34.7207443, lng:36.7173883,url:'/make-special-tour/presenter-offers',size:120,select:true,status:'',position:'',description:'you need to bring your jacket',arrivalTime:'2:00 PM',leavingTime:'4:00 PM',  offerRequest:{id:'',arriveTime:'',leaveTime:'',quantity:'',description:'',offerId:''},
    offers: [
      {
        id: 1,
        title: "Friday Lunch",
        startDate: "5/5/2024",
        endDate: "15/5/2024",
        startTime: "2:00 P.M",
        endTime: "6:00 P.M",
        pricePerOne: "15",
        description: "burger - pepsi",
        address: "",
        offerAttatchment: [{ id: '', attachment:'', type: '' }],
      },{
        id: 2,
        title: "Sunday Lunch",
        startDate: "5/5/2024",
        endDate: "15/5/2024",
        startTime: "2:00 P.M",
        endTime: "6:00 P.M",
        pricePerOne: "15",
        description: "burger - pepsi",
        address: "",
        offerAttatchment: [{ id: '', attachment:'', type: '' }],
      },
    ]},
    {id:2,name:"فندق السفير",lat:34.776043258519174, lng:36.6026282253172,url:'/make-special-tour/presenter-offers',size:60,select:true,status:'',position:'',description:'you need sport shoze',arrivalTime:'6:00 PM',leavingTime:'8:00 PM',  offerRequest:{id:'',arriveTime:'',leaveTime:'',quantity:'',description:'',offerId:''},
    offers: [
      {
        id: 1,
        title: "Friday Lunch",
        startDate: "5/5/2024",
        endDate: "15/5/2024",
        startTime: "2:00 P.M",
        endTime: "6:00 P.M",
        pricePerOne: "15",
        description: "burger - pepsi",
        address: "",
        offerAttatchment: [{ id: '', attachment:'', type: '' }],
      },{
        id: 2,
        title: "Sunday Lunch",
        startDate: "5/5/2024",
        endDate: "15/5/2024",
        startTime: "2:00 P.M",
        endTime: "6:00 P.M",
        pricePerOne: "15",
        description: "burger - pepsi",
        address: "",
        offerAttatchment: [{ id: '', attachment:'', type: '' }],
      },
    ]},
    {id:3,name:"نادي الأطباء والمهندسين",lat:34.71017331715748, lng:36.639553309802125,url:'/make-special-tour/presenter-offers',size:20,status:'',select:false,position:'',description:'10:00 AM',arrivalTime:'1:00 PM',leavingTime:'',  offerRequest:{id:'',arriveTime:'',leaveTime:'',quantity:'',description:'',offerId:''},
    offers: [
      {
        id: 1,
        title: "Friday Lunch",
        startDate: "5/5/2024",
        endDate: "15/5/2024",
        startTime: "2:00 P.M",
        endTime: "6:00 P.M",
        pricePerOne: "15",
        description: "burger - pepsi",
        address: "",
        offerAttatchment: [{ id: '', attachment:'', type: '' }],
      },{
        id: 2,
        title: "Sunday Lunch",
        startDate: "5/5/2024",
        endDate: "15/5/2024",
        startTime: "2:00 P.M",
        endTime: "6:00 P.M",
        pricePerOne: "15",
        description: "burger - pepsi",
        address: "",
        offerAttatchment: [{ id: '', attachment:'', type: '' }],
      },
    ]}
],
  tourAttachment:[{id:'',attachment:'',type:''}],
  clientRequest:[{id:'',numOfSeat:'',status:'',clientId:'',client:{name:'',lastName:'',mobile:''}}],
  comments:[{id:'',comment:'',feelings:'',clientId:''}],
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
  clientRequest: [],
  likeCounter:400,
  disLikeCounter:200,
  comments:[{id:1,comment:'Great post!',feelings:'',clientId:''},{id:2,comment:'I really enjoyed this.',feelings:'',clientId:''},{id:3,comment:'Interesting perspective.',feelings:'',clientId:''}],
  description:`Join us on an immersive dining experience as we take you on a tour of some of the best restaurants in the city. Over the course of 3-4 hours, you'll visit 4-5 carefully curated establishments, sampling signature dishes and learning about the unique culinary concepts and histories behind each one.The tour begins at a classic bistro known for its fresh, locally-sourced ingredients and French-inspired fare. You'll start with a tasting of the restaurant's renowned house-made charcuterie and a glass of crisp white wine.
  Next, we'll head to a family-owned Italian trattoria tucked away on a quiet side street. Here you'll savor a regional pasta dish and a seasonal salad while the chef shares insights into their time-honored recipes and techniques.
   `
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
  ,
  likeCounter:450,
  disLikeCounter:50, 
  comments:[],
  description:'Spring is Comming'
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
  clientRequest: [],
  likeCounter:300,
  disLikeCounter:100,
  comments:[],
   description:"Spring is Comming"
},],
presrnterData:{
  name:'Chill & Grill',
  id:1,
  axisX:34.71017331715748,
  axisY:36.639553309802125,
  size:500,
  email:'www.Chill&Grill@gmail.com',
  website:'Chill&Grill',
  phone:'0992448443',
  attachments:['E:/IT/React/Folder/tour-book/src/assets/images/restaurant3.png','E:/IT/React/Folder/tour-book/src/assets/images/restaurant1.png','E:/IT/React/Folder/tour-book/src/assets/images/restaurant2.png'],
  services:['Resturant','Pool','Hotel']
},
allTours:[ {   sn:1,
  id: 11,
  title: 'Black Friday',
  startDate: '5/5/2024', startTime: '2:20 A.M',
  totalCost: 500,
  seatCost: 15,
  numOfSeat: 150,
  posted:false,
  status:true,
  clientRequest: [],
  likeCounter:400,
  disLikeCounter:200,
  comments:[{id:1,comment:'Great post!',feelings:'',clientId:''},{id:2,comment:'I really enjoyed this.',feelings:'',clientId:''},{id:3,comment:'Interesting perspective.',feelings:'',clientId:''}],
  description:`Join us on an immersive dining experience as we take you on a tour of some of the best restaurants in the city. Over the course of 3-4 hours, you'll visit 4-5 carefully curated establishments, sampling signature dishes and learning about the unique culinary concepts and histories behind each one.The tour begins at a classic bistro known for its fresh, locally-sourced ingredients and French-inspired fare. You'll start with a tasting of the restaurant's renowned house-made charcuterie and a glass of crisp white wine.
  Next, we'll head to a family-owned Italian trattoria tucked away on a quiet side street. Here you'll savor a regional pasta dish and a seasonal salad while the chef shares insights into their time-honored recipes and techniques.
   `
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
  ,
  likeCounter:450,
  disLikeCounter:50, 
  comments:[],
  description:'Spring is Comming'
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
  clientRequest: [],
  likeCounter:300,
  disLikeCounter:100,
  comments:[],
   description:"Spring is Comming"
},],

selected:{
  presenterId:1,
  offerId:''
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
    updateTour:(state,action)=>{
      state.tour=state.tours.filter(tour=>tour.id==action.payload)
    },
    deleteTour:(state,action)=>{
      state.tours=state.tours.filter(tour=> tour.id!=action.payload)
      //delete tour api
    },
    deleteComment:(state,action)=>{
        var tour=state.tours.filter(tour=> tour.id==action.payload.tourId)
        console.log(action.payload)
        tour[0].comments =tour[0].comments.filter(comment=>comment.id!=action.payload.id)
      //delete comment api
    },
    updateOrgnizerData:(state,action)=>{
      state.name=action.payload.userName
      state.mobile=action.payload.phoneNumber
      
    },
    setTourPoint:(state,action)=>{
      state.tour.tourPoints=action.payload
    },
    selecteItem:(state,action)=>{
      state.selected.presenterId=action.payload.presenterId;
    },
    selectOffer:(state,action)=>{
      //api to create offer
      state.tour.tourPoints.filter(tourPoint=>tourPoint.id==action.payload.tourPoint)[0].offerRequest=action.payload.offer
      state.tour.tourPoints.filter(tourPoint=>tourPoint.id==action.payload.tourPoint)[0].select=true
      
    }
  },
});
export const { addPoint ,setFinalTourDetails,setFirstTourDetails,changeOrderStatus,
  updateTour,deleteTour,updateOrgnizerData,deleteComment,setTourPoint,selecteItem,selectOffer} = orgnizerSlice.actions
export default orgnizerSlice.reducer;