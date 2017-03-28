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
				<h3> Register </h3>
				<p>
					<label for="usernamesignup" className="uname" data-icon="u">Your username</label>
       </p>
       <p>
					<input id="usernamesignup" name="usernamesignup" required="required" type="text" placeholder="username" />
				</p>
				<p>
					<label for="emailsignup" className="youmail" data-icon="e" > Your email</label>
        </p>
        <p>
					<input id="emailsignup" name="emailsignup" required="required" type="email" placeholder="email"/>
				</p>
				<p>
					<label for="passwordsignup" className="youpasswd" data-icon="p">Your password </label>
        </p>
        <p>
					<input id="passwordsignup" name="passwordsignup" required="required" type="password" placeholder="password"/>
				</p>
				<p>
					<label for="passwordsignup_confirm" className="youpasswd" data-icon="p">Confirm your password </label>
        </p>
        <p>
					<input id="passwordsignup_confirm" name="passwordsignup_confirm" required="required" type="password" placeholder="password"/>
				</p>
        <p><button id="register" onClick="myFunction()">Sign Up</button></p>
				<p class="change_link">
					Already a member ?
					<a href="#e" className="to_register"> Log in here </a>
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
