import React from 'react';

import './styles.scss';

export default function Footer() {
  return (
    <div className="footer-container">
    <section className="contacts-container">
        <div className="coordonnees">
            <p className="contact">julie.vandard@hey.com</p>
            <p className="contact">06 76 07 07 06</p>
        </div>
        <div className="socials">
            <a href="https://www.linkedin.com/in/julie-vandard/" target="_blank" rel="noreferrer">Mon profil LinkedIn</a>
            <a href="https://github.com/juliedev-web" target="_blank" rel="noreferrer">Mon profil Github</a>
            <a href="https://twitter.com/jvgazouille" target="_blank" rel="noreferrer">Mon compte twitter</a>
            <a href="https://lesmainsdanslecode.com/" target="_blank" rel="noreferrer">Mon blog sur ma reconversion</a>
        </div>
    </section>
        <footer className="footer-footer">#Me contacter</footer>
    </div>
  );
}