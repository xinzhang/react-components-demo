import React, { Component } from 'react';
import ReactHighcharts from 'react-highcharts';

const config = {
  xAxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  },
  series: [{
    data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 295.6, 454.4]
  }]
};

class HighchartPage extends Component {
  render() {
    return (
      <main className="bs-docs-masthead" id="content" role="main">
        <div className="container">
          <span className="bs-docs-booticon bs-docs-booticon-lg bs-docs-booticon-outline"></span>
          <p className="lead">High chart</p>
        </div>

        <div className="row">
          <ReactHighcharts config={config} />
        </div>

      </main>
    );
  }
}

export default HighchartPage;
