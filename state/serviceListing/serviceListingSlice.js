import { get, set } from "lodash";

import { createSlice } from "@reduxjs/toolkit";

export const PROCESS_STEP_DEFUALT_ITEM = { title: "", description: "" };
export const DELIVERY_REQUIREMENT_DEFUALT_ITEM = { title: "", description: "" };

const initialState = {
  category: {
    serviceCategory: null, // id
    service: null, // id
    features: [],
    content: "",
    industries: [],
    tools: [],
  },
  name: "Service Sample Name",
  description: "This is a sample description of our service",
  delivery: {
    process: {
      overview: "Delivery process short dummy overview",
      steps: [PROCESS_STEP_DEFUALT_ITEM],
    },
    time: null, // No of days
    meetings: null,
    revisions: null,
    requirements: [
      DELIVERY_REQUIREMENT_DEFUALT_ITEM
    ],
    formats: [],
    costType: null,
    cost: null
  },
  images: [
    {
      url: "",
    },
    {
      url: "",
    },
    {
      url: "",
    },
    {
      url: "",
    },
    {
      url: "",
    },
  ],
  // TODO: Add missing values in listing form
  amount: 10000,
  seller: "48649605-13db-479b-a0a2-162b2d6c7030",
};

export const serviceListingSlice = createSlice({
  name: "serviceListing",
  initialState,
  reducers: {
    updateServiceList: (state, action) => {
      const { key, value } = action.payload;
      set(state, key, value);
    },
    addNewArrayFieldToServiceListing: (state, action) => {
      const {key, defaultItem} = action.payload;
      const ref = get(state, key);
      ref.push(defaultItem);
    },
    removeArrayFieldFromServiceListing: (state, action) => {
      const { index, key } = action.payload;
      const ref = get(state, key);
      ref.splice(index, 1);
    },
    updateImageListingImage: (state, action) => {
      const { index, url } = action.payload;
      const ref = get(state, "images");
      ref[index].url = url;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  updateServiceList,
  addNewArrayFieldToServiceListing,
  removeArrayFieldFromServiceListing,
  updateImageListingImage,
} = serviceListingSlice.actions;

export default serviceListingSlice.reducer;
