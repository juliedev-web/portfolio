import React from 'react';

import './styles.scss';

import pancakes from '../../assets/images/projects/pancakes.png'
import uke from '../../assets/images/projects/ukeproject.png'

export default function SideProjects() {
  return (
    <div className="sideprojects-container">
      <header className="sideprojects-header">#Projets</header>
        <section className="cards-container">
          <article className="card">
            <h3 className="card-title">Pimp my pancakes</h3>
            <img className="card-img" src={pancakes} alt="" />
            <p className="card-description">Je reprend un challenge réalisé durant ma formation chez O'Clock mais en l'améliorant : nouvelle mise en page avec sections avec fond coloré ou des images en fond avec le contenu qui scroll par-dessus, nouvelle palette de couleurs, nouvelles polices, ajout d'un header et d'un footer</p>
            <a href="https://pimp-my-pancakes.netlify.app/" target="_blank" rel="noreferrer" className="card-link">Le projet en live</a>
          </article>
          <article className="card">
            <h3 className="card-title">The ukulele project</h3>
            <img className="card-img" src={uke} alt="" />
            <p className="card-description">Le but est de pouvoir m'exercer sur les notions apprises en formation, et de monter en compétences. 
            Une seconde version avec le même contenu sera réalisée avec une mise en page plus moderne, et des choix techniques différents.</p>
            <a href="https://theukuleleproject.vercel.app" target="_blank" rel="noreferrer" className="card-link">Le projet en live</a>
          </article>
        </section>
    </div>
  );
}
