import React from 'react';

import { Card } from '../';
import IProduct from '../../Types/Product';

import styles from './Products.module.scss';

import productData from '../../data/data.json';

export const Products = () => {
  return (
    <div className={styles.products}>
      {productData.map((product: IProduct) => (
        <Card product={product} key={product.id.toString()} />
      ))}
    </div>
  );
};
