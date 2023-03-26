import React, { Component } from 'react';

import { Form, FormCardList } from '../../components/';

import styles from './Forms.module.scss';

import { CardFormState } from '../../Types/CardFormProps';

export class Forms extends Component<
  null,
  {
    cards: CardFormState[];
    isDoneActive: boolean;
  }
> {
  constructor(props: null) {
    super(props);
    this.state = {
      cards: [],
      isDoneActive: false,
    };
  }

  setStateCard(data: CardFormState) {
    this.setState((prevState) => ({
      cards: [...prevState.cards, data],
    }));
    this.setState({ isDoneActive: true });
    setTimeout(() => {
      this.setState({ isDoneActive: false });
    }, 2000);
  }

  render() {
    return (
      <>
        {this.state.isDoneActive ? <div className={styles.confirm}>Done!</div> : null}
        <h1>Let&apos;s dive into the past</h1>
        <div className={styles.formPage}>
          <Form setStateCard={this.setStateCard.bind(this)} />
          <FormCardList {...this.state.cards} />
        </div>
      </>
    );
  }
}
