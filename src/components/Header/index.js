import React from 'react';

import './styles.scss';

export default function Header () {
  return (
    <div className="header-container">
      <section className="titles">
        <div className="titles-name">
          <p><span>Julie</span> Vandard</p>
        </div>
        <div className="titles-job">
          <p><span>#</span>Développeuse <span>web frontend</span></p>
        </div>
      </section>
        <nav className="nav-container">
          <ul className="sections">
            <li className="sections sections_parcours"><p className="p_parcours">#Parcours</p></li>
            <li className="sections sections_skills"><p>#Compétences</p></li>
            <li className="sections sections_projects"><p>#Projets</p></li>
            <li className="sections sections_contact"><p>#Me contacter</p></li>
          </ul>
        </nav>
    </div>

  );
}
