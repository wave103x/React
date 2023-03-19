import { Routes, Route } from 'react-router-dom';
import { Home } from './Pages/Home/Home';
import { About } from './Pages/About/About';
import { NotFound } from './Pages/404/NotFound';
import { Layout } from './layout/Layout';
import { Component } from 'react';

export class Router extends Component {
  render() {
    return (
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    );
  }
}