import React, { Component } from 'react';
import Tree from 'react-ui-tree';
import treeData from './treeData';

class TreeviewPage extends React.Component {
  constructor(props) {
      super(props);
      console.log(treeData);
      this.state = {
        action: null,
        tree: treeData
      };
  }

  onClickNode(node) {
    this.setState({
      active: node
    });
  }

  renderNode(node) {
      return (
        <span>
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
