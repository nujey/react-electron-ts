import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { BrowserRouter } from 'react-router-dom';

import * as _ from 'lodash';

import App from './App';
import './styles/index.css';

import registerServiceWorker from './registerServiceWorker';

function handle(t:number) {
  console.log(t)
}
handle(Date.now())

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
  , document.getElementById('root') as HTMLElement
);
registerServiceWorker();
