import React, { Component } from 'react';
import styles from './Card.module.scss';
import IProduct from '../../Types/Product';

export default class Card extends Component<{product: IProduct}> {
  constructor(props: {product: IProduct}) {
    super(props)
  }

  render() {
    return (
      <div className={styles.card}>
        <div className={styles.imageWrapper}><img src={this.props.product.thumbnail} alt="product image" /></div>
        <p className={styles.title}>{this.props.product.title}</p>
        <p className={styles.category}>{this.props.product.category}</p>
        <p className={styles.description}>{this.props.product.description}</p>
        <p className={styles.price}>{this.props.product.price}</p>
      </div>
    )
  }
}
