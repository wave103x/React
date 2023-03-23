import React, { Component } from 'react';

import { CardFormState } from '../../Types/CardFormProps';

export class FormCard extends Component<CardFormState, CardFormState> {
  constructor(props: CardFormState) {
    super(props);
  }

  render() {
    return (
      <>
        <div>
          {this.props.photo instanceof File && <img src={URL.createObjectURL(this.props.photo)} />}
        </div>
        <h2>{this.props.name}</h2>
        <p>{this.props.word}</p>
        <p>{this.props.date.getFullYear()}</p>
        <p>{this.props.heard}</p>
        <p>{this.props.feelings}</p>
        <p>{this.props.faked ? 'I am tricky' : 'I am honest'}</p>
      </>
    );
  }
}
