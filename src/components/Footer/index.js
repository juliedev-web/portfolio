import React from 'react';

import {
  faEnvelopeSquare,
  faPhoneSquare,
  faBlog
} from '@fortawesome/free-solid-svg-icons';

import {
  faLinkedin,
  faGithubSquare,
  faTwitterSquare,
} from '@fortawesome/free-brands-svg-icons';

import './styles.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Footer() {
  return (
    <div className="footer-container" id="footer">
    <section className="contacts-container">
        <ul className="coordonnees">
            <li className="contact">
            <FontAwesomeIcon icon={faEnvelopeSquare} className="fa-icon" 
            />julie.vandard@hey.com</li>
            <li className="contact">
            <FontAwesomeIcon icon={faPhoneSquare} className="fa-icon" 
            /> 06 76 07 07 06</li>
        </ul>
        <ul className="socials">
            <li><a href="https://www.linkedin.com/in/julie-vandard/" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faLinkedin} className="fa-icon" 
            />Mon profil LinkedIn</a></li>
            <li className="github"><a href="https://github.com/juliedev-web" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faGithubSquare} className="fa-icon" 
            />Mon profil Github</a></li>
         </ul>
         <ul className="socials">   
            <li><a href="https://twitter.com/jvgazouille" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faTwitterSquare} className="fa-icon" 
            />Mon compte twitter</a></li>
            <li className="blog"><a href="https://lesmainsdanslecode.com/" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faBlog} className="fa-icon" 
            />Mon blog sur ma reconversion</a></li>
        </ul>
    </section>
        <footer className="footer-footer">#Me contacter</footer>
    </div>
  );
}