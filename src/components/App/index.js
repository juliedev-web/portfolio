import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './styles.scss';

//components
import Homepage from '../Homepage';
//import Parcours from '../Parcours';
// import Skills from '../Skills';
// import SideProjects from '../SideProjects';
// import Page404 from '../Page404';

export default function App() {
  return (
    <div className="container">
      <Switch>

        <Route>
          <Homepage path="/" exact />
        </Route>

        {/* <Route >
          <Parcours path="/parcours" exact />
        </Route> */}

        {/* <Route>
          <Skills path="/compétences" exact />
        </Route>
        
        <Route>
          <SideProjects path="/compétences" exact />
        </Route>
        
        <Route>
          <Page404 />
        </Route> */}

      </Switch>
    </div>
  );
}
