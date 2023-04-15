import React, { FormEvent, useEffect, useRef, useState } from 'react';
import cn from 'classnames';

import styles from './SearchBar.module.scss';

import { ReactComponent as SearchIcon } from './search.svg';
import { useAppDispatch, useAppSelector } from '../../store/hooks/redux';
import { searchSlice } from '../../store/redusers/SearchSlice';

export const SearchBar = ({
  setSearchValueHome,
}: {
  setSearchValueHome: (value: string) => void;
}) => {
  const { value } = useAppSelector((state) => state.searchReducer);
  const { update } = searchSlice.actions;
  const dispatch = useAppDispatch();

  const [searchValue, setSearchValue] = useState(value);

  const searchInputElem = useRef<HTMLInputElement>(null);

  const searchHandler = (event: FormEvent) => {
    event.preventDefault();
    setSearchValueHome(searchValue);
  };

  return (
    <>
      <form
        className={cn(styles.searchForm, styles.formMargin)}
        onSubmit={(event: FormEvent) => searchHandler(event)}
        onClick={() => searchInputElem.current?.focus()}
      >
        <SearchIcon className={styles.icon} />
        <input
          value={searchValue}
          onChange={(event: FormEvent<HTMLInputElement>) => {
            setSearchValue(event?.currentTarget.value);
            dispatch(update(event?.currentTarget.value));
          }}
          type="search"
          className={styles.searchInput}
          placeholder="Search"
          ref={searchInputElem}
        />
      </form>
    </>
  );
};
