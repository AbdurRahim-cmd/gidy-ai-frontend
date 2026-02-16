import { configureStore } from "@reduxjs/toolkit";
import profileReducer from "../app/features/profile/profileSlice.js"
export const store = configureStore({
  reducer: {
    profile: profileReducer
  }
});
