import { createSlice } from '@reduxjs/toolkit';

const initialState = { name: '' };

const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const { setName } = homeSlice.actions;
export const selectName = (state) => state.auth.name;
export default homeSlice.reducer;
