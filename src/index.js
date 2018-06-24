import React from 'react';
import ReactDOM from 'react-dom';
import './static/scss/base.css';
import App from './components/app';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
