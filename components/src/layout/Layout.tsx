import React, { Component } from 'react';
import { Outlet } from 'react-router-dom';

import { Header } from './Header/Header';
import { Footer } from './Footer/Footer';

import styles from './Layout.module.scss';

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
