import React from 'react';
import {Navbar} from '../components/component-navbar.js';
import {ACTIONS} from '../actions.js';
import {STORE} from '../store.js';
import {DebrisListComponent} from '../components/component-debris_list.js'

export const LoginView = React.createClass({
  getInitialState: function(){
    return STORE.getStoreData()
  },

  componentDidMount: function(){
    let component = this

    ACTIONS.fetchAllDebris

  },

  render: function(){
    let side = <input className="text-center" style={{ background: #E87E04, padding: '12px', color: '#ddd', fontWeight: 200}}>Email</input>
    let password = <input>Password</input>

  return (
      <div>
      {side}
      {input}
      {this.props.debrisList}
      <DebrisListComponent {...this.props}/>
      </div>
    )
  }
})
