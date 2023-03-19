import React, { Component } from 'react';
import Card from '../Card/Card';
import data from '../../data/data.json';
import IProduct from '../../Types/Product';
import styles from './Products.module.scss';

export default class Products extends Component {
  state = {
    data: data,
  };

  render() {
    return (
      <div className={styles.products}>
        {this.state.data.map((product: IProduct) => (
          <Card product={product} key={product.id} />
        ))}
      </div>
    );
  }
}
