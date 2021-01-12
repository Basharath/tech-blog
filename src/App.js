import React from 'react';
// import { Route, Switch } from 'react-router-dom';

import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import Footer from './components/Footer';

import './styles/App.scss';

export default function App() {
  return (
    <>
      <Navbar />
      <HomePage />
      <Footer />
    </>
  );
}
