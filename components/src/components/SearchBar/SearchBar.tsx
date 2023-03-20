import React, { Component } from 'react';
import cn from 'classnames';

import styles from './SearchBar.module.scss';

import { ReactComponent as SearchIcon } from './search.svg';

import { SearchBarProps, SearchState } from './SearchBar.interface';

export class SearchBar extends Component<SearchBarProps, SearchState> {
  private searchRef: React.RefObject<HTMLInputElement>;

  constructor(props: SearchBarProps) {
    super(props);
    this.searchRef = React.createRef();
  }

  state = {
    searchValue: window.localStorage.getItem('searchValue') || '',
  };

  setSearchValue(value: string) {
    this.setState({
      searchValue: value,
    });
  }

  searchHandle = (event: React.FormEvent<HTMLInputElement>) => {
    const value = event.currentTarget.value;
    this.setSearchValue(value);
    window.localStorage.setItem('searchValue', value);
  };

  formHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event?.preventDefault();
  };

  formClickHandler = () => {
    this.searchRef.current?.focus();
  };

  render() {
    return (
      <form
        className={cn(styles.searchForm, styles.formMargin)}
        onSubmit={this.formHandler}
        onClick={this.formClickHandler}
      >
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
