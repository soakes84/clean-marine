import React from 'react';
import {Navbar} from '../components/component-navbar.js';
import {ACTIONS} from '../actions.js';
import {STORE} from '../store.js';
import {DebrisListComponent} from '../components/component-debris_list.js'
import SimpleMap from '../components/component-debrimap.js'
const API_KEY = 'AIzaSyCVsRPLuLQW5TRej4APIZAtgIEAhILiQ2U';
import {GettingStartedExample} from '../components/pin-drop-component';



export const RecapView = React.createClass({
  getInitialState: function(){
    return STORE.getStoreData()
  },

  componentDidMount: function(){
    let component = this

    ACTIONS.fetchAllDebris

  },


  render: function(){

    let information =
          <div id= "map-component">
            <SimpleMap className = 'map' center={{lat: 32.78, lng: -79.93}} zoom={11} bootstrapURLKeys={{
        key: API_KEY,
        language: 'en'
      }}/>
          </div>

    let dataTable =
    <div class = 'recap-info'>
    <h3>Summary</h3>

    <ul id = 'data-table'>

      <li>Date: <p>12/22/16 </p></li>
      <li>Area: <p>Folly Beach </p></li>
      <li>Username: <p>chipperDonko </p></li>
      <li>Time: <p>01:45:12pm</p></li>
      <li>Item Total: <p>12 </p></li>
    </ul>




    </div>
    let loggedInUser =

  <div class = "wrapper">
  <div id="table-title">


    <table id="table-fill">
    <thead>
    <tr>
    <th class="text-left">Item Type</th>
    <th class="text-left"># Items</th>
    </tr>
    </thead>
    <tbody class="table-hover">
    <tr>
    <td class="text-left">Cigarettes</td>
    <td class="text-left">13</td>
    </tr>
    <tr>
    <td class="text-left">Abandoned Ships</td>
    <td class="text-left">2</td>
    </tr>
    <tr>
    <td class="text-left">Beer Cans</td>
    <td class="text-left">6</td>
    </tr>

    </tbody>
    </table>
  </div>

</div>

  return (
      <div>
        {dataTable}
      {loggedInUser}
        {information}

      </div>
    )
  }
})
