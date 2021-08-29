import React from 'react';

import './styles.scss';

export default function Footer() {
  return (
    <div className="footer-container">
    <section className="contacts-container">
        <ul className="coordonnees">
            <li className="contact">julie.vandard@hey.com</li>
            <li className="contact">06 76 07 07 06</li>
        </ul>
        <ul className="socials">
            <li><a href="https://www.linkedin.com/in/julie-vandard/" target="_blank" rel="noreferrer">Mon profil LinkedIn</a></li>
            <li> <a href="https://github.com/juliedev-web" target="_blank" rel="noreferrer">Mon profil Github</a></li>
         </ul>
         <ul>   
            <li><a href="https://twitter.com/jvgazouille" target="_blank" rel="noreferrer">Mon compte twitter</a></li>
            <li><a href="https://lesmainsdanslecode.com/" target="_blank" rel="noreferrer">Mon blog sur ma reconversion</a></li>
        </ul>
    </section>
        <footer className="footer-footer">#Me contacter</footer>
    </div>
  );
}