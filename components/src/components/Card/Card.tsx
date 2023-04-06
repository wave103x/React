import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

import { CardModal } from '../CardModal/CardModal';

import styles from './Card.module.scss';

import IProduct from '../../Types/Product';

export const Card = ({ product }: { product: IProduct }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper} onClick={() => setShowModal(true)}>
        <img src={product.thumbnail} alt="product image" />
      </div>
      <p className={styles.title}>{product.title}</p>
      <p className={styles.category}>{product.category}</p>
      <p className={styles.price}>{product.price}</p>
      {showModal && createPortal(<CardModal onClose={() => setShowModal(false)} />, document.body)}
    </div>
  );
};
