import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios"
import { updateOrgnizerData } from "../orgnizer/orgnizerSlice";
const initialState = {
  login: {
    loading: '',
    data: {
      id: '',
      userName: 'User Name',
      password: '111',
      confirmPassword: '',
      avatar: 'C:/Users/Nisreen/Pictures/a.jpg',
      status: '',
      email: 'dsfsg',
      roleId: 2,
    },
    error: ''
  },
  notifications: [],
  subscriptionDetails: {
    id: '',
    startDate: '',
    endDate: '',
    payment: ''
  },
  reports: { id: '', reason: '', reportType: '', respondentUser: 'Rolana kamarie',respondentEmail:'www.***@gmail.com', complainantUser: '' }
};
const fetchUsers = createAsyncThunk("user/fetchUsers", () => {
  return axios.get().then((res) => res.data)
})
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setPassword: (state, action) => {
      state.login.data.password = action.payload;
    },
    setConfirmPassword:(state, action)=>{
      state.login.data.confirmPassword = action.payload;
    },
    setEmail: (state, action) => {
      state.login.data.email = action.payload
    },
    setRespondentUser: (state, action) => {
      state.reports.respondentUser = action.payload
    },
    setRespondentEmail: (state, action) => {
      state.reports.respondentEmail = action.payload
    },

  },
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.login.loading = true;
    })
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.login.loading = false;
      state.login.data = action.payload;
      state.login.error = ""
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.login.loading = false;
      state.login.data = [];
      state.login.error = action.error.message;
    })
    
    builder.addCase(updateOrgnizerData, (state, action) => {
      state.login.data.email=action.payload.email
      state.login.data.avatar=action.payload.image
    });
   
  }
});

export const { setPassword, setEmail,setConfirmPassword, setRespondentEmail, setRespondentUser } = userSlice.actions
export default userSlice.reducer;