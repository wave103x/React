import styles from './Layout.module.scss';
import { LayoutProps } from './Layout.props';
import cn from 'classnames';
import { Header } from './Header/Header';
import { Footer } from './Footer/Footer';
import React, { Component } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

export class Layout extends Component {
  render() {
    return (
      <div className={styles.wrapper}>
        <Header />
        <Outlet />
        <Footer />
      </div>
    );
  }
}
