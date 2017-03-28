import React from 'react'
import {ACTIONS} from '../actions.js'

export const RegisterComponent = React.createClass({

   render: function(){

      return (
        <div className="auth-form">
  				<form onSubmit={this._handleSignup}>
            <h1>Sign up</h1>
            <h4>Email </h4>
  			    <input type="text" className="form-control" name="emailField"/>
            <h4>Password </h4>
            <input type="password" className="form-control" name="passwordField"/>
            <h4>Username </h4>
  			    <input type="text" className="form-control" name="usernameField"/>
            <button className="btn btn-block btn-success btn-lg" type="submit">Create Account</button>
  				</form>
			  </div>
      )
   },

	_handleSignup: function(evt){
		evt.preventDefault();
		console.log(evt.target);
		let formEl = evt.target
		let objToSave = {
      email: formEl.emailField.value,
		  password: formEl.passwordField.value,
      username: formEl.usernameField.value
		}
    console.log(objToSave);
		ACTIONS.registerNewUser(objToSave)
	}
})
