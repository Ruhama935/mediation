import {configureStore} from '@reduxjs/toolkit';
import apiSlice from './apiSlice';
import authSliceReducer from '../auth/authSlice'
import PropertySliceReducer from '../PropertieComp/PropertySlice'

const store = configureStore({
  reducer: {
    auth: authSliceReducer,
    properties: PropertySliceReducer,
    [apiSlice.reducerPath]: apiSlice.reducer
   // createProperty: PropertyApiSlice
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true
});

export default store;   