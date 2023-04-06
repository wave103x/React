import React, { useEffect, useState } from 'react';

import { Products } from '../../components/';
import { SearchBar } from '../../components/';
import { ServerConnect } from '../../utils/ServerConnect';

import IProduct from '../../Types/Product';

export const Home = () => {
  const [searchValue, setSearchValueHome] = useState('');
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await ServerConnect<IProduct>(searchValue);
      setProducts(data);
    };
    fetchData();
  }, [searchValue]);

  return (
    <>
      <SearchBar setSearchValueHome={setSearchValueHome} />
      <Products products={products} />
    </>
  );
};
