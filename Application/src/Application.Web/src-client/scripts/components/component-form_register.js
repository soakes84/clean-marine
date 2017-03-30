import React from 'react'
import {ACTIONS} from '../actions.js'

export const RegisterComponent = React.createClass({

   render: function(){

      return (
        <div className="auth-form">
  				<form className = 'reg-form' onSubmit={this._handleSignup}>
            <h2 className='reg-form_signup'>Sign up</h2>


           <input  name="emailField" required="required" type="email" placeholder="email"/>


            <input  className="form-control" name="passwordField" placeholder= "password"/>

  			    <input type="text" className="form-control" name="usernameField" placeholder= "username"/>
             <div>
            <button className="login-btn" type="submit">Create Account</button>
          </div>


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
