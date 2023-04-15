import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SearchState {
  value: string;
}

const initialState: SearchState = {
  value: '',
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    update(state, action: PayloadAction<string>) {
      state.value = action.payload;
    },
  },
});

export default searchSlice.reducer;
