import { configureStore } from '@reduxjs/toolkit'
import userSlice from "../features/user/userSlice";
import orgnizerSlice from "../features/orgnizer/orgnizerSlice";
import presenterSlice from "../features/presenter/presenterSlice";
import clientSlice from "../features/client/clientSlice";
export const store = configureStore({
  reducer: {
    user: userSlice,
    orgnizer: orgnizerSlice,
    presenter : presenterSlice,
    client : clientSlice,
  },
})