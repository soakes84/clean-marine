import React from 'react';
import {LoginComponent} from '../components/component-form_login.js';
import {ACTIONS} from '../actions.js';
import {STORE} from '../store.js';


export const LoginView = React.createClass({

  render: function(){

    return (
      <div className='container'>
        <video autoplay loop muted class="background">
        <source src="https://static.videezy.com/system/resources/previews/000/004/205/original/Waves_on_the_sand.mp4" />
    </video>
        <LoginComponent/>
      </div>
    )
  }
})
