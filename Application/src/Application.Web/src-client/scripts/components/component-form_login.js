import React from 'react';
import {ACTIONS} from '../actions.js';

export const LoginComponent = React.createClass({
  _handleSubmit: function(evt){
    evt.preventDefault()
    let formEl = evt.target
    let usrVal = formEl.emailField.value
    		let pwVal = formEl.passwordField.value
    		ACTIONS.loginUser(usrVal, pwVal)
    	},

       render: function(){
          let currentRatingShown = this.props.shownRatingType

          return (
          <div className="login_page">
    				<form onSubmit={this._handleSubmit}>

              <h1>Log In</h1>
                <h4> Email </h4>
    	        <input id="emailsignup" name="emailsignup" required="required" type="email" placeholder="email"/>

                <h4>Password </h4>
    	           <input id="passwordsignup" name="passwordsignup" required="required" type="password" placeholder="password"/>


                <div>
    	            <button className= "login-btn"  type="submit">Submit</button>
                </div>
           </form>
    			</div>
          )
       }
    })
