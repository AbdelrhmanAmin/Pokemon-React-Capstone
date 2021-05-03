import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App';
import Preview from './Components/Preview';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

ReactDOM.render(
  <Router>
    <Switch>
      <Route path='/' exact component={App} />
      <Route path='/:id' exact component={Preview} />
    </Switch>
  </Router>,
  document.getElementById('root')
);
