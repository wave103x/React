import styles from './Header.module.scss';
import { HeaderProps } from './Header.props';
import cn from 'classnames';
import { NavLink, Location } from 'react-router-dom';
import { Component } from 'react';

export class Header extends Component {
  render() {
    return (
      <header className={styles.header}>
        <NavLink className={styles.link} to="/">Home</NavLink>
        <NavLink className={styles.link} to="/about">About</NavLink>
      </header>
    );
  }
}
