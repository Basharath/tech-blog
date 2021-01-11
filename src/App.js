import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Navbar from './components/Navbar';
import Posts from './components/Posts';

import './styles/App.scss';
import Sidebar from './components/Sidebar';
import HomePage from './components/HomePage';

export default function App() {
  return (
    <>
      <Navbar />
      {/* <Posts /> */}
      {/* <Sidebar /> */}
      <HomePage />
    </>
  );
}
