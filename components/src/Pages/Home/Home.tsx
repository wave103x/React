import React, { useEffect, useState } from 'react';

import { Products } from '../../components/';
import { SearchBar } from '../../components/';
import { Placeholder } from '../../components/Placeholder/Placeholder';

import { ServerConnect } from '../../utils/ServerConnect';

import IProduct from '../../Types/Product';

export const Home = () => {
  const [searchValue, setSearchValueHome] = useState(
    window.localStorage.getItem('searchValue') || ''
  );
  const [products, setProducts] = useState<IProduct[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const data = await ServerConnect<IProduct>(searchValue);
      setProducts(data);
      setTimeout(() => {
        setIsLoading(false);
      }, 300);
    };
    fetchData();
  }, [searchValue]);

  return (
    <>
      <SearchBar setSearchValueHome={setSearchValueHome} />
      {isLoading && <Placeholder />}
      {!isLoading && <Products products={products} />}
    </>
  );
};
