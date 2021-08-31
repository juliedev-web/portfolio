import React from 'react';

import './styles.scss';

//components
import Header from '../Header';
import Footer from '../Footer';
import History from '../Parcours';

export default function Parcours() {
  return (
    <div className="parcours">
      <Header />
      <History />
      <Footer />
    </div>
  );
}
