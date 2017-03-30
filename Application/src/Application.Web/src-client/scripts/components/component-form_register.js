import React from 'react'
import {ACTIONS} from '../actions.js'

export const RegisterComponent = React.createClass({

   render: function(){

      return (
        <div className="auth-form">
  				<form className = 'reg-form' onSubmit={this._handleSignup}>
            <h2>Sign up</h2>
          

           <input id="emailsignup" name="emailField" required="required" type="email" placeholder="email"/>

            <input type="password" className="form-control" placeholder='password' name="passwordField"/>

  			    <input type="text" className="form-control" placeholder='username' name="usernameField"/>
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
