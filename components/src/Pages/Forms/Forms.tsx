import React, { useState } from 'react';
import { Form, FormCardList } from '../../components';

import styles from './Forms.module.scss';

import { CardFormState } from '../../Types/CardFormProps';

export const Forms = () => {
  const [isDoneActive, setDoneActive] = useState(false);
  const [cards, setCards] = useState<CardFormState[]>([]);

  function setStateCard(data: CardFormState) {
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
