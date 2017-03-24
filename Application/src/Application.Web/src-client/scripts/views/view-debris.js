import React from 'react';
import {Navbar} from '../components/component-navbar.js';
import {ACTIONS} from '../actions.js';
import {STORE} from '../store.js';
import SimpleMap from '../components/component-debrimap.js';
const API_KEY = 'AIzaSyCVsRPLuLQW5TRej4APIZAtgIEAhILiQ2U';
import {DebrisListComponent} from '../components/component-debris_list.js';
import {AllOfTheDebris} from '../components/debris_component_table.js';
import $ from 'jquery';


export const DebrisView = React.createClass({
  getInitialState: function(){
    return STORE.getStoreData()
  },

  componentDidMount: function(){
    let component = this

    ACTIONS.fetchAllDebris
  },

  render: function(){
    let sidePanelComponent = <DebrisListComponent/>



  		return (

  			<div className="container">


          {sidePanelComponent}
        </div>
    )
  }
})
