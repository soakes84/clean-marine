import React from 'react';
import {Navbar} from '../components/component-navbar.js';
import {ACTIONS} from '../actions.js';
import {STORE} from '../store.js';
import {DebrisListComponent} from '../components/component-debris_list.js';

export const RegisterView = React.createClass({
  getInitialState: function(){
    return STORE.getStoreData()
  },

  componentDidMount: function(){
    let component = this

    ACTIONS.fetchAllDebris

  },

  _handleSubmit: function(evt){
    evt.preventDefault()
    console.log(evt.target)
    let fromEl = evt.target
  },

  render: function(){
    let regForm =
  <div id="register_form" >

		<div id="register" className="animate form">
			<form>
				<h1> Sign up </h1>
				<p>
					<label for="usernamesignup" className="uname" data-icon="u">Your username</label>
					<input id="usernamesignup" name="usernamesignup" required="required" type="text" placeholder="username" />
				</p>
				<p>
					<label for="emailsignup" className="youmail" data-icon="e" > Your email</label>
					<input id="emailsignup" name="emailsignup" required="required" type="email" placeholder="email"/>
				</p>
				<p>
					<label for="passwordsignup" className="youpasswd" data-icon="p">Your password </label>
					<input id="passwordsignup" name="passwordsignup" required="required" type="password" placeholder="password"/>
				</p>
				<p>
					<label for="passwordsignup_confirm" className="youpasswd" data-icon="p">Confirm your password </label>
					<input id="passwordsignup_confirm" name="passwordsignup_confirm" required="required" type="password" placeholder="password"/>
				</p>
        <p><button onClick="myFunction()">Sign Up</button></p>
				<p class="change_link">
					Already a member ?
					<a href="#login" className="to_register"> Go and log in </a>
				</p>
			</form>
	  </div>
    </div>



  return (
      <div>
        {regForm}
      </div>
    )
  }
})
