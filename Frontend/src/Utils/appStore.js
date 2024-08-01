import { configureStore } from "@reduxjs/toolkit";
import filterReducer from './filterSlice';

const appStore = configureStore({
    reducer: {      //all reducers for our whole app big reducer
        filter: filterReducer,  
    },
});

export default appStore;

//this file will configure the store