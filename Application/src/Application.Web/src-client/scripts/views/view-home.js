import React from 'react';
import {Navbar} from '../components/component-navbar.js';
import {ACTIONS} from '../actions.js';
import {STORE} from '../store.js';
import {DebrisListComponent} from '../components/component-debris_list.js';

export const HomeView = React.createClass({
  
  render: function(){
    let side = <h3>Home Page</h3>


  return (
      <div>
        {side}
      </div>
    )
  }
})
