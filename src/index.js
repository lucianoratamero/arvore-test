import React from 'react';
import ReactDOM from 'react-dom';
import './static/css/index.css';
import App from './components/app/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
