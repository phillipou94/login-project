import React from 'react';

// var fieldValues = {
// 	name: 'Jim'
// };

var SurveyFields = React.createClass({
	getInitialState: function() {
		return {
			ageRange: null,
			colors: []
		}; 
	},

	render: function() {
		return(
			<div>
				<h1> Survey Questions </h1>

				<div className="radio-options">
					<h2> Age </h2>
					<div>
						<input type="radio" name="age" value="0-17"
													onClick={this.radioButtonClicked}/>
						<label>0-17</label>
					</div>
					<div>
						<input type="radio" name="age" value="18-21"
													onClick={this.radioButtonClicked}/>
						<label>18-21</label>
					</div>
					<div>
						<input type="radio" name="age" value="21+"
													onClick={this.radioButtonClicked}/>
						<label>21+</label>
					</div>
				</div>

				<div className="check-options">
					<h2>Favorite Colors </h2>
					<div>
						<input type="checkbox" name="color" value="green"
												onClick={this.checkBoxClicked}/>
						<label>Green</label>
					</div>
					<div>
						<input type="checkbox" name="color" value="red"
												onClick={this.checkBoxClicked}/>
						<label>Red</label>
					</div>
					<div>
						<input type="checkbox" name="color" value="blue"
												onClick={this.checkBoxClicked}/>
						<label>Blue</label>
					</div>
					<div>
						<input type="checkbox" name="color" value="yellow"
												onClick={this.checkBoxClicked}/>
						<label>Yellow</label>
					</div>
					<div>
						<input type="checkbox" name="color" value="purple"
												onClick={this.checkBoxClicked}/>
						<label>Purple</label>
					</div>
					  
				</div>

				<button onClick = {this.goBack}> Go Back </button>
				<button onClick = {this.saveAndContinue}>Save and Continue </button>

			</div>

		);
	},

	radioButtonClicked: function(e) {
		var ageRange = e.target.value;
		this.setState({ageRange:ageRange});

	},
	checkBoxClicked: function(e) {
		const colors = this.state.colors;
		var color = e.target.value;
		var index = colors.indexOf(color);
		if(index === -1) {
			colors.push(color);
		} else {
			colors.splice(index,1); //remove that index
		}
		this.setState({colors:colors});

	},
	goBack: function(e) {
		e.preventDefault();
		this.props.previousStep();
	},

	saveAndContinue: function(e) {
		e.preventDefault();
		var updatedValues = {
			age: this.state.ageRange,
			colors: this.state.colors
		}

		//call updateValues method in Registration.js which we've passed
		this.props.updateValues(updatedValues);	
		this.props.nextStep();

	},

});

export default SurveyFields;