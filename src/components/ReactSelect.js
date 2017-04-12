import React from 'react';
import Select from 'react-select';

export default class ReactSelect extends React.Component {
  constructor(props, context){
    super(props, context);
    this.state = {
      options: [
      				{ value: true, label: 'Yes' },
      				{ value: false, label: 'No' }
      			],
      value: null
    }

    this.onChange = this.onChange.bind(this);
  }

  onChange(value) {
  		this.setState({ value });
  		console.log('Boolean Select value changed to', value);
  }

  render() {
    return (
      <div className="section">
				<h3 className="section-heading">boolean select</h3>
				<Select
					onChange={this.onChange}
					options={this.state.options}
					simpleValue
					value={this.state.value}
					/>
				<div className="hint">This example uses simple boolean values</div>
			</div>
    )
  }


}
