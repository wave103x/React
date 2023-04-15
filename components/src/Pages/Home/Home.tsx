/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';

import { Products } from '../../components/';
import { SearchBar } from '../../components/';
import { Placeholder } from '../../components/Placeholder/Placeholder';

import { useAppSelector } from '../../store/hooks/redux';
import { productAPI } from '../../services/productsService';

import IProduct from '../../Types/Product';

export const Home = () => {
  const { value } = useAppSelector((state) => state.searchReducer);
  const [searchValue, setSearchValueHome] = useState(value);
  const [productsState, setProducts] = useState<IProduct[]>([]);
  const [isLoadingState, setIsLoading] = useState(false);

  const { data, isLoading } = productAPI.useFetchAllProductsQuery(value);

  useEffect(() => {
    setIsLoading(isLoading);
    setProducts(data as IProduct[]);
  }, [searchValue, isLoading]);

  return (
    <>
      <SearchBar setSearchValueHome={setSearchValueHome} />
      {isLoadingState && <Placeholder />}
      {!isLoadingState && <Products products={productsState} />}
    </>
  );
};
