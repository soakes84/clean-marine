import React from 'react';
import {Navbar} from '../components/component-navbar.js';
import {ACTIONS} from '../actions.js';
import {STORE} from '../store.js';
import {DropPinComponent} from '../components/pin-drop-component.js';


export const DebrisView = React.createClass({


  componentDidMount: function(){

    let component = this

    ACTIONS.fetchAllDebris
  },

  render: function(){


  		return (

  			<div className="container">
          <h1>Please click the map to record your location and add debris</h1>
          <DropPinComponent {...this.props}/>
        </div>
    )
  }
})
