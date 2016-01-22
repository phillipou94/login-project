import React from 'react';
import AccountFields from './AccountFields'


var fieldValues = {
  name : null,
  email : null,
  password : null,
  age : null,
  colors : []
}

var Registration = React.createClass({
	getInitialState: function() {
		return {
			step: 1
		}; 
	},
  render: function() {
  	switch(this.state.step) {
  		case 1:
  			return <AccountFields 
                  fieldValues = {fieldValues} 
                  updateValues = {this.updateValues}
                  nextStep = {this.nextStep}/>;
  		default: 
  			return <h1> Hello World!</h1>;
  	}
  },

  updateValues: function(newFieldValues) {
    fieldValues = Object.assign({}, fieldValues, newFieldValues);
  },

  nextStep: function() {
    this.setState({step: this.step + 1})
  },

  previousStep: function() {
    this.setState({step: this.step - 1})
  }
});

export default Registration;