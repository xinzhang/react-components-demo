import React from 'react';
import { Route, IndexRoute } from 'react-router';

import AppComponent from './components/App';
import ButtonComponent from './components/Button';
import HomeComponent from './components/Home';
import TreeviewPage from './components/Treeview';
import GridPage from './components/Grid';
import CloudinaryPage from './components/Cloudinary';
import TreeSelectPage from './components/TreeSelectPage';

export default (
  <Route path="/" component={AppComponent}>
    <IndexRoute component={HomeComponent} />
    <Route path="button" component={ButtonComponent} />
    <Route path="treeview" component={TreeviewPage} />
    <Route path="treeSelect" component={TreeSelectPage} />
    <Route path="grid" component={GridPage} />
    <Route path="cloudinary" component={CloudinaryPage} />
  </Route>
);
