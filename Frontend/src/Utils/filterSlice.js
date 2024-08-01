import { createSlice } from "@reduxjs/toolkit"


//createSlice takes a configuration
const filterSlice = createSlice({
    name: 'filter',
    initialState: {
        filters: []
    },
    reducers: { //actions
        setFilter: (state, action) => {
            //this is a reducer function, that will modify the slice.
            //here state is the initialState
            //we will modify the state based on action
            //we are mutating the state here
            const { filterType, value } = action.payload;       //this action.payload is the data we are sending while dispatching   

            const existingFilter = state.filters.find(filter => filter.filterType === filterType);

            if (existingFilter) {
                existingFilter.value = value;
            }
            else {
                state.filters.push({ filterType, value });
            }
     
        },
        removeFilter: (state, action) => {
            const { filterType } = action.payload;
            state.filters = state.filters.filter(filter => filter.filterType !== filterType);
        },
        
        resetFilters: (state) => {
            state.filters.length = 0;
        },
    }
});

//we will export our actions and reducers seperately
export default filterSlice.reducer;

export const { setFilter, resetFilters, removeFilter } = filterSlice.actions;

//because createSlice returns an object looking like this:
// {actions: {addItem}, reducer: }