import React from 'react';

import IProduct from '../../Types/Product';

import styles from './CardModal.module.scss';

export const CardModal = ({ onClose, product }: { onClose: () => void; product: IProduct }) => {
  const bgClickHandler = (event: React.MouseEvent) => {
    if (event.target === event.currentTarget) onClose();
  };
  return (
    <div className={styles.modalBg} onClick={(event: React.MouseEvent) => bgClickHandler(event)}>
      <div className={styles.modal}>
        <div className={styles.imageWrapper}>
          <img src={product.thumbnail} alt="product image" />
        </div>
        <p className={styles.title}>{product.title}</p>
        <p className={styles.category}>{product.category}</p>
        <p className={styles.description}>{product.description}</p>
        <p className={styles.price}>{product.price}</p>
        <button className={styles.close} onClick={onClose}>
          🗙
        </button>
      </div>
    </div>
  );
};
