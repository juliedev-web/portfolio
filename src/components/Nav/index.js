import React from 'react';
import { Link } from "react-scroll";

import './styles.scss';

export default function Nav() {
  return (
    <div className="nav-container">
        <nav className="nav">
          <ul className="sections">
            <li className="sections sections_menu">
              <Link 
                  activeClass="active"
                  to="parcours"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  >
                  #Parcours
                </Link>
            </li>
            <li className="sections sections_menu">
              <Link 
                  activeClass="active"
                  to="projects"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  >
                  #Projets
                </Link>
            </li>
            <li className="sections sections_menu">
              <Link 
                activeClass="active"
                to="skills"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
              #Compétences
              </Link>
            </li>
            <li className="sections sections_menu">
              <Link 
                    activeClass="active"
                    to="footer"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    >
                    #Me contacter
                  </Link>
            </li>
          </ul>
        </nav>
    </div>
  );
}
