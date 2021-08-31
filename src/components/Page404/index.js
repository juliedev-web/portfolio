import React from 'react';

import './styles.scss';

//Components
import Header from '../Header';
import Footer from '../Footer';
import NotFound from '../Page404';

export default function Page404() {
  return (
    <div className="page404">
        <Header />
        <NotFound />
        <Footer />
    </div>
  );
}
