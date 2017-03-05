import React, { Component } from 'react';
import 'rc-tree-select/assets/index.css';
import TreeSelect, { TreeNode, SHOW_PARENT } from 'rc-tree-select';
import { gData } from './util';

class TreeSelectPage extends Component {

  constructor(props){
    super(props);

    this.state = {
      inputvalue:'root1',
      value:'root1',
      tsOpen: false,
    }

    this.onSearch = this.onSearch.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onChangeChildren = this.onChangeChildren.bind(this);
    this.onSelect = this.onSelect.bind(this);
  }

  onSearch(value) {
      console.log(value, arguments);
    }

    onChange(value) {
      console.log('onChange', arguments);
      this.setState({ value });
    }

    onChangeChildren(value) {
      console.log('onChangeChildren', arguments);
      //const pre = value ? this.state.value : undefined;
      //this.setState({ value: isLeaf(value) ? value : pre });
    }
    onSelect() {
        // use onChange instead
        console.log(arguments);
      }

  render() {

    // let gData = {
    //   label: 'root1',
    //   value: 'root1',
    //   key: 'root1',
    //   children: [
    //     {
    //       label:'child1',
    //       value: 'child1',
    //       key: 'child1'
    //     },
    //     {
    //       label:'child2',
    //       value: 'child2',
    //       key: 'child2',
    //       children:[
    //         {
    //           label:'grandchild2',
    //           value: 'grandchild2',
    //           key: 'grandchild2',
    //         },
    //         {
    //           label:'grandchild2',
    //           value: 'grandchild2',
    //           key: 'grandchild2',
    //         }
    //       ]
    //     },
    //     {
    //       label:'child3',
    //       value: 'child3',
    //       key: 'child3'
    //     }
    //   ]
    // }

    return (

        <TreeSelect
          style={{ width: 300 }}
          transitionName="rc-tree-select-dropdown-slide-up"
          choiceTransitionName="rc-tree-select-selection__choice-zoom"
          dropdownStyle={{ maxHeight: 200, overflow: 'auto' }}
          placeholder={<i>请下拉选择</i>}
          searchPlaceholder="please search"
          showSearch allowClear treeLine
          inputValue={this.state.inputValue}
          value={this.state.value}
          treeData={gData}
          treeNodeFilterProp="label"
          filterTreeNode={false}
          onSearch={this.onSearch}
          open={this.state.tsOpen}
          onChange={(value) => {
            console.log('onChange', arguments);
            if (value === '0-0-0-0-value') {
              this.setState({ tsOpen: true });
            } else {
              this.setState({ tsOpen: false });
            }
            this.setState({ value });
          } }
          onDropdownVisibleChange={(v, info) => {
            console.log('single onDropdownVisibleChange', v, info);
            // document clicked
            if (info.documentClickClose && this.state.value === '0-0-0-0-value') {
              return false;
            }
            return true;
          } }
          onSelect={this.onSelect}
        />
    );
  }
}

export default TreeSelectPage;
