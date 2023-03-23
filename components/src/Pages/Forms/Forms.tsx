import React, { Component } from 'react';
import { Outlet } from 'react-router-dom';

import { Form, FormCardList } from '../../components/';

import { CardFormState } from '../../Types/CardFormProps';

type Props = {
  id?: number;
};

type State = {
  cardData: CardFormState;
  showCard: boolean;
};

export class Forms extends Component<Props, State> {
  setStateCard(data: CardFormState) {
    this.setState({ cardData: data });
  }

  componentDidUpdate() {
    // this.setState({ showCard: true });
  }
  render() {
    return (
      <>
        <h1>Let&apos;s dive into the past</h1>
        <Form setStateCard={this.setStateCard.bind(this)} />
        {/* {this.state.showCard ?? <FormCardList {...this.state.cardData} />} */}
        <div id="cards">
          <Outlet />
        </div>
      </>
    );
  }
}
