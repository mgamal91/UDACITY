import React from "react";
import ReactDOM from "react-dom";
import {Provider} from 'react-redux';
import {createStore, compose} from 'redux';
import middleware from './middleware'
import reducers from './reducers';
import "./index.css";
import App from "./App";
import 'bootstrap/dist/css/bootstrap.min.css';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, /* preloadedState, */ composeEnhancers(middleware));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById("root"));
