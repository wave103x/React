import { NavLink } from 'react-router-dom';
import { Component } from 'react';

import styles from './Header.module.scss';

import { menus } from './menus';

export class Header extends Component {
  render() {
    return (
      <header className={styles.header}>
        {menus.map((elem) => (
          <NavLink to={elem.to} className={styles.link} key={elem.id}>
            {elem.text}
          </NavLink>
        ))}
      </header>
    );
  }
}
