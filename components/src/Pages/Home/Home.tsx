import React from 'react';

import { Products } from '../../components/';
import { SearchBar } from '../../components/';

export const Home = () => {
  return (
    <>
      <SearchBar />
      <Products />
    </>
  );
};
