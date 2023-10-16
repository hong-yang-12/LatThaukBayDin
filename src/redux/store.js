import { configureStore } from "@reduxjs/toolkit";
import bayDinSlice from "./slice/bayDinSlice";

export const store = configureStore({
  reducer: {
    bayDinSlice: bayDinSlice,
  },
});
