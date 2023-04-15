import { combineReducers, configureStore } from '@reduxjs/toolkit';

import searchReducer from './redusers/SearchSlice';

const rootReduser = combineReducers({ searchReducer });

export const setupStore = () => {
  return configureStore({
    reducer: rootReduser,
  });
};

export type RootState = ReturnType<typeof rootReduser>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
