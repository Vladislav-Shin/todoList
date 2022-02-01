import {configureStore} from "@reduxjs/toolkit";
import users from "../components/users/userSlice"

const store = configureStore({
  reducer: users,
  middleware: getDefaultMiddleware => getDefaultMiddleware(),
  devTools: process.env.NODE_ENV !== "production"
})

export default store;

