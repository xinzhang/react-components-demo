import React, { Component } from 'react';
import {Button, ButtonToolbar, SplitButton, MenuItem} from 'react-bootstrap';

class ButtonComponent extends Component {
  render() {
    return (
      <div>
      <ButtonToolbar>
        <Button>Default</Button>
        <Button bsStyle="primary">Primary</Button>
        <Button bsStyle="success">Success</Button>
        <Button bsStyle="info">Info</Button>
        <Button bsStyle="warning">Warning</Button>
        <Button bsStyle="danger">Danger</Button>
        <Button bsStyle="link">Link</Button>
      </ButtonToolbar>
      <br />
      <SplitButton bsStyle="Default" title="Default" key1 id={`split-button-basic-1`}>
        <MenuItem eventKey="1">Action</MenuItem>
        <MenuItem eventKey="2">Another action</MenuItem>
        <MenuItem eventKey="3">Something else here</MenuItem>
        <MenuItem divider />
        <MenuItem eventKey="4">Separated link</MenuItem>
      </SplitButton>
      </div>
    );
  }
}

export default ButtonComponent;
