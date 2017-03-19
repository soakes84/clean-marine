// import React from 'react'
// import Backbone from 'backbone';
// import ReactDOM from 'react-dom'
//
// var React         = require('react')
// var AccountFields = require('./AccountFields')
// var SurveyFields  = require('./SurveyFields')
// var Confirmation  = require('./Confirmation')
// var Success       = require('./Success')
//
// var fieldValues = {
//   name     : null,
//   email    : null,
//   password : null,
//   colors   : []
// },
//
//
// const Registration = React.createClass({
// 	getInitialState: function() {
// 		return {
// 			step: 1
// 		}
// 	},
//
// saveValues: function(fields) {
//   return function() {
//     fieldValues = Object.assign({}, fieldValues, fields)
//   }()
// },
//
// nextStep: function() {
//   this.setState({
//     step : this.state.step + 1
//   })
// },
//
// previousStep: function() {
//   this.setState({
//     step : this.state.step - 1
//   })
// },
//
// submitRegistration: function() {
//     // Handle via ajax submitting the user data, upon
//     // success return this.nextStop(). If it fails,
//     // show the user the error but don't advance
//
//     this.nextStep()
//   },
//
//   showStep: function() {
//     switch (this.state.step) {
//       case 1:
//         return <AccountFields fieldValues={fieldValues}
//                               nextStep={this.nextStep}
//                               previousStep={this.previousStep}
//                               saveValues={this.saveValues} />
//       case 2:
//         return <SurveyFields fieldValues={fieldValues}
//                              nextStep={this.nextStep}
//                              previousStep={this.previousStep}
//                              saveValues={this.saveValues} />
//       case 3:
//         return <Confirmation fieldValues={fieldValues}
//                              previousStep={this.previousStep}
//                              submitRegistration={this.submitRegistration} />
//       case 4:
//         return <Success fieldValues={fieldValues} />
//     }
//   },
//
//   render: function() {
//     var style = {
//       width : (this.state.step / 4 * 100) + '%'
//     }
//
//     return (
//       <main>
//         <span className="progress-step">Step {this.state.step}</span>
//         <progress className="progress" style={style}></progress>
//         {this.showStep()}
//       </main>
//     )
//   }
// })
//
//
// module.exports = Registration
