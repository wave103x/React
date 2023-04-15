import React, { useEffect, useState } from 'react';

import { Products } from '../../components/';
import { SearchBar } from '../../components/';
import { Placeholder } from '../../components/Placeholder/Placeholder';

import { ServerConnect } from '../../utils/ServerConnect';

import IProduct from '../../Types/Product';
import { useAppDispatch, useAppSelector } from '../../store/hooks/redux';
import { fetchProducts } from '../../store/redusers/ActionCreators';

export const Home = () => {
  const dispatch = useAppDispatch();
  const { value } = useAppSelector((state) => state.searchReducer);
  const { products, isLoading, error } = useAppSelector((state) => state.productsReducer);

  const [searchValue, setSearchValueHome] = useState(value);
  // const [productsState, setProducts] = useState<IProduct[]>([]);
  // const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    dispatch(fetchProducts(value));
    // const fetchData = async () => {
    //   setIsLoading(true);
    //   const data = await ServerConnect<IProduct>(searchValue);
    //   setProducts(data);
    //   setTimeout(() => {
    //     setIsLoading(false);
    //   }, 300);
    // };
    // fetchData();
  }, [searchValue]);

  return (
    <>
      <SearchBar setSearchValueHome={setSearchValueHome} />
      {isLoading && <Placeholder />}
      {!isLoading && <Products products={products} />}
    </>
  );
};
