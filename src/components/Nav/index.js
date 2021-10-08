import React from 'react';

import './styles.scss';

export default function Nav() {
  return (
    <div className="nav-container">
        <nav className="nav">
          <ul className="sections">
            <li className="sections sections_parcours"><p>#Parcours</p></li>
            <li className="sections sections_skills"><p>#Projets</p></li>
            <li className="sections sections_projects"><p>#Compétences</p></li>
            <li className="sections sections_contact"><p>#Me contacter</p></li>
          </ul>
        </nav>
    </div>
  );
}
