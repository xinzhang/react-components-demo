import React from 'react';
import { Route, IndexRoute } from 'react-router';

import AppComponent from './components/App';
import ButtonComponent from './components/Button';
import HomeComponent from './components/Home';

export default (
  <Route path="/" component={AppComponent}>
    <IndexRoute component={HomeComponent} />
    <Route path="button" component={ButtonComponent} />
  </Route>
);
