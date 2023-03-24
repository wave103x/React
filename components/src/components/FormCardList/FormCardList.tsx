import React, { Component } from 'react';

import { FormCard } from '../FormCard/FormCard';

import styles from './FormCardList.module.scss';

import { CardFormState } from '../../Types/CardFormProps';

export class FormCardList extends Component<CardFormState[], CardFormState[]> {
  constructor(props: CardFormState[]) {
    super(props);
  }
  render() {
    const cards = Object.values(this.props);
    return (
      <div className={styles.cards}>
        {cards.map((elem, index) => (
          <FormCard {...elem} key={index} />
        ))}
      </div>
    );
  }
}
