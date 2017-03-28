import React from 'react';
import {LoginComponent} from '../components/component-form_login.js';
import {ACTIONS} from '../actions.js';
import {STORE} from '../store.js';


export const LoginView = React.createClass({

  render: function(){
    return (

      <div className='container'>
        <LoginComponent/>
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
//
//   render: function(){
//     let regForm = <div id="log-in_form" >
// 	<a className="hiddenanchor" id="toregister"></a>
// 	<a className="hiddenanchor" id="tologin"></a>
// 	<div id="wrapper">
// 		<div id="login" className="animate form">
// 			<form   autoComplete="on">
// 				<h1>Log in</h1>
// 				<p>
// 					<label htmlFor="username" className="uname" data-icon="u" > Your email or username </label>
// 					<input id="username" name="username" required="required" type="text" placeholder="username or email"/>
// 				</p>
// 				<p>
// 					<label htmlFor="password" className="youpasswd" data-icon="p"> Your password </label>
// 					<input id="password" name="password" required="required" type="password" placeholder="password" />
// 				</p>
// 				<p className="keeplogin">
// 					<input type="checkbox" name="loginkeeping" id="loginkeeping" value="loginkeeping" />
// 					<label htmlFor="loginkeeping">Keep me logged in</label>
// 				</p>
// 				 <p><button onclick={this._handleSubmit}>Log In</button></p>
// 				<p className="change_link">
// 					Not a member yet ?
// 					<a href="#register" className="to_register">Join us</a>
// 				</p>
// 			</form>
// 		</div>
//     </div>
//     </div>
//
//   return (
//       <div>
//         {regForm}
//       </div>
//     )
//   }
// })
