import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Landing from './containers/Landing'
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(
  <BrowserRouter>
    <Landing />
  </BrowserRouter>,
  document.getElementById('root')
)

registerServiceWorker()
