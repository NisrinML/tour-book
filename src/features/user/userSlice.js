import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios"
import { updateOrgnizerData } from "../orgnizer/orgnizerSlice";
import { API_URL, CONFIG } from "../../app/config";


const initialState = {
  id:null,
  token:null,
  login: {
    loading: '',
    data: {
      id: 1,
      userName: 'rolana_kamaria',
      password: '111',

      confirmPassword: '',
      avatar: 'C:/Users/Nisreen/Pictures/a.jpg',
      status: '',
      email: 'user@gmail.com',
      roleId: 1,
      phone:0

      confirmPassword: '111',
      avatar: 'C:/Users/User/Desktop/Tour Book/tour-book/src/assets/images/person.png',
      status: 'active',
      email: 'rolana@gmail.com',
      roleId: 1,
      phone:"0952857736"

    },
    rejected:false,
    error: ''
  },
  notifications: ['Rolana Kamaria ask for 5 seats for Extraordinary Experiece tour',
    'Wajeeh Rabahie ask for 3 seats for Spring is Comming tour',
    'Nisreen Melhem liked Winter Better tour',
    'Milad Melhem liked Tour Around The World tour',
    'Takla Zidan ask for 4 seats for Discover The World tour',
    'Maen Melhem disliked Winter Better tour',
    'Nagham Melhem comment on Mountains and Rivers tour'
  ,],
  subscriptionDetails: {
    id: '88',
    startDate: '2024-08-16',
    endDate: '2024-08-19',
    payment: '50$'
  },
  tours:[ {  
    sn:1,
    id: 11,
    title: 'Mountains and Rivers tour',
    startDate: '2024-06-06', startTime: '2:20 A.M',
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
    startDate: '2024-02-09', startTime: '6:00 A.M',
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
  },],
  reports: { id: 4, reason: '', reportType: '', respondentUser: 'Summer Free',respondentEmail:'www.milad@gmail.com', complainantUser: '' }
};
  export const fetchUsers = createAsyncThunk("user/fetchUsers", async({username,password}) => {

  return axios.post(`${API_URL}/auth/jwt/create/`, {
    username:  username,
    password:password
  },CONFIG).then((res) => 
    {
      localStorage.setItem('accessToken', res.data.access);
      return fetchUserData( res.data.access)
    //return res.data.access;
     }
  )
 } )

 export const fetchUserData = async (token) => {
    
    const response = await axios.get(`${API_URL}/auth/users/me/`, {
      headers: {
        Authorization: `JWT ${token}`,
      },
    });
   
    return response.data
  
};


const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserName: (state, action) => {
      state.login.data.userName = action.payload;
    },
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
    setToken:(state,action)=>{
      state.id=action.payload.uid
      state.token=action.payload.token
    },

    setUserInformation: (state,action) => {
      state.login.data.email = action.payload.userInfo.email;
      state.login.data.userName = action.payload.userInfo.userName;
    },


    updateOrgnizerData: (state, action) => {
      state.login.data.email = action.payload.email;
      state.login.data.avatar = action.payload.image;
      state.login.data.userName = action.payload.userName;
    },
    setData:(state,action)=>{

    }


  },
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.login.loading = true;
    })
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.login.loading = false;
      state.login.rejected = false;
      state.login.error = ""
      state.login.data.id=action.payload.id
      state.login.data.email=action.payload.email
      state.login.data.phone=action.payload.phone
      state.login.data.userName=action.payload.username
      state.login.data.avatar=action.payload.avatar
      state.token = localStorage.getItem('accessToken');
      if(action.payload.role=="AD")
        {  state.login.data.roleId=3}
      else if(action.payload.role=="C")
       { state.login.data.roleId=1}
      else
       { state.login.data.roleId=2}

   
      
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.login.loading = false;
      state.login.rejected = true;
      state.login.error = action.error.message;
   
    });

    builder.addCase(updateOrgnizerData, (state, action) => {
      state.login.data.email=action.payload.email
      state.login.data.avatar=action.payload.image
      state.login.data.userName=action.payload.userName
    });
   
  }
});

export const { setPassword, setEmail,setConfirmPassword, setRespondentEmail, setRespondentUser,setUserName,setToken,setData, setUserInformation } = userSlice.actions


export default userSlice.reducer;