import React from 'react';
import {DebrisView} from '../views/view-debris.js';
import {ACTIONS} from '../actions.js'
import {Counter} from '../components/counter-component.js'
import SimpleMap from '../components/component-debrimap.js'
const API_KEY = 'AIzaSyCVsRPLuLQW5TRej4APIZAtgIEAhILiQ2U';

export const DebrisListComponent = React.createClass({
  getInitialState: function(props){
    return {
      figureItOut: ''
    }
  },

  _handleFormSubmit: function(evt){
    evt.preventDefault();

    let formEl = evt.target

    let dataToBeSaved = {
      type: 'thing',
      amount: this.state.amount,
      owner: 'TestUser',
      latitude: 32.78,
      longitude: -79.73,
      timeStamp: 10
    }

    ACTIONS.saveNewDebris(dataToBeSaved)

  },

  render: function(amount){
    return (
      <div className='map'>
        <SimpleMap center={{lat: 32.78, lng: -79.93}} zoom={11} bootstrapURLKeys={{
          key: API_KEY,
          language: 'en'
        }}/>
      <div>
        <div>
        <form className='formview' type= 'submit'>
          <table>
            <thead>
              <tr>
                <th>Debris Type</th>
                <th>Quantity</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td data-a='aluminum cans'>Aluminum cans</td>
                <td><Counter/></td>
              </tr>
              <tr>
                <td data-p='plastic bags'>Plastic bags</td>
                <td><Counter/></td>
              </tr>
              <tr>
                <td data-c='cigarette butts'>Cigarette butts</td>
                <td><Counter/></td>
              </tr>
              <tr>
                <td data-d='clothing'>Clothing</td>
                <td><Counter/></td>
              </tr>
              <tr>
                <td data-m='miscellaneous'>Miscellaneous items</td>
                <td><Counter/></td>
              </tr>
            </tbody>
          </table>
          <input className = 'submit-button' type = 'submit' value = 'Submit' onClick = {this._handleFormSubmit}></input>
        </form>

        </div>
        </div>
        </div>
      )
      
  }

})
