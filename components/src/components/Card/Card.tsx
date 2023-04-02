import React from 'react';

import styles from './Card.module.scss';

import IProduct from '../../Types/Product';

export const Card = ({ product }: { product: IProduct }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <img src={product.thumbnail} alt="product image" />
      </div>
      <p className={styles.title}>{product.title}</p>
      <p className={styles.category}>{product.category}</p>
      <p className={styles.description}>{product.description}</p>
      <p className={styles.price}>{product.price}</p>
    </div>
  );
};
