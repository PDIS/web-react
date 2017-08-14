import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import Landing from './containers/Landing'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Landing />, document.getElementById('root'));
registerServiceWorker();
