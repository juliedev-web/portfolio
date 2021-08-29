import React from 'react';

import './styles.scss';

export default function Parcours() {
  return (
    <div className="parcours-container">
        <section className="description">
            <article>
                <p>Après dix-huit années dans le journalisme, dont quinze dans la mise en page, la relecture et la correction, j’ai décidé de me reconvertir et de devenir développeuse web frontend.</p>
                <p>J’ai suivi une formation intensive chez <a href="https://oclock.io/" target="_blank" rel="noreferrer">O’Clock </a>durant cinq mois pour me reconvertir.</p>
                <p><span>(Photo by <a href="https://unsplash.com/photos/95YRwf6CNw8" target="_blank" rel="noreferrer">Clément Hélardot on Unsplash</a>  )</span></p>
            </article>
            <footer className="parcours-footer">#Mon parcours</footer>
        </section>
        <div className="illustration"></div>
    </div>
  );
}
