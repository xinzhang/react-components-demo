import React, { Component } from 'react';

class EditableTreeview extends Component {

  constructor(props) {
      super(props);

      this.editName = this.editName.bind(this);
      this.findNode = this.findNode.bind(this);
  }

  changestatus(c) {

    if (c.status === 'collapse') {
      c.status = 'expand';
    }
    else if (c.status === 'expand') {
      c.status = 'collapse';
    }

    this.setState({});
  }

  edit(c) {
    console.log('dbl click', c);

    c.isEdit = true;
    this.setState({});
  }

  editName(e) {
    console.log(e);

    if(e.keyCode === 13){
      //c.name = event.target.value;
      let c = this.findNode(this.props.tree, e.target.name);
      if (c!= null){
        c.name = e.target.value;
        c.isEdit = false;
        this.setState({});
        console.log(c);
      }
    }
  }

  findNode(c, name) {
    if (c.name === name)
      return c;

    if (c.subcategories) {
      for (let i=0; i<c.subcategories.length;i++) {
        let r = this.findNode(c.subcategories[i], name);
        if (r != null) {
          return r;
        }
      }
    }//end if

    return null;
  }

  renderTree(c){
     return(
       <ul className="treevew-container">
         {c.subcategories && c.subcategories.length > 0 && c.status==="collapse" &&
           <i className="glyphicon glyphicon-plus" onClick={() => this.changestatus(c)}></i>
         }
         {c.subcategories && c.subcategories.length > 0 && c.status==="expand" &&
           <i className="glyphicon glyphicon-minus" onClick={()=> this.changestatus(c)}></i>
         }
         <li className="node-list" key={c.name}>
            {!c.isEdit &&
              <div onDoubleClick={()=>this.edit(c)}>{c.name}</div>
            }
            {c.isEdit &&
              <input type="text" defaultValue={c.name} name={c.name} onKeyDown={this.editName} />
            }
         </li>
         {c.subcategories && c.subcategories.length > 0 && c.status ==="expand" &&
           c.subcategories.map(x => {
             return this.renderTree(x);
           })
         }
       </ul>
     )
  }

  render() {
    let treeViewHtml = this.renderTree(this.props.tree);
    return (
      <div>{treeViewHtml}</div>
    )
  }

}

export default EditableTreeview;
