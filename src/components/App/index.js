import React from 'react';

import './styles.scss';

//components
import Header from '../Header';
import Parcours from '../Parcours';
import Skills from '../Skills';
import SideProjects from '../SideProjects';

export default function App() {
  return (
    <div className="container">
        <Header />
        <Parcours />
        <Skills />
        <SideProjects />
        <footer></footer>
    </div>
  );
}
