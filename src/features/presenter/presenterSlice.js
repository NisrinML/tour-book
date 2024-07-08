import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: "",
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
  offers: [],
  offer: 
    {
      id: "",
      title: "",
      offerSize:"",
      startDate: "",
      endDate: "",
      startTime: "",
      endTime: "",
      pricePerOne: "",
      description: "",
      address: "",
      offerAttatchment: [{ id: '', attachment:'', type: '' }],
    },
    offerRequest: [{ id: '', quantity: '', description: '', offerId: '', offerState: '' }],
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
    setTitle: (state, action) => {
      state.offer.title = action.payload;
    },
    setSizeOfOffer: (state, action) => {
      state.offer.title = action.payload;
    },
    setOfferDescription: (state, action) => {
      state.offer.description = action.payload;
    },
    setPricePerOne: (state, action) => {
      state.offer.pricePerOne = action.payload;
    },
    setOfferStartDate: (state, action) => {
      state.offers.startDate = action.payload;
    },
    setOfferEndDate: (state, action) => {
      state.offer.endDate = action.payload;
    },
    setOfferStartTime: (state, action) => {
      state.offer.startTime = action.payload;
    },
    setOfferEndTime: (state, action) => {
      state.offer.endTime = action.payload;
    },
    addOfferAttachment: (state, action) => {
      state.offer.offerAttatchment.push(action.payload);
    },
  }
});

export const {
  addOfferAttachment,
  setSizeOfOffer,
  setOfferDescription,
  setPricePerOne,
  setOfferStartDate,
  setOfferEndDate,
  setOfferStartTime,
  setOfferEndTime,
  setTitle,
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
