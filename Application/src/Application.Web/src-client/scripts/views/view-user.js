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
    let side = <h3 className="text-center">User Data</h3>
    let information = <h2>MAP GOES HERE</h2>
    let inputDebris =
    <form>
      <table>
        <tr>
          <th>Debris Type</th>
          <th>Quantity</th>
        </tr>
        <tr>
          <td>Aluminum cans</td>
          <td><button> + </button> # <button> - </button></td>
        </tr>
        <tr>
          <td>Aluminum cans</td>
          <td><button> + </button> # <button> - </button></td>
        </tr>
        <tr>
          <td>Aluminum cans</td>
          <td><button> + </button> # <button> - </button></td>
        </tr>
        <tr>
          <td>Aluminum cans</td>
          <td><button> + </button> # <button> - </button></td>
        </tr>
        <tr>
          <td>Aluminum cans</td>
          <td><button> + </button> # <button> - </button></td>
        </tr>
      </table>
    </form>


  return (
      <div>
        {side}
        {information}
        {inputDebris}
      </div>
    )
  }
})
