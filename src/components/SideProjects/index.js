import React from 'react';

import './styles.scss';

import apotheose from '../../assets/images/projects/apotheose.png';
import pancakes from '../../assets/images/projects/pancakes.png';
import uke from '../../assets/images/projects/ukeproject.png';
import portfolio from '../../assets/images/projects/portfolio.png';
import FEM_1 from '../../assets/images/projects/FEM_1.png';

export default function SideProjects() {
  return (
    <div className="sideprojects-container">
      <header className="sideprojects-header">#Projets</header>
        <section className="cards-container">
        <article className="card">
            <h3 className="card-title">Engrainons-nous</h3>
            <img className="card-img" src={apotheose} alt="capture d'écran du site"/>
            <p className="card-description">Engrainons-nous est le projet d'Apothéose réalisé en fin de formation O'Clock. L'équipe 3 dev front (dont moi) et 2 dev backs. Projet réalisé en méthode agile, avec des sprints de 2 semaines from scratch. Sur ce projet j'étais Scrum master et dev front. (Sur YouTube, suite à un soucis de son, montez le volume)</p>
            <a href="https://youtu.be/PHYfwht2dJU?t=568" target="_blank" rel="noreferrer" className="card-link card-link_FEM">La démo live sur YouTube</a>
            <a href="https://github.com/juliedev-web/Apo-Engrainons-nous" target="_blank" rel="noreferrer" className="card-link">Le lien Github</a>
          </article>
          <article className="card">
            <h3 className="card-title">Pimp my pancakes</h3>
            <img className="card-img" src={pancakes} alt="capture d'écran du site"/>
            <p className="card-description">L'objectif était de reprendre un challenge réalisé durant ma formation chez O'Clock pour l'améliorer : nouvelle mise en page avec sections alternant fond coloré ou des images de fond, nouvelle palette de couleurs et polices, ajout d'un header et d'un footer. Un projet revisité pour réviser !</p>
            <a href="https://pimp-my-pancakes.netlify.app/" target="_blank" rel="noreferrer" className="card-link card-link_FEM">Le projet en live</a>
            <a href="https://github.com/juliedev-web/PimpMyPancakes" target="_blank" rel="noreferrer" className="card-link">Le lien Github</a>
          </article>
          <article className="card">
            <h3 className="card-title">The ukulele project</h3>
            <img className="card-img" src={uke} alt="capture d'écran du site" />
            <p className="card-description">Au départ, ce n'était qu'un dessin d'ukulélé en CSS. J'ai eu envie d'en faire un site complet avec ce que je peux "enseigner" quand je donne des cours d'ukulélé. Ici le design coloré est assumé. J'étudie aussi la possibilité d'ajouter une API pour générer des accords (en cours).</p>
            <a href="https://theukuleleproject.vercel.app" target="_blank" rel="noreferrer" className="card-link">Le projet en live</a>
            <a href="https://github.com/juliedev-web/theukuleleproject" target="_blank" rel="noreferrer" className="card-link">Le lien Github</a>
          </article>
          <article className="card">
            <h3 className="card-title">Mon portfolio</h3>
            <img className="card-img" src={portfolio} alt="capture d'écran du site" />
            <p className="card-description">Mon portfolio : site pour me présenter en résumant mon parcours, mes compétences, mes projets et donner des moyens de me contacter. Premier projet perso réalisé en React.</p>
            <a href="https://github.com/juliedev-web/portfolio" target="_blank" rel="noreferrer" className="card-link">Le lien Github</a>
          </article>
          <article className="card">
            <h3 className="card-title">The first one !</h3>
            <img className="card-img" src={FEM_1} alt="capture d'écran du site" />
            <p className="card-description">Ma première intégration réalisée via le site <a href="https://www.frontendmentor.io/">Frontend Mentor</a>. Ma première intégration mobile-first. Mon premier projet déployé. </p>
            <a href="https://fem-single-price-grid-component-git-main-juliedev-web.vercel.app/" target="_blank" rel="noreferrer" className="card-link">Le projet en live</a>
            <a href="https://github.com/juliedev-web/FEM_Single_Price_Grid_Component" target="_blank" rel="noreferrer" className="card-link">Le lien Github</a>
          </article>
        </section>
    </div>
  );
}
