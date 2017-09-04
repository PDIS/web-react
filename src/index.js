import React from 'react';
import ReactDOM from 'react-dom';
import Landing from './containers/Landing'
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom'
import './index.css'

ReactDOM.render(
  <BrowserRouter>
    <Landing />
  </BrowserRouter>,
  document.getElementById('root')
)

registerServiceWorker()
