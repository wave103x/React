import React from 'react';

import styles from './FormCard.module.scss';

import { CardFormSumbit } from '../../Types/CardFormProps';

export const FormCard = (props: CardFormSumbit) => {
  const photo = props.photo;
  return (
    <div className={styles.card}>
      <div className={styles.imageWrap}>
        {photo !== null ? <img className={styles.image} src={photo} /> : null}
      </div>
      <div className={styles.text}>
        <h3>{props.name}</h3>
        <p>
          <span>Word:</span> {props.word}
        </p>
        <p>
          <span>Date:</span> {new Date(props.date).getFullYear()}
        </p>
        <p>
          <span>Listener:</span> {props.heard}
        </p>
        {props.feelings ? (
          <p>
            <span>Feelings:</span> {Array.isArray(props.feelings) ? props.feelings.join(' ') : null}
          </p>
        ) : null}
        <p>
          <span>You&apos;re:</span> {props.faked ? 'Tricky' : 'Honest'}
        </p>
      </div>
    </div>
  );
};
