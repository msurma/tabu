import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './resources/scss/main.scss';
import { store } from "./store";
import { Provider } from "react-redux";

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));

module.hot.accept();