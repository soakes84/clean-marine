import React from 'react';
import {Navbar} from '../components/component-navbar.js';
import {ACTIONS} from '../actions.js';
import {STORE} from '../store.js';
import {DebrisListComponent} from '../components/component-debris_list.js'
import SimpleMap from '../components/component-debrimap.js'
const API_KEY = 'AIzaSyCVsRPLuLQW5TRej4APIZAtgIEAhILiQ2U';
import {GettingStartedExample} from '../components/pin-drop-component';



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


    let loggedInUser =

  <div class = "wrapper">
  <div class="table-title">
    <h3>User Data</h3>

    <table id="userdatatable">
    <thead>
    <tr>
    <th class="text-left">Date</th>
    <th class="text-left"># Items</th>
    <th class="text-left">Details</th>
    </tr>
    </thead>
    <tbody class="table-hover">
    <tr>
    <td class="text-left">January</td>
    <td class="text-left">13</td>
    <td class="text-left"><a href="#">Recap</a></td>
    </tr>
    <tr>
    <td class="text-left">February</td>
    <td class="text-left">2</td>
    <td class="text-left"><a href="#">Recap</a></td>
    </tr>
    <tr>
    <td class="text-left">March</td>
    <td class="text-left">6</td>
    <td class="text-left"><a href="#">Recap</a></td>
    </tr>
    <tr>
    <td class="text-left">April</td>
    <td class="text-left">24</td>
    <td class="text-left"><a href="#">Recap</a></td>
    </tr>
    <tr>
    <td class="text-left">May</td>
    <td class="text-left">8</td>
    <td class="text-left"><a href="#">Recap</a></td>


    </tr>
    </tbody>
    </table>
  </div>

</div>



  return (
      <div>
      {loggedInUser}

      </div>
    )
  }
})
