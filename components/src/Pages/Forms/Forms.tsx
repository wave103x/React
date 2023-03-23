import React, { Component } from 'react';
import { Outlet } from 'react-router-dom';

import { Form, FormCardList } from '../../components/';

import { CardFormState } from '../../Types/CardFormProps';

type Props = {
  id?: number;
};

type State = {
  cards: CardFormState[];
};

export class Forms extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      cards: [],
    };
  }

  setStateCard(data: CardFormState) {
    this.setState((prevState: State) => ({
      cards: [...prevState.cards, data],
    }));
  }

  render() {
    return (
      <>
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
