import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CardFormSumbit } from '../../Types/CardFormProps';

interface FormState {
  products: CardFormSumbit[];
}

const initialState: FormState = {
  products: [
    {
      date: 0,
      faked: '',
      heard: '',
      name: '',
      photo: '',
      word: '',
      confirm: '',
      feelings: [''],
    },
  ],
};

export const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    submit(state, action: PayloadAction<FormState>) {
      state.products = state.products.concat(action.payload.products);
    },
  },
});

export default formSlice.reducer;
