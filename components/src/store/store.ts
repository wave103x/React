import { combineReducers, configureStore } from '@reduxjs/toolkit';

import searchReducer from './redusers/SearchSlice';
import productsReducer from './redusers/ProductsSlice';
import { productAPI } from '../services/productsService';
import { CurriedGetDefaultMiddleware } from '@reduxjs/toolkit/dist/getDefaultMiddleware';

const rootReduser = combineReducers({
  searchReducer,
  productsReducer,
  [productAPI.reducerPath]: productAPI.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReduser,
    middleware: (getDefaultMiddleware: CurriedGetDefaultMiddleware) =>
      getDefaultMiddleware().concat(productAPI.middleware),
  });
};

export type RootState = ReturnType<typeof rootReduser>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
