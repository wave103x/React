import React, { Component } from 'react';

import { Card } from '../';
import IProduct from '../../Types/Product';

import styles from './Products.module.scss';

import productData from '../../data/data.json';

interface State {
  data: IProduct[];
}

export class Products extends Component<unknown, State> {
  constructor(props: unknown) {
    super(props);
    this.state = {
      data: productData,
    };
  }

  render() {
    return (
      <div className={styles.products}>
        {this.state?.data?.map((product: IProduct) => (
          <Card product={product} key={product.id} />
        ))}
      </div>
    );
  }
}
