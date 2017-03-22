import React from 'react';
import {Navbar} from '../components/component-navbar.js';
import {ACTIONS} from '../actions.js';
import {STORE} from '../store.js';
import SimpleMap from '../components/component-debrimap.js'
const API_KEY = 'AIzaSyCVsRPLuLQW5TRej4APIZAtgIEAhILiQ2U';
import {DebrisListComponent} from '../components/component-debris_list.js';

const DebrisCounter = React.createClass({
  getInitialState: function(){
    return {
      amount: 0
    }
  },

  incrementDebris: function(evt){
    this.setState({
      amount: (this.state.amount + 1)
    })
  },

  decrementDebris: function(evt){
    this.setState({
      amount: (this.state.amount - 1)
    })
  },

  render: function(){
    return (
      <div className='total'>
        <button className='counter-action decrement red' onClick={this.decrementDebris}> - </button>
        <div className='debrisTotal'> {this.state.amount}</div>
        <button className='counter-action increment green' onClick={this.incrementDebris}> + </button>
      </div>
    )
  }
})

export const DebrisView = React.createClass({
  getInitialState: function(){
    return STORE.getStoreData()
  },

  _createDebrisJSX: function(arrOfDebris){
    let jsxArray = arrOfDebris.map(function(debrisList){
      return <p>{debrisList}</p>
    })
    return jsxArray
  },

  componentDidMount: function(){
    let component = this

    ACTIONS.fetchAllDebris

  },

    render: function(){
      let information =
            <div>
              <SimpleMap center={{lat: 32.78, lng: -79.93}} zoom={11} bootstrapURLKeys={{
          key: API_KEY,
          language: 'en'
        }}/>
            </div>

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
              <td><DebrisCounter/></td>

            </tr>
            <tr>
              <td>Plastic bags</td>
              <td><DebrisCounter/></td>
            </tr>
            <tr>
              <td>Cigarette butts</td>
              <td><DebrisCounter/></td>
            </tr>
            <tr>
              <td>Glass bottles</td>
              <td><DebrisCounter/></td>
            </tr>
            <tr>
              <td>Clothing</td>
              <td><DebrisCounter/></td>
            </tr>
            <tr>
              <td>Miscellaneous items</td>
              <td><DebrisCounter/></td>
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
