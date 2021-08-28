import React from 'react';

import './styles.scss';

//components
import Header from '../Header';
import Parcours from '../Parcours';
import Skills from '../Skills';

export default function App() {
  return (
    <div className="container">
        <Header />
        <Parcours />
        <Skills />
        <section className="projects"></section>
        <footer></footer>
    </div>
  );
}
