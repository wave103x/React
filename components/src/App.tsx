import { Component, useEffect, useRef, useState } from 'react';
import React from 'react';
import { SearchBar } from './components/SearchBar/SearchBar';
import { Link } from 'react-router-dom';
import { Router } from './Router';
import { Layout } from './layout/Layout';

export class App extends Component {
  render() {
    return <Router />
  }
}