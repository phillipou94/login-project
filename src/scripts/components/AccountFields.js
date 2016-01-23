import React from 'react';

// var fieldValues = {
// 	name: 'Jim'
// };

var AccountFields = React.createClass({

	render: function() {
		return(
			<div>
				<h1> Account Details </h1>
				<label>Name</label>
				<input type = "text" ref = "name" defaultValue = {this.props.fieldValues.name}/>
				<label>Email</label>
				<input type = "text" ref = "email" defaultValue = {this.props.fieldValues.email} />
				<label>Password</label>
				<input type = "password" ref = "password" defaultValue = {this.props.fieldValues.password} />
				<button onClick = {this.saveAndContinue}>Save and Continue </button>
			</div>

		);
	},

	saveAndContinue: function(e) {
		e.preventDefault();

		var updatedValues = {
			//get value in ref = name
			name: this.refs.name.value,
			email: this.refs.email.value,
			password: this.refs.password.value
		}

		//call updateValues method in Registration.js which we've passed
		this.props.updateValues(updatedValues);	
		this.props.nextStep();

	},

});

export default AccountFields;