import React, { Component } from 'react';

class HeaderComponent extends Component {
  render() {
    return (
      <header className="bs-docs-nav navbar navbar-default navbar-static-top" role="banner">
        <div className="container">
          <div className="navbar-header">
            <a className="navbar-brand" href="/">React-Bootstrap-demo</a>
            <button className="navbar-toggle collapsed" type="button">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
          </div>
          <div className="navbar-collapse bs-navbar-collapse collapse">
            <ul className="nav navbar-nav" id="top" role="navigation">
              <li className="dropdown">
                <a className="dropdown-toggle" role="button" href="#" data-toggle="dropdown">
                  UI component<span className="caret"></span>
                </a>
                <ul className="dropdown-menu">
                  <li><a href="/button">Buttons</a></li>
                  <li><a href="/grid">Grid</a></li>
                  <li><a href="/react-select">React-Select</a></li>
                </ul>
              </li>
              <li className="dropdown">
                <a className="dropdown-toggle" role="button" href="#" data-toggle="dropdown">
                  Tree<span className="caret"></span>
                </a>
                <ul className="dropdown-menu">
                  <li><a href="/treeview">Treeview</a></li>
                  <li><a href="/editableTreeview">Editable Treeview</a></li>
                  <li><a href="/treeSelect">TreeSelect</a></li>
                </ul>
              </li>
              <li className="dropdown">
                <a className="dropdown-toggle" role="button" href="#" data-toggle="dropdown">
                  Player<span className="caret"></span>
                </a>
                <ul className="dropdown-menu">
                  <li><a href="/react-player">React-Player</a></li>
                  <li><a href="/react-html5-video">React-HTML5-VideoPlayer</a></li>
                </ul>
              </li>
              <li><a href="/cloudinary">Cloudinary</a></li>
              <li><a href="/video">Video</a></li>
            </ul>
          </div>
        </div>
      </header>
    );
  }
}

export default HeaderComponent;
