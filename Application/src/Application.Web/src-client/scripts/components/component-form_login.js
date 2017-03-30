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
    	        <input id="emailsignup" name="emailField" required="required" type="email" placeholder="email"/>


    	           <input id="passwordsignup" name="passwordField" required="required" type="password" placeholder="password"/>


    	            <button style={{margin : "10px" } }  type="submit">Submit</button>
    				</form>

    			</div>
          )
       }
    })
