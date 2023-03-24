import React, { Component } from 'react';

import styles from './FormCard.module.scss';

import { CardFormState } from '../../Types/CardFormProps';

export class FormCard extends Component<CardFormState, CardFormState> {
  constructor(props: CardFormState) {
    super(props);
  }

  render() {
    console.log(this.props);
    return (
      <div className={styles.card}>
        <div className={styles.imageWrap}>
          {this.props.photo instanceof File && (
            <img className={styles.image} src={URL.createObjectURL(this.props.photo)} />
          )}
        </div>
        <div className={styles.text}>
          <h3>{this.props.name}</h3>
          <p>
            <span>Word:</span> {this.props.word}
          </p>
          <p>
            <span>Date:</span> {this.props.date.getFullYear()}
          </p>
          <p>
            <span>Listener:</span> {this.props.heard}
          </p>
          {this.props.feelings?.length ? (
            <p>
              <span>Feelings:</span> {this.props.feelings}
            </p>
          ) : null}
          <p>
            <span>You&apos;re:</span> {this.props.faked ? 'Tricky' : 'Honest'}
          </p>
        </div>
      </div>
    );
  }
}
