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
    </div>

  );
}
