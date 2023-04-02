import React, { FormEvent, useEffect, useRef, useState } from 'react';
import cn from 'classnames';

import styles from './SearchBar.module.scss';

import { ReactComponent as SearchIcon } from './search.svg';

export const SearchBar = () => {
  const [searchValue, setSearchValue] = useState(window.localStorage.getItem('searchValue') || '');

  const searchInputElem = useRef<HTMLInputElement>(null);

  useEffect(() => {
    return window.localStorage.setItem('searchValue', searchValue.toString());
  });

  return (
    <form
      className={cn(styles.searchForm, styles.formMargin)}
      onSubmit={(event: FormEvent) => event?.preventDefault()}
      onClick={() => searchInputElem.current?.focus()}
    >
      <SearchIcon className={styles.icon} />
      <input
        value={searchValue}
        onChange={(event: FormEvent<HTMLInputElement>) =>
          setSearchValue(event?.currentTarget.value)
        }
        type="search"
        className={styles.searchInput}
        placeholder="Search"
        ref={searchInputElem}
      />
    </form>
  );
};
