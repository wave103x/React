import React, { Component, useRef, useState } from 'react';
import styles from './SearchBar.module.scss';
import { ReactComponent as SearchIcon } from './search.svg';
import cn from 'classnames';
import { render } from 'react-dom';

export class SearchBar extends Component<{}, {}> {
  private searchRef: React.RefObject<HTMLInputElement>;
  constructor(props: {}) {
    super(props);
    this.searchRef = React.createRef();
  }

  state = {
    searchValue: window.localStorage.getItem('searchValue') || '',
  }

  setSearchValue(value: string) {
    this.setState({
      searchValue: value
    })
  }

  searchHandle = (event: React.FormEvent<HTMLInputElement>) => {
    const value = event.currentTarget.value
    this.setSearchValue(value);
    window.localStorage.setItem('searchValue', value);
  }

  formHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event?.preventDefault();
  };

  formClickHandler = () => {
    this.searchRef.current?.focus();
  };

  render() {
    return (
      <form className={cn(styles.searchForm, styles.formMargin)} onSubmit={this.formHandler} onClick={this.formClickHandler}>
        <SearchIcon className={styles.icon} />
        <input
          value={this.state.searchValue}
          ref={this.searchRef}
          onChange={this.searchHandle}
          type="search"
          className={styles.searchInput}
          placeholder="Search"
        />
      </form>
    );
  }
}
