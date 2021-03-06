import React from 'react';
import {DebrisView} from '../views/view-reportDebris.js';
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
                <td>Aluminum cans</td>
                <td><Counter debrisData={this.props.debrisCounter} type="aluminum" key="0"/></td>
              </tr>
              <tr>
                <td>Plastic bags</td>
                <td><Counter debrisData={this.props.debrisCounter} type="plasticBags" key="1"/></td>
              </tr>
              <tr>
                <td>Cigarette butts</td>
                <td><Counter debrisData={this.props.debrisCounter} type="cigButts" key="2"/></td>
              </tr>
              <tr>
                <td>Clothing</td>
                <td><Counter debrisData={this.props.debrisCounter} type="clothing" key="3"/></td>
              </tr>
              <tr>
                <td>Miscellaneous items</td>
                <td><Counter debrisData={this.props.debrisCounter} type="misc" key="4"/></td>
              </tr>
            </tbody>
          </table>
          <input className = 'submit-button' type = 'submit' value = 'Submit' onSubmit = {this._handleFormSubmit}></input>
        </form>

        </div>
        </div>
        </div>
      )

  }

})
