import React from 'react';

import { FormCard } from '../FormCard/FormCard';

import styles from './FormCardList.module.scss';

import { CardFormState } from '../../Types/CardFormProps';

export const FormCardList = (props: CardFormState[]) => {
  const cards = Object.values(props);

  return (
    <div data-testid="card-list" className={styles.cards}>
      {cards.map((elem, index) => (
        <FormCard {...elem} key={index} />
      ))}
    </div>
  );
};
