import React from 'react';

import './styles.scss';

import Header from '../Header';
import Footer from '../Footer';
import Home from '../Homepage';

export default function Homepage() {
  return (
    <div className="Homepage">
        <Header />
        <Home />
        <Footer />
    </div>
  );
}
