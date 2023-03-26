import React, { Component } from 'react';

import { Products } from '../../components/';
import { SearchBar } from '../../components/';

export class Home extends Component {
  render() {
    return (
      <>
        <SearchBar />
        <Products />
      </>
    );
  }
}
