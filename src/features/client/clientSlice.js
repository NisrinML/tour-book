import { createSlice } from "@reduxjs/toolkit";
import axios from 'axios';
import { useState } from "react";
const initialState = {
  id: 1,
  gender: '',
  name: '',
  middleName: '',
  lastName: '',
  mobile: '',
  birthday: '',
  clientRequest: [{ id: '', numberOfSeat: '', status: '' }],
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
export const { selecteOrgnizerId, selecteTourId, addComment, registerUser, likeTour,unlikeTour,disLikeTour,undisLikeTour } = clientSlice.actions
export default clientSlice.reducer;