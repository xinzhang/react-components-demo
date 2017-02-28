import React, { Component } from 'react';
import Grid from 'react-data-grid';

class GridPage extends React.Component {
  createRows() {
   let rows = [];
   for (let i = 1; i < 1000; i++) {
     rows.push({
       id: i,
       title: 'Title ' + i,
       count: i * 1000
     });
   }
   return rows;
  }

  createCols() {
    return  [
      { key: 'id', name: 'ID' },
      { key: 'title', name: 'Title' },
      { key: 'count', name: 'Count' }
    ];
  }

  constructor(props) {
      super(props);

      console.log('constructor');

      this.createRows = this.createRows.bind(this);
      this.createCols = this.createCols.bind(this);
      this.rowGetter = this.rowGetter.bind(this);

      this.state = {
        rows: this.createRows(),
        cols: this.createCols()
      }

      console.log(this.state);
  }

  rowGetter(i) {
    return this.state.rows[i]
  }

  render() {
    console.log(this.state);

    return (
      <Grid
        columns={this.state.cols}
        rowGetter={this.rowGetter}
        rowsCount={this.state.rows.length}
        minHeight={500}
        />
    );
  }

}

export default GridPage;
