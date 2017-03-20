import React from 'react';
import {Navbar} from '../components/component-navbar.js';
import {ACTIONS} from '../actions.js';
import {STORE} from '../store.js';
import {DebrisListComponent} from '../components/component-debris_list.js';
import SimpleMap from '../components/component-debrimap.js'

const API_KEY = 'AIzaSyCVsRPLuLQW5TRej4APIZAtgIEAhILiQ2U';
export const HomeView = React.createClass({

  render: function(){
    let side = <h3>Home Page</h3>


  return (
      <div>
        <SimpleMap center={{lat: 59.95, lng: 30.33}} zoom={11} bootstrapURLKeys={{
    key: API_KEY,
    language: 'en'
  }}/>
      </div>
    )
  }
})
