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
    let information = <h1>MAP GOES HERE</h1>
    let inputDebris =
    <form>
      <table className='formview'>
        <thead>
          <tr>
            <th>Debris Type</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Aluminum cans</td>
            <td><button className='green'> + </button> # <button className='red'> - </button></td>
          </tr>
          <tr>
            <td>Plastic bags</td>
            <td><button className='green'> + </button> # <button className='red'> - </button></td>
          </tr>
          <tr>
            <td>Cigarette butts</td>
            <td><button className='green'> + </button> # <button className='red'> - </button></td>
          </tr>
          <tr>
            <td>Glass bottles</td>
            <td><button className='green'> + </button> # <button className='red'> - </button></td>
          </tr>
          <tr>
            <td>Clothing</td>
            <td><button className='green'> + </button> # <button className='red'> - </button></td>
          </tr>
          <tr>
            <td>Miscellaneous items</td>
            <td><button className='green'> + </button> # <button className='red'> - </button></td>
          </tr>
        </tbody>
      </table>
      <input className='submit-button' type="submit" value="Submit"></input>
    </form>


  return (
      <div>
        {information}
        {inputDebris}
      </div>
    )
  }
})
