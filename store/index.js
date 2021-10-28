import { configureStore } from "@reduxjs/toolkit";
import serviceListingReducer from "../state/serviceListing/serviceListingSlice";

export const store = configureStore({
  reducer: {
    serviceListing: serviceListingReducer,
  },
});
