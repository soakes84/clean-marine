import React from 'react';
import {Navbar} from '../components/component-navbar.js';
import {ACTIONS} from '../actions.js';
import {STORE} from '../store.js';
import {DebrisListComponent} from '../components/component-debris_list.js'
import SimpleMap from '../components/component-debrimap.js'
const API_KEY = 'AIzaSyCVsRPLuLQW5TRej4APIZAtgIEAhILiQ2U';

export const UserView = React.createClass({
  getInitialState: function(){
    return STORE.getStoreData()
  },


  componentWillMount: function(){
  },

  componentDidMount: function(){
    let component = this

    ACTIONS.fetchAllDebris

  },


  render: function(){
    let information =
          <div>
            <SimpleMap className = 'map' center={{lat: 32.78, lng: -79.93}} zoom={11} bootstrapURLKeys={{
        key: API_KEY,
        language: 'en'
      }}/>
          </div>

    let loggedInUser =
    <div>
      Do a table for the individual users information on this Page
      </div>

  return (
      <div>
        {information}
        {loggedInUser}

      </div>
    )
  }
})
