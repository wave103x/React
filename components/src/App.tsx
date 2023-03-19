import { useEffect, useRef, useState } from 'react';
import React from 'react';
import { SearchBar } from './components/SearchBar/SearchBar';
import { Link } from 'react-router-dom';
import { Router } from './components/Router';

export const App = () => {
  return (
    <>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
      <Router />
    </>
  );
};
