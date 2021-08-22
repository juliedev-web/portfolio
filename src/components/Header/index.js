import React from 'react';

import './styles.scss';

export default function Header () {
  return (
    <div className="header-container">
        <nav className="nav-container">
          <ul className="links">
            <li className="links links_parcours"><a href="#parcours" className="a_parcours">#Parcours</a></li>
            <li className="links links_skills"><a href="#skills">#Compétences</a></li>
            <li className="links links_projects"><a href="#projects">#Projets</a></li>
            <li className="links links_contact"><a href="#contact">#Me contacter</a></li>
          </ul>
        </nav>
    </div>

  );
}
