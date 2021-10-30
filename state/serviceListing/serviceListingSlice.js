import { get, set } from 'lodash';

import { createSlice } from '@reduxjs/toolkit'

const PROCESS_STEP_DEFUALT_ITEM = {title: '', description: ''}

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
        PROCESS_STEP_DEFUALT_ITEM
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
    },
    addNewStepToServiceListingProcess: (state, action) => {
      const ref = get(state, 'delivery.process.steps')
      ref.push(PROCESS_STEP_DEFUALT_ITEM)
    },
    removeStepToServiceListingProcess: (state, action) => {
      const {index} = action.payload;
      const ref = get(state, 'delivery.process.steps')
      ref.splice(index, 1);
    }
  },
})

// Action creators are generated for each case reducer function
export const { updateServiceList, addNewStepToServiceListingProcess, removeStepToServiceListingProcess } = serviceListingSlice.actions

export default serviceListingSlice.reducer