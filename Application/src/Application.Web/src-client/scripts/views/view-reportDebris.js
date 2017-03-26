import React from 'react';
import {Navbar} from '../components/component-navbar.js';
import {ACTIONS} from '../actions.js';
import {STORE} from '../store.js';
import {DropPinComponent} from '../components/pin-drop-component.js';


export const DebrisView = React.createClass({


  componentDidMount: function(){
    console.log('getting called');
    let component = this

    ACTIONS.fetchAllDebris
  },

  render: function(){


  		return (

  			<div className="container">
          <DropPinComponent {...this.props}/>
        </div>
    )
  }
})
