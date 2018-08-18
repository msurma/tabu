import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './resources/scss/main.scss';

ReactDOM.render(<App />, document.getElementById('root'));

module.hot.accept();