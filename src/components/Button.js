import React, { Component } from 'react';
import {Button, ButtonToolbar, SplitButton, MenuItem} from 'react-bootstrap';

class ButtonComponent extends Component {

  constructor(props, context){
      super(props, context);
      this.state = {
        splitButtonClickedText : '',
        toolbarButtonClickedText : ''
      };

  }

  handleSplitButtonMenuItem(title) {
    this.setState({
      splitButtonClickedText:title
    }, () => {
      console.log(this.state);
    })

  }

  toolbarButtonClick(title) {
    this.setState({
      toolbarButtonClickedText:title
    }, () => {
      console.log(this.state);
    })

  }

  render() {

    return (
      <div>
      <ButtonToolbar>
        <Button onClick={this.toolbarButtonClick.bind(this, 'default')}>Default</Button>
        <Button bsStyle="primary" onClick={()=>this.toolbarButtonClick('primary')}>Primary</Button>
        <Button bsStyle="success"  onClick={()=>this.toolbarButtonClick('success')}>Success</Button>
        <Button bsStyle="info">Info</Button>
        <Button bsStyle="warning">Warning</Button>
        <Button bsStyle="danger">Danger</Button>
        <Button bsStyle="link">Link</Button>
      </ButtonToolbar>
      <br />
      
      <SplitButton bsStyle="Default" title="Default" key1 id={`split-button-basic-1`}>
        <MenuItem eventKey="1" onClick={this.handleSplitButtonMenuItem.bind(this, 'Action')}>Action</MenuItem>
        <MenuItem eventKey="2" onClick={() => this.handleSplitButtonMenuItem('Another action')}>Another action</MenuItem>
        <MenuItem eventKey="3" onClick={() => this.handleSplitButtonMenuItem('Something else')}>Something else here</MenuItem>
        <MenuItem divider />
        <MenuItem eventKey="4" onClick={this.handleSplitButtonMenuItem.bind(this, 'separated link')}>Separated link</MenuItem>
      </SplitButton>
      <br/>

      {this.state.toolbarButtonClickedText} - {this.state.splitButtonClickedText}
      </div>
    );
  }
}

export default ButtonComponent;
