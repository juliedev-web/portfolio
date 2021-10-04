import React from 'react';
import './styles.scss';

//components
import Homepage from '../Homepage';
import Parcours from '../Parcours';
import Skills from '../Skills';
import SideProjects from '../SideProjects';
import Page404 from '../Page404';

export default function App() {
  return (
    <div className="container">
          <Homepage />
          <Parcours />
          <Skills />
          <SideProjects />
          <Page404 />
    </div>
  );
}
