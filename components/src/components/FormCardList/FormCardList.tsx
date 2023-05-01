import React from 'react';

import { FormCard } from '../FormCard/FormCard';

import styles from './FormCardList.module.scss';

import { CardFormSumbit } from '../../Types/CardFormProps';

export const FormCardList = (props: CardFormSumbit[]) => {
  const cards = Object.values(props);

  return (
    <div data-testid="card-list" className={styles.cards}>
      {cards.map((elem, index) => {
        if (index === 0) return;
        return <FormCard {...elem} key={index} />;
      })}
    </div>
  );
};
