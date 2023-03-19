import React, { Component } from 'react';
import Products from '../../components/Products/Products';
import { SearchBar } from '../../components/SearchBar/SearchBar';

export class Home extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <Products />
      </div>
    );
  }
}
