import React from 'react';
import {Navbar} from '../components/component-navbar.js';
import {ACTIONS} from '../actions.js';
import {STORE} from '../store.js';
import {DebrisListComponent} from '../components/component-debris_list.js'
import SimpleMap from '../components/component-debrimap.js'

export const LoginView = React.createClass({
  getInitialState: function(){
    return STORE.getStoreData()
  },

  componentDidMount: function(){
    let component = this

    ACTIONS.fetchAllDebris

  },

  render: function(){
    let side = <input className="text-center" style={{ background: '#E87E04', padding: '12px', color: '#ddd', fontWeight: 200}}/>
    let password = <input/>

  return (
      <div>
        {side}
        {password}
      </div>
    )
  }
})
