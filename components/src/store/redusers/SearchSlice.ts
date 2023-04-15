import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Search } from '../models/Search';

interface UserState {
  value: Search;
}

const initialState: UserState = {
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
