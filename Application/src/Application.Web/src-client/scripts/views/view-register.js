import React from 'react';
import {Navbar} from '../components/component-navbar.js';
import {ACTIONS} from '../actions.js';
import {STORE} from '../store.js';
import {RegisterComponent} from '../components/component-form_register.js';

export const RegisterView = React.createClass({

  render: function(){
    return (
      <div className = 'videoFeed'>
        <RegisterComponent/>
      </div>
    )
  }
})
//   getInitialState: function(){
//     return STORE.getStoreData()
//   },
//
//   componentDidMount: function(){
//     let component = this
//
//     ACTIONS.fetchAllDebris
//
//   },
//
//   _handleSubmit: function(evt){
//     evt.preventDefault()
//     console.log(evt.target)
//     let fromEl = evt.target
//   },
//
//   render: function(){
//     let regForm =
//     <div className='videoFeed'>
//     <video autoplay loop muted class="background">
//         <source src="https://static.videezy.com/system/resources/previews/000/002/459/original/moon-jellies-hd-stock-video.mp4" type="video/mp4" />
//     </video>
//   <div id="register_form" >
//
// 		<div id="register" className="animate form">
// 			<form>
// 				<h1> Sign up </h1>
// 				<p>
// 					<label for="usernamesignup" className="uname" data-icon="u">Your username</label>
// 					<input id="usernamesignup" name="usernamesignup" required="required" type="text" placeholder="username" />
// 				</p>
// 				<p>
// 					<label for="emailsignup" className="youmail" data-icon="e" > Your email</label>
// 					<input id="emailsignup" name="emailsignup" required="required" type="email" placeholder="email"/>
// 				</p>
// 				<p>
// 					<label for="passwordsignup" className="youpasswd" data-icon="p">Your password </label>
// 					<input id="passwordsignup" name="passwordsignup" required="required" type="password" placeholder="password"/>
// 				</p>
// 				<p>
// 					<label for="passwordsignup_confirm" className="youpasswd" data-icon="p">Confirm your password </label>
// 					<input id="passwordsignup_confirm" name="passwordsignup_confirm" required="required" type="password" placeholder="password"/>
// 				</p>
//         <p><button onClick="myFunction()">Sign Up</button></p>
// 				<p class="change_link">
// 					Already a member ?
// 					<a href="#login" className="to_register"> Go and log in </a>
// 				</p>
// 			</form>
// 	  </div>
//     </div>
//   </div>
//
//
//
//   return (
//       <div>
//         {regForm}
//       </div>
//     )
//   }
// })
