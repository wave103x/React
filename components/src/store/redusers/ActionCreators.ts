import { AppDispatch } from '../store';

import IProduct from '../../Types/Product';
import { productsSlice } from './ProductsSlice';

const URL = 'https://mock-server-api-pink.vercel.app';
const CATALOGUE = 'catalog';

export const fetchProducts = (value: string) => async (dispatch: AppDispatch) => {
  try {
    dispatch(productsSlice.actions.productsFetching());
    const response = await fetch(`${URL}/${CATALOGUE}/?q=${value}`);
    const data: IProduct[] = await response.json();
    setTimeout(() => dispatch(productsSlice.actions.productsFetchingSuccess(data)), 300);
  } catch (e) {
    if (e instanceof Error) dispatch(productsSlice.actions.productsFetchingError(e.message));
  }
};
