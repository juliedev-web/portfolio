import React from 'react';

import './styles.scss';

export default function Header () {
  return (
    <div className="header-container">
      <header className="header-title">
        <h1>Julie Vandard</h1>
        <h2>Développeuse web frontend</h2>
      </header>
      <nav className="nav-container">
        <ul className="links">
          <li><a href="#parcours">#Parcours</a></li>
          <li><a href="#skills">#Compétences</a></li>
          <li><a href="#projects">#Projets</a></li>
          <li><a href="#contact">#Me contacter</a></li>
        </ul>
      </nav>
    </div>

  );
}
