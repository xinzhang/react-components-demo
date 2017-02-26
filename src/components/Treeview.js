import React, { Component } from 'react';
import Tree from 'react-ui-tree';
import treeData from './treeData';

var cx = require('classnames');

class TreeviewPage extends React.Component {
  constructor(props) {
      super(props);
      console.log('init state');

      this.state = {
        active: '',
        tree: treeData
      };
      this.updateTree = this.updateTree.bind(this);
      this.handleChange = this.handleChange.bind(this);
      this.onClickNode = this.onClickNode.bind(this);
  }

  onClickNode(node) {
    console.log('onclick node');
    if (node != null) {
      this.setState({
        active: node
      });
    }
  }

  renderNode(node) {
      return (
        <span
          className={cx('node', {
            'is-active': node !== null && node === this.state.active
          })}
          onClick={this.onClickNode}>
          {node.module}
        </span>
      );
    }

    render() {
      return (
        <div>
          <div className="tree">
            <Tree
              paddingLeft={20}
              tree={this.state.tree}
              onChange={this.handleChange}
              isNodeCollapsed={this.isNodeCollapsed}
              renderNode={this.renderNode}
            />
          </div>
          <div className="inspector">
            <button onClick={this.updateTree}>update tree</button>
            <pre>
            {JSON.stringify(this.state.tree, null, '  ')}
            </pre>
           </div>
         </div>
      );
    }

    handleChange(tree) {
      console.log(tree);

      this.setState({
        tree: tree
      });
    }

    updateTree() {

      var tree = this.state.tree;
      tree.children.push({module: 'test'});

      this.setState({
        tree: tree
      });
    }

}

export default TreeviewPage;
