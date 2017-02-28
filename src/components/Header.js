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
              <li className="active"><a href="/getting-started.html">Getting started</a></li>
              <li><a href="/button">Buttons</a></li>
              <li><a href="/grid">Grid</a></li>
              <li><a href="/treeview">Treeview</a></li>
              <li><a href="/support">Support</a></li>
              <li><a href="https://github.com/react-bootstrap/react-bootstrap" target="_blank">GitHub</a></li>
            </ul>
          </div>
        </div>
      </header>
    );
  }
}

export default HeaderComponent;
