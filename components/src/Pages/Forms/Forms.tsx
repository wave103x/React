import React, { useState } from 'react';
import { Form, FormCardList } from '../../components';

import styles from './Forms.module.scss';

import { CardFormSumbit } from '../../Types/CardFormProps';
import { useAppSelector } from '../../store/hooks/redux';

export const Forms = () => {
  const { products } = useAppSelector((state) => state.formReducer);

  const [isDoneActive, setDoneActive] = useState(false);
  const [cards, setCards] = useState<CardFormSumbit[]>(products);

  function setStateCard(data: CardFormSumbit) {
    setCards((prev) => {
      return [...prev, data];
    });
    setDoneActive(true);
    setTimeout(() => {
      setDoneActive(false);
    }, 2000);
  }

  return (
    <>
      {isDoneActive ? <div className={styles.confirm}>Done!</div> : null}
      <h1>Let&apos;s dive into the past</h1>
      <div className={styles.formPage}>
        <Form setStateCard={setStateCard} />
        <FormCardList {...cards} />
      </div>
    </>
  );
};
