import React from 'react';
import { Outlet } from 'react-router-dom';

import { Header } from './Header/Header';
import { Footer } from './Footer/Footer';

import styles from './Layout.module.scss';

export const Layout = () => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};
