import { Routes, Route } from 'react-router-dom';
import { Component } from 'react';

import { Home } from './Pages/';
import { About } from './Pages/';
import { Forms } from './Pages/';
import { NotFound } from './Pages/';
import { Layout } from './layout/Layout';

import { RoutePaths } from './enums/RoutePaths';

export class Router extends Component {
  private testCard = {
    name: 'Myname',
    word: 'qq',
    date: new Date(),
    heared: 'mom',
    feelings: ['sad'],
    faked: 'yes',
    photo: 'http://qq.com',
  };
  render() {
    return (
      <Routes>
        <Route path={RoutePaths.ROOT} element={<Layout />}>
          <Route index element={<Home />} />
          <Route path={RoutePaths.ABOUT} element={<About />} />
          <Route path={RoutePaths.FORMS} element={<Forms />} />
          <Route path={RoutePaths.ALL} element={<NotFound />} />
        </Route>
      </Routes>
    );
  }
}
