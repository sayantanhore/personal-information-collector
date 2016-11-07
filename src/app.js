import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Page from './Page';
import {store} from './store';
require('./app.scss');

ReactDOM.render(<Page activePage={store.activePage}/>, document.getElementById('container'));
