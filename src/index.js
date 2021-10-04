import React from 'react';
import { render } from 'react-dom';

//styles
import './styles/styles.scss';

//components
import App from './components/App';

const rootReactElement = (<App />);
// 2. La cible du DOM (là où la structure doit prendre vie dans le DOM)
const target = document.getElementById('root');
// 3. Déclenchement du rendu de React (virtuel) => DOM (page web)
render(rootReactElement, target);

