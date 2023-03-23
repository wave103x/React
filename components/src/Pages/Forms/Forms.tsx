import React, { Component } from 'react';
import { Outlet } from 'react-router-dom';

import { Form, FormCardList } from '../../components/';

import styles from './Forms.module.scss';

import { CardFormState } from '../../Types/CardFormProps';

type Props = {
  id?: number;
};

type State = {
  cards: CardFormState[];
  isDoneActive: boolean;
};

export class Forms extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      cards: [],
      isDoneActive: false,
    };
  }

  setStateCard(data: CardFormState) {
    this.setState((prevState: State) => ({
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
        <Form setStateCard={this.setStateCard.bind(this)} />
        <FormCardList {...this.state.cards} />
        <div id="cards">
          <Outlet />
        </div>
      </>
    );
  }
}
