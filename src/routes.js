import React from 'react';
import { Route, IndexRoute } from 'react-router';

import AppComponent from './components/App';
import ButtonComponent from './components/Button';
import HomeComponent from './components/Home';
import TreeviewPage from './components/Treeview';
import GridPage from './components/Grid';
import CloudinaryPage from './components/Cloudinary';
import TreeSelectPage from './components/TreeSelectPage';
import EditableTreeViewPage from './components/EditableTreeViewPage';
import VideoPage from './components/VideoPage';
import ReactPlayerPage from './components/ReactPlayerPage';
import ReactHtml5VideoPage from './components/ReactHtml5VideoPage';
import ReactSelect from './components/ReactSelect';

export default (
  <Route path="/" component={AppComponent}>
    <IndexRoute component={HomeComponent} />
    <Route path="button" component={ButtonComponent} />
    <Route path="treeview" component={TreeviewPage} />
    <Route path="react-select" component={ReactSelect} />
    <Route path="editableTreeview" component={EditableTreeViewPage} />
    <Route path="treeSelect" component={TreeSelectPage} />
    <Route path="grid" component={GridPage} />
    <Route path="cloudinary" component={CloudinaryPage} />
    <Route path="video" component={VideoPage} />
    <Route path="react-player" component={ReactPlayerPage} />
    <Route path="react-html5-video" component={ReactHtml5VideoPage} />
  </Route>
);
