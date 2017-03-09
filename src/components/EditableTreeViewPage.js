import React, { Component } from 'react';

import EditableTreeview from './EditableTreeview';

class EditableTreeviewPage extends React.Component {

  constructor(props) {
      super(props);
  }

  render() {
    return (
      <EditableTreeview tree={this.constructor.tree}/>
    );
  }
}

EditableTreeviewPage.tree = {
  name:'Electric',
  status:'collapse',
  subcategories:[
    {
      name:'desktop',
    },
    {
      name:'tv',
    },
    {
      name:'console',
    },
    {
      name:'laptops',
      status:'collapse',
      subcategories:[{
        name:'brand',
        subcategories:[
          {name:'ibm'},
          {name:'lenova'},
          {name:'dell'},
          {name:'hp'}
        ]
      },
      {
          name:'memory',
          status:'collapse',
          subcategories:[
            {name:'4g'},
            {name:'8g'},
            {name:'16g'}
          ]
      },
      {
          name:'disk',
          status:'collapse',
          subcategories:[
            {name:'64G'},
            {name:'128G'},
            {name:'500G'},
            {name:'1TB'}
          ]
      }
    ]
    },
    {
      name: 'software',
      status:'collapse',
      subcategories:[{
        name:'office'
      },{
        name:'sql server'
      },{
        name:'photoshop'
      },{
        name:'atom'
      }]
    }
  ]
}

export default EditableTreeviewPage;
