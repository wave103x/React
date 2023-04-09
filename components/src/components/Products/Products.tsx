import React from 'react';

import { Card } from '../';
import IProduct from '../../Types/Product';

import styles from './Products.module.scss';

export const Products = ({ products }: { products: IProduct[] }) => {
  return (
    <div className={styles.products}>
      {products.map((product: IProduct) => (
        <Card product={product} key={product.id.toString()} />
      ))}
    </div>
  );
};
