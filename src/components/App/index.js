import React from 'react';

import './styles.scss';

//components
import Header from '../Header';
import Parcours from '../Parcours';

export default function App() {
  return (
    <div className="container">
        <Header />
        <Parcours />
        <section className="skills"></section>
        <section className="projects"></section>
        <footer></footer>
    </div>
  );
}
