import React from 'react';
import {Navbar} from '../components/component-navbar.js';
import {ACTIONS} from '../actions.js';
import {STORE} from '../store.js';
import {DebrisListComponent} from '../components/component-debris_list.js'

export const UserView = React.createClass({
  getInitialState: function(){
    return STORE.getStoreData()
  },

  componentDidMount: function(){
    let component = this

    ACTIONS.fetchAllDebris

  },

  render: function(){
    let side = <h3 className="text-center" style={{ background: "#67809F", padding: '12px', color: '#ddd', fontWeight: 200}}>User Data</h3>


  return (
      <div>
      {side}
      {this.props.debrisList}
      <DebrisListComponent {...this.props}/>
      </div>
    )
  }
})
