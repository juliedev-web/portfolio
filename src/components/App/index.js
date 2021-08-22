import React from 'react';

import './styles.scss';

//components
import Header from '../Header';

export default function App() {
  return (
    <div className="container">
        <Header />
        <section className="parcours"></section>
        <section className="skills"></section>
        <section className="projects"></section>
        <footer></footer>
    </div>
  );
}
