import React from 'react';
import { render } from 'react-dom';

//styles
import './index.css';

//components
import Portfolio from './components/Portoflio';


const rootReactElement = <Portfolio />;
// 2. La cible du DOM (là où la structure doit prendre vie dans le DOM)
const target = document.getElementById('root');
// 3. Déclenchement du rendu de React (virtuel) => DOM (page web)
render(rootReactElement, target);

