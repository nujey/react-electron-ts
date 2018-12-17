import * as React from 'react';
import * as ReactDOM from 'react-dom';

// import { BrowserRouter } from 'react-router-dom';
import history from './untils/history'
import { Router } from 'react-router-dom';

import * as _ from 'lodash';

import App from './App';
import './styles/index.css';

import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(
  <Router history={history}>
    <App />
  </Router>
  , document.getElementById('root') as HTMLElement
);

registerServiceWorker();
