import React from 'react';
import {Navbar} from '../components/component-navbar.js';
import {ACTIONS} from '../actions.js';
import {STORE} from '../store.js';
import {RegisterComponent} from '../components/component-form_register.js';

export const RegisterView = React.createClass({

  render: function(){

    return (
      <div className='container'>
        <video autoPlay loop muted className="background">
        <source src="https://static.videezy.com/system/resources/previews/000/004/941/original/Jellyfish_4K_Living_Background.mp4" type="video/mp4"/>
    </video>
        <RegisterComponent/>
      </div>
    )
  }
})
