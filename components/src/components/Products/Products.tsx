import React, { Component } from 'react';

import { Card } from '../';
import IProduct from '../../Types/Product';

import styles from './Products.module.scss';

import data from '../../data/data.json';

export class Products extends Component {
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
