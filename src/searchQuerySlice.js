import { createSlice } from '@reduxjs/toolkit';

//slice of the store that maintains search history
export const searchQuerySlice = createSlice({
    name: 'searchQuery',
    initialState: {
      queries: [],
    },
    reducers: {
      addQuery: (state, action) => {
        const query = action.payload;
        if(!state.queries.find(x=> x===query)){
            state.queries.push(query);
        }
      }
    },
  })

  export const { addQuery } = searchQuerySlice.actions;
  
  export default searchQuerySlice.reducer;