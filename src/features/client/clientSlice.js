import { createSlice } from "@reduxjs/toolkit";
import axios from 'axios';
import { useState } from "react";
const initialState = {
  id: 1,
  gender: '',
  name: 'Rolana',
  middleName: '',
  lastName: 'Kamaria',
  mobile: '0940580349',
  birthday: '2024-05-11',
  clientRequest: [{ id: '1', numOfSeat: '5', status: 'accept', clientId: '1', client: { name: '', lastName: '', mobile: '' } }],

  notifications: ['Rolana Kamaria invite you to join her in the Extraordinary Experiece tour',
    'Wajeeh Rabahie invite you to join him in the Tour Around The World tour',
    'Nisreen Melhem invite you to join her in the Discover The World tour',
    'Takla Zidan  invite you to join her in the Tour Around The World tour',
    'Abboud Assaf  invite you to join him in the Extraordinary Experiece tour',
    'Maen Melhem  invite you to join him in the Discover The World tour',
    'Nagham Melhem  invite you to join her in the Mountains and Rivers tour'
  ,],

  clientTours: [
    {
      id:11,
      title:'Discover The World tour',
      status:'wait',
      meetingPoint:'Homs Hotel',
      startDate:'09-09-2024',
      endDate:'10-09-2024',
      meetingTime:'12:00 PM',
      totalTime:'14 Hours',
      price:'100$',
      numberOfSeats:'7',
      tourPoints: [
        {
          id: 1, 
          name: "مطعم ماء زهر", 
          lat: 34.7207443, 
          lng: 36.7173883, 
          url: '/make-special-tour/presenter-offers', 
          size: 120, 
          select: true, 
          status: 'accept', 
          position: 'مطعم ماء زهر', 
          requirement:[{title:"Shoes"},{title:"Jacket"}],
          activity:[{title:'Eat'},{title:'Relax'}],
          arrivalTime: '9:00 AM',
           leavingTime: '12:00 PM', 
          offerRequest: { id: '', arriveTime: '', leaveTime: '', quantity: '', description: '', offerId: '' },
          offers: [
            {
              id: 1,
              title: "Friday Lunch",
              startDate: "5-5-2024",
              endDate: "15-5-2024",
              startTime: "2:00 P.M",
              endTime: "6:00 P.M",
              pricePerOne: "15",
              description: "burger - pepsi",
              address: "",
              offerAttatchment: [{ id: '', attachment: '', type: '' }],
            }, {
              id: 2,
              title: "Sunday Lunch",
              startDate: "5/5/2024",
              endDate: "15/5/2024",
              startTime: "2:00 P.M",
              endTime: "6:00 P.M",
              pricePerOne: "15",
              description: "burger - pepsi",
              address: "",
              offerAttatchment: [{ id: '', attachment: '', type: '' }],
            },
          ]
        },
        {
          id: 2,
          name: "فندق السفير", 
          lat: 34.776043258519174, 
          lng: 36.6026282253172, 
          url: '/make-special-tour/presenter-offers', 
          size: 60, 
          select: true, 
          status: 'wait', 
          position: 'فندق السفير', 
          requirement:[{title:"Shoes"},{title:"Jacket"}],
          activity:[{title:'Eat'},{title:'Relax'}],
          arrivalTime: '12:30 PM', 
          leavingTime: '4:00 PM', 
          offerRequest: { id: '', arriveTime: '', leaveTime: '', quantity: '', description: '', offerId: '' },
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
              offerAttatchment: [{ id: '', attachment: '', type: '' }],
            }, {
              id: 2,
              title: "Sunday Lunch",
              startDate: "5/5/2024",
              endDate: "15/5/2024",
              startTime: "2:00 P.M",
              endTime: "6:00 P.M",
              pricePerOne: "15",
              description: "burger - pepsi",
              address: "",
              offerAttatchment: [{ id: '', attachment: '', type: '' }],
            },
          ]
        },
        {
          id: 3, 
          name: "نادي الأطباء والمهندسين", 
          lat: 34.71017331715748, 
          lng: 36.639553309802125, 
          url: '/make-special-tour/presenter-offers', 
          size: 20, 
          status: 'refuse', 
          select: false, 
          position: 'نادي الأطباء والمهندسين', 
          requirement:[{title:"Shoes"},{title:"Jacket"}],
          activity:[{title:'Eat'},{title:'Relax'}],
          arrivalTime: '4:30 PM', 
          leavingTime: '6:30 PM', 
          offerRequest: { id: '', arriveTime: '', leaveTime: '', quantity: '', description: '', offerId: '' },
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
              offerAttatchment: [{ id: '', attachment: '', type: '' }],
            }, {
              id: 2,
              title: "Sunday Lunch",
              startDate: "5/5/2024",
              endDate: "15/5/2024",
              startTime: "2:00 P.M",
              endTime: "6:00 P.M",
              pricePerOne: "15",
              description: "burger - pepsi",
              address: "",
              offerAttatchment: [{ id: '', attachment: '', type: '' }],
            },
          ]
        },
        {
          id: 4, 
          name: "فندق حمص الكبير", 
          lat: 34.71017331715748, 
          lng: 36.639553309802125, 
          url: '/make-special-tour/presenter-offers', 
          size: 20, 
          status: 'refuse', 
          select: false, 
          position: 'فندق حمص الكبير', 
          requirement:[{title:"Shoes"},{title:"Jacket"}],
          activity:[{title:'Eat'},{title:'Relax'}],
          arrivalTime: '7:00 PM', 
          leavingTime: '10:00 PM', 
          offerRequest: { id: '', arriveTime: '', leaveTime: '', quantity: '', description: '', offerId: '' },
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
              offerAttatchment: [{ id: '', attachment: '', type: '' }],
            }, {
              id: 2,
              title: "Sunday Lunch",
              startDate: "5/5/2024",
              endDate: "15/5/2024",
              startTime: "2:00 P.M",
              endTime: "6:00 P.M",
              pricePerOne: "15",
              description: "burger - pepsi",
              address: "",
              offerAttatchment: [{ id: '', attachment: '', type: '' }],
            },
          ]
        }
      ],
    },
    {
      id:1,
      title:'Mountains and oceans',
      status:'accepted',
      meetingPoint:'Homs clock',
      startDate:'04-04-2024',
      endDate:'10-08-2024',
      meetingTime:'09:00 PM',
      totalTime:'14 Hours',
      price:'100$',
      numberOfSeats:'7',
      tourPoints: [
        {
          id: 1, 
          name: "مطعم ماء زهر", 
          lat: 34.7207443, 
          lng: 36.7173883, 
          url: '/make-special-tour/presenter-offers', 
          size: 120, 
          select: true, 
          status: 'accept', 
          position: 'مطعم ماء زهر', 
          requirement:[{title:"Shoes"},{title:"Jacket"}],
          activity:[{title:'Eat'},{title:'Relax'}],
          arrivalTime: '9:00 AM',
           leavingTime: '12:00 PM', 
          offerRequest: { id: '', arriveTime: '', leaveTime: '', quantity: '', description: '', offerId: '' },
          offers: [
            {
              id: 1,
              title: "Friday Lunch",
              startDate: "5-5-2024",
              endDate: "15-5-2024",
              startTime: "2:00 P.M",
              endTime: "6:00 P.M",
              pricePerOne: "15",
              description: "burger - pepsi",
              address: "",
              offerAttatchment: [{ id: '', attachment: '', type: '' }],
            }, {
              id: 2,
              title: "Sunday Lunch",
              startDate: "5/5/2024",
              endDate: "15/5/2024",
              startTime: "2:00 P.M",
              endTime: "6:00 P.M",
              pricePerOne: "15",
              description: "burger - pepsi",
              address: "",
              offerAttatchment: [{ id: '', attachment: '', type: '' }],
            },
          ]
        },
        {
          id: 2, 
          name: "فندق السفير", 
          lat: 34.776043258519174, 
          lng: 36.6026282253172, 
          url: '/make-special-tour/presenter-offers', 
          size: 60, 
          select: true, 
          status: 'wait', 
          position: 'فندق السفير', 
          requirement:[{title:"Shoes"},{title:"Jacket"}],
          activity:[{title:'Eat'},{title:'Relax'}],
          arrivalTime: '12:30 PM', 
          leavingTime: '4:00 PM', 
          offerRequest: { id: '', arriveTime: '', leaveTime: '', quantity: '', description: '', offerId: '' },
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
              offerAttatchment: [{ id: '', attachment: '', type: '' }],
            }, {
              id: 2,
              title: "Sunday Lunch",
              startDate: "5/5/2024",
              endDate: "15/5/2024",
              startTime: "2:00 P.M",
              endTime: "6:00 P.M",
              pricePerOne: "15",
              description: "burger - pepsi",
              address: "",
              offerAttatchment: [{ id: '', attachment: '', type: '' }],
            },
          ]
        },
        {
          id: 3, 
          name: "نادي الأطباء والمهندسين", 
          lat: 34.71017331715748, 
          lng: 36.639553309802125, 
          url: '/make-special-tour/presenter-offers', 
          size: 20, 
          status: 'refuse', 
          select: false, 
          position: 'نادي الأطباء والمهندسين', 
          requirement:[{title:"Shoes"},{title:"Jacket"}],
          activity:[{title:'Eat'},{title:'Relax'}],
          arrivalTime: '4:30 PM', 
          leavingTime: '6:30 PM', 
          offerRequest: { id: '', arriveTime: '', leaveTime: '', quantity: '', description: '', offerId: '' },
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
              offerAttatchment: [{ id: '', attachment: '', type: '' }],
            }, {
              id: 2,
              title: "Sunday Lunch",
              startDate: "5/5/2024",
              endDate: "15/5/2024",
              startTime: "2:00 P.M",
              endTime: "6:00 P.M",
              pricePerOne: "15",
              description: "burger - pepsi",
              address: "",
              offerAttatchment: [{ id: '', attachment: '', type: '' }],
            },
          ]
        },
        {
          id: 4, 
          name: "فندق حمص الكبير", 
          lat: 34.71017331715748, 
          lng: 36.639553309802125, 
          url: '/make-special-tour/presenter-offers', 
          size: 20, 
          status: 'refuse', 
          select: false, 
          position: 'فندق حمص الكبير', 
          requirement:[{title:"Shoes"},{title:"Jacket"}],
          activity:[{title:'Eat'},{title:'Relax'}],
          arrivalTime: '7:00 PM', 
          leavingTime: '10:00 PM', 
          offerRequest: { id: '', arriveTime: '', leaveTime: '', quantity: '', description: '', offerId: '' },
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
              offerAttatchment: [{ id: '', attachment: '', type: '' }],
            }, {
              id: 2,
              title: "Sunday Lunch",
              startDate: "5/5/2024",
              endDate: "15/5/2024",
              startTime: "2:00 P.M",
              endTime: "6:00 P.M",
              pricePerOne: "15",
              description: "burger - pepsi",
              address: "",
              offerAttatchment: [{ id: '', attachment: '', type: '' }],
            },
          ]
        }
      ],
    }, 
    {
      id:2,
      title:'Discover The World tour',
      status:'refused',
      meetingPoint:'Homs Hotel',
      startDate:'09-09-2024',
      endDate:'10-09-2024',
      meetingTime:'12:00 PM',
      totalTime:'14 Hours',
      price:'100$',
      numberOfSeats:'7',
      tourPoints: [
        {
          id: 1, 
          name: "مطعم ماء زهر", 
          lat: 34.7207443, 
          lng: 36.7173883, 
          url: '/make-special-tour/presenter-offers', 
          size: 120, 
          select: true, 
          status: 'accept', 
          position: 'مطعم ماء زهر', 
          requirement:[{title:"Shoes"},{title:"Jacket"}],
          activity:[{title:'Eat'},{title:'Relax'}],
          arrivalTime: '9:00 AM',
           leavingTime: '12:00 PM', 
          offerRequest: { id: '', arriveTime: '', leaveTime: '', quantity: '', description: '', offerId: '' },
          offers: [
            {
              id: 1,
              title: "Friday Lunch",
              startDate: "5-5-2024",
              endDate: "15-5-2024",
              startTime: "2:00 P.M",
              endTime: "6:00 P.M",
              pricePerOne: "15",
              description: "burger - pepsi",
              address: "",
              offerAttatchment: [{ id: '', attachment: '', type: '' }],
            }, {
              id: 2,
              title: "Sunday Lunch",
              startDate: "5/5/2024",
              endDate: "15/5/2024",
              startTime: "2:00 P.M",
              endTime: "6:00 P.M",
              pricePerOne: "15",
              description: "burger - pepsi",
              address: "",
              offerAttatchment: [{ id: '', attachment: '', type: '' }],
            },
          ]
        },
        {
          id: 2, name: "فندق السفير", 
          lat: 34.776043258519174, 
          lng: 36.6026282253172, 
          url: '/make-special-tour/presenter-offers', 
          size: 60, 
          select: true, 
          status: 'wait', 
          position: 'فندق السفير', 
          requirement:[{title:"Shoes"},{title:"Jacket"}],
          activity:[{title:'Eat'},{title:'Relax'}],
          arrivalTime: '12:30 PM', 
          leavingTime: '4:00 PM', 
          offerRequest: { id: '', arriveTime: '', leaveTime: '', quantity: '', description: '', offerId: '' },
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
              offerAttatchment: [{ id: '', attachment: '', type: '' }],
            }, {
              id: 2,
              title: "Sunday Lunch",
              startDate: "5/5/2024",
              endDate: "15/5/2024",
              startTime: "2:00 P.M",
              endTime: "6:00 P.M",
              pricePerOne: "15",
              description: "burger - pepsi",
              address: "",
              offerAttatchment: [{ id: '', attachment: '', type: '' }],
            },
          ]
        },
        {
          id: 3, 
          name: "نادي الأطباء والمهندسين", 
          lat: 34.71017331715748, 
          lng: 36.639553309802125, 
          url: '/make-special-tour/presenter-offers', 
          size: 20, 
          status: 'refuse', 
          select: false, 
          position: 'نادي الأطباء والمهندسين', 
          requirement:[{title:"Shoes"},{title:"Jacket"}],
          activity:[{title:'Eat'},{title:'Relax'}],
          arrivalTime: '4:30 PM', 
          leavingTime: '6:30 PM', 
          offerRequest: { id: '', arriveTime: '', leaveTime: '', quantity: '', description: '', offerId: '' },
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
              offerAttatchment: [{ id: '', attachment: '', type: '' }],
            }, {
              id: 2,
              title: "Sunday Lunch",
              startDate: "5/5/2024",
              endDate: "15/5/2024",
              startTime: "2:00 P.M",
              endTime: "6:00 P.M",
              pricePerOne: "15",
              description: "burger - pepsi",
              address: "",
              offerAttatchment: [{ id: '', attachment: '', type: '' }],
            },
          ]
        },
        {
          id: 4, 
          name: "فندق حمص الكبير", 
          lat: 34.71017331715748, 
          lng: 36.639553309802125, 
          url: '/make-special-tour/presenter-offers', 
          size: 20, 
          status: 'refuse', 
          select: false, 
          position: 'فندق حمص الكبير', 
          requirement:[{title:"Shoes"},{title:"Jacket"}],
          activity:[{title:'Eat'},{title:'Relax'}],
          arrivalTime: '7:00 PM', 
          leavingTime: '10:00 PM', 
          offerRequest: { id: '', arriveTime: '', leaveTime: '', quantity: '', description: '', offerId: '' },
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
              offerAttatchment: [{ id: '', attachment: '', type: '' }],
            }, {
              id: 2,
              title: "Sunday Lunch",
              startDate: "5/5/2024",
              endDate: "15/5/2024",
              startTime: "2:00 P.M",
              endTime: "6:00 P.M",
              pricePerOne: "15",
              description: "burger - pepsi",
              address: "",
              offerAttatchment: [{ id: '', attachment: '', type: '' }],
            },
          ]
        }
      ],
    },
  
  ],

  tours: [{
    sn: 1,
    orgnizerId: 2,
    id: 11,
    title: 'Black Friday',
    startDate: '5/5/2024', startTime: '2:20 A.M',
    totalCost: 500,
    seatCost: 15,
    numOfSeat: 150,
    posted: false,
    status: true,
    clientRequest: [],
    likeCounter: 400,
    disLikeCounter: 200,
    comments: [{ id: 1, comment: 'Great post!', feelings: '', clientId: '' }, { id: 2, comment: 'I really enjoyed this.', feelings: '', clientId: '' }, { id: 3, comment: 'Interesting perspective.', feelings: '', clientId: '' }],
    description: `Join us on an immersive dining experience as we take you on a tour of some of the best restaurants in the city. Over the course of 3-4 hours, you'll visit 4-5 carefully curated establishments, sampling signature dishes and learning about the unique culinary concepts and histories behind each one.The tour begins at a classic bistro known for its fresh, locally-sourced ingredients and French-inspired fare. You'll start with a tasting of the restaurant's renowned house-made charcuterie and a glass of crisp white wine.
Next, we'll head to a family-owned Italian trattoria tucked away on a quiet side street. Here you'll savor a regional pasta dish and a seasonal salad while the chef shares insights into their time-honored recipes and techniques.
 `,
    usersLike: [12, 13, 22, 33, 1],
    usersDislike: [2, 3, 4, 5]
  },

  {
    sn: 2,
    id: 22,
    orgnizerId: 3,
    title: 'Summer Weekend',
    startDate: '1/6/2024', startTime: '6:00 A.M',
    totalCost: 400,
    seatCost: 10,
    numOfSeat: 200,
    posted: true,
    status: true,
    clientRequest: [{ numOfSeat: 3, status: 'accept' }, { numOfSeat: 5, status: 'accept' }, { numOfSeat: 5, status: 'wait' }, { numOfSeat: 2, status: 'refuse' },]
    ,
    likeCounter: 450,
    disLikeCounter: 50,
    comments: [],
    description: `Join us on an immersive dining experience as we take you on a tour of some of the best restaurants in the city. Over the course of 3-4 hours, you'll visit 4-5 carefully curated establishments, sampling signature dishes and learning about the unique culinary concepts and histories behind each one.The tour begins at a classic bistro known for its fresh, locally-sourced ingredients and French-inspired fare. You'll start with a tasting of the restaurant's renowned house-made charcuterie and a glass of crisp white wine.
Next, we'll head to a family-owned Italian trattoria tucked away on a quiet side street. Here you'll savor a regional pasta dish and a seasonal salad while the chef shares insights into their time-honored recipes and techniques.
 `,
    usersLike: [12, 13, 22, 33],
    usersDislike: [2, 3, 4, 5, 9]
  },
  {
    sn: 3,
    id: 23,
    orgnizerId: 2,
    title: 'Spring is Comming',
    startDate: '1/3/2024', startTime: '8:30 A.M',
    totalCost: 350,
    seatCost: 10,
    numOfSeat: 100,
    posted: false,
    status: false,
    clientRequest: [],
    likeCounter: 300,
    disLikeCounter: 100,
    comments: [],
    description: `Join us on an immersive dining experience as we take you on a tour of some of the best restaurants in the city. Over the course of 3-4 hours, you'll visit 4-5 carefully curated establishments, sampling signature dishes and learning about the unique culinary concepts and histories behind each one.The tour begins at a classic bistro known for its fresh, locally-sourced ingredients and French-inspired fare. You'll start with a tasting of the restaurant's renowned house-made charcuterie and a glass of crisp white wine.
Next, we'll head to a family-owned Italian trattoria tucked away on a quiet side street. Here you'll savor a regional pasta dish and a seasonal salad while the chef shares insights into their time-honored recipes and techniques.
 `,
    usersLike: [12, 13, 22, 33],
    usersDislike: [2, 3, 4, 5, 1]
  },],
  selected: {
    orgnizerId: 2,
    tourId: 0
  },

};

