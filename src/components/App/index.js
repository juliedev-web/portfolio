import React from 'react';

import './styles.scss';

//components
import Header from '../Header';
import Nav from '../Nav';
import Parcours from '../Parcours';
import Skills from '../Skills';
import SideProjects from '../SideProjects';
import Footer from '../Footer';

export default function App() {
  return (
    <div className="container">
        <Header />
        <Nav />
        <Parcours />
        <SideProjects />
        <Skills />
        <Footer />
    </div>
  );
}
