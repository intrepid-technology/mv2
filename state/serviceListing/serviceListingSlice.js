import { createSlice } from '@reduxjs/toolkit'
import { set } from 'lodash';

const initialState = {
  category: {
    serviceCategory: null, // id 
    service: null, // id 
    features:  [],
    content: [],
    industries: [],
    tools: []
  },
  name: 'Service Sample Name',
  description: 'This is a sample description of our service',
  delivery: {
    process: {
      overview: 'Delivery process short dummy overview',
      steps: [
        {
          id: 1,
          title: 'Step 1',
          description: 'This is our step 1'
        },
        {
          id: 2,
          title: 'Step 2',
          description: 'This is our step 2'
        },
      ]
    },
    time: 9, // No of days
    meetings: 2,
    revisions: 10,
    requirements: [
      {
        id: 1,
        description: 'Requirement No 1'
      },
      {
        id: 2,
        description: 'Requirement No 2'
      },
      {
        id: 3,
        description: 'Requirement No 3'
      },
    ],
    formats: [
      {
        id: 1,
        label: 'pdf',
      },
      {
        id: 1,
        label: 'zip',
      },
    ]
  },
  images: [
    {
      url: ''
    },
    {
      url: ''
    },
    {
      url: ''
    },
  ]
}
    
export const serviceListingSlice = createSlice({
  name: 'serviceListing',
  initialState,
  reducers: {
    updateServiceList: (state, action) => {
      const {key, value} = action.payload;
      set(state, key, value)
    }
  },
})

// Action creators are generated for each case reducer function
export const { updateServiceList } = serviceListingSlice.actions

export default serviceListingSlice.reducer