import React, { Component } from 'react';

type Props = {
  name: string;
  word: string;
  date: Date;
  heared: string;
  feelings: string[];
  faked: string;
  photo: string;
};

type State = Props;

export class FormCard extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      name: 'Myname',
      word: 'qq',
      date: new Date(),
      heared: 'mom',
      feelings: ['sad'],
      faked: 'yes',
      photo: 'http://qq.com',
    };
  }

  render() {
    return (
      <>
        <div>
          <img src={this.state.photo} alt="card's photo" />
        </div>
        <h2>{this.state.name}</h2>
        <p>{this.state.word}</p>
        <p>{this.state.date.getDate()}</p>
        <p>{this.state.heared}</p>
        <p>{this.state.feelings}</p>
        <p>{this.state.faked}</p>
      </>
    );
  }
}