const clientSlice = createSlice({
  name: "client",
  initialState,
  reducers: {
    cancelTour: (state, action) => {
      state.clientTours = state.clientTours.filter(tour => tour.id !== action.payload.id);
    },
    setNumberOfSeats: (state,action) =>{
      state.clientRequest= [...state.clientRequest,
        { id: '2', numOfSeat: action.payload, status: 'accept', clientId: '5', client: { name: '', lastName: '', mobile: '' } }
      ]
     },
    selecteOrgnizerId: (state, action) => {
      state.selected.orgnizerId = action.payload;
    },
    selecteTourId: (state, action) => {
      state.selected.tourId = action.payload;
    },
    addComment: (state, action) => {
      const tour = state.tours.filter(tour => tour.id == action.payload.tourId)
      var comments = tour[0].comments
      comments = [...comments, { id: Math.random().toString(36).substring(2, 10), comment: action.payload.comment, clientId: state.id }]
      tour[0].comments = comments
      //call api for comments we have in action tour id and comment and we use from here client id
    },

    registerUser: (state, action) => { 
      state.name = action.payload.user.name;
      state.middleName = action.payload.user.middleName;
      state.lastName = action.payload.user.lastName;
      state.mobile = action.payload.user.mobile;
      state.birthday = action.payload.user.birthday;
      state.gender = action.payload.user.gender;
    },
    editRegisterInfo: (state, action) => {
      state.name = action.payload.clientInfo.name;
      state.lastName = action.payload.clientInfo.lastName;
      state.mobile = action.payload.clientInfo.mobile;
      state.birthday = action.payload.clientInfo.birthday;
    },
    likeTour:(state,action)=>{
      //call api for like sent clientId & tourId
    },
    unlikeTour:(state,action)=>{
      //call api for unlike sent clientId & tourId
    },
    disLikeTour:(state,action)=>{
      //call api for dislike sent clientId & tourId
    },
    undisLikeTour:(state,action)=>{
      //call api for undislike sent clientId & tourId
    },
    
  },
});

export const {cancelTour, setNumberOfSeats,selecteOrgnizerId, selecteTourId, addComment, registerUser, likeTour,unlikeTour,disLikeTour,undisLikeTour,editRegisterInfo } = clientSlice.actions

export default clientSlice.reducer;