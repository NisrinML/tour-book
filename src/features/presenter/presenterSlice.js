import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: "11",
  name: "",
  status: "",
  size: "",
  placeName: "",
  website: "",
  axisX: "",
  axisY: "",
  rate: "",
  userId: "",
  PresenterAttatchment: [{ id: '', attachment: '' , type: '' }], 
  PresenterServices: [{presenterId:'',serviceId:''}],
  services: [
    { id: '1', service: 'pool' },
    { id: '2', service: 'restaurant' },
    { id: '3', service: 'wifi' }
  ],

  offers: [
    {
      id: "",
      title: "",
      startDate: "",
      endDate: "",
      startTime: "",
      endTime: "",
      pricePerOne: "",
      description: "",
      address: "",
      offerAttatchment: [{ id: '', attachment:'', type: '' }],
      offerRequest: [{ id: '', quantity: '', description: '', offerId: '', offerState: '' }],
    },
  ],
};

const presenterSlice = createSlice({
  name: "presenter",
  initialState,
  reducers: {
    setSize: (state, action) => {
      state.size = action.payload;
    },
    setWebsite: (state, action) => {
      state.website = action.payload;
    },
    setServices: (state, action) => {
      state.PresenterServices = action.payload;
    },
    addImage: (state, action) => {
      state.PresenterAttatchment.push(action.payload);
    },
    removeImage: (state, action) => {
      state.PresenterAttatchment = state.PresenterAttatchment.filter(
        (image) => image.id !== action.payload.id
      );
    },
    removeOffer: (state, action) => {
      state.offers = state.offers.filter(offer => offer.id !== action.payload.id);
    },
    addService: (state, action) => {
      state.services.push(action.payload);
    },
  }
});

export const {
  setSize,
  setWebsite,
  setServices,
  addImage,
  removeImage,
  removeOffer,
  addService
} = presenterSlice.actions;

export const getServices = (state) => state.presenter.services;
export const getOffers = (state) => state.presenter.offers;
export const getPresenterAttachments = (state) => state.presenter.PresenterAttatchment;
export default presenterSlice.reducer;
