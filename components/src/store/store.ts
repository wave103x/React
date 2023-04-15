import { combineReducers, configureStore } from '@reduxjs/toolkit';

import searchReducer from './redusers/SearchSlice';
import productsReducer from './redusers/ProductsSlice';

const rootReduser = combineReducers({ searchReducer, productsReducer });

export const setupStore = () => {
  return configureStore({
    reducer: rootReduser,
  });
};

export type RootState = ReturnType<typeof rootReduser>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
