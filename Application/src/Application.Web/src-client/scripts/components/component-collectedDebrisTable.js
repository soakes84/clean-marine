import React from 'react';
import {Counter} from '../components/counter-component.js';
import {STORE} from '../store.js';
import {DebrisModel} from '../models/model-debris.js';

export const CollectedDebrisTable = React.createClass({

  _handleFormSubmit: function(evt){

    evt.preventDefault()
    let formEl = evt.target

    let dataToBeSaved = {
      // debrisList : this.props.debrisData.debrisCounter

      type: 'tin can',
      debris: '????',
      latitude: 32.55,
      longitude: -79.63,
      timeStamp: '0001-01-01T00:00:00'

    }
    console.log(dataToBeSaved);

    let newDebrisModel = new DebrisModel()
    newDebrisModel.set(dataToBeSaved)

    let viewInstance = this
    newDebrisModel.save().then(function(){
      window.location.hash = ''
    })
  },

  render: function(amount){

  return (
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
              <td><Counter debrisInfo={this.props.debrisData} type="aluminum" key="0"/></td>
            </tr>
            <tr>
              <td>Plastic bags</td>
              <td><Counter debrisInfo={this.props.debrisData} type="plasticBags" key="1"/></td>
            </tr>
            <tr>
              <td>Plastic bottles</td>
              <td><Counter debrisInfo={this.props.debrisData} type="plasticBottles" key="2"/></td>
            </tr>
            <tr>
              <td>Cigarette butts</td>
              <td><Counter debrisInfo={this.props.debrisData} type="cigButts" key="3"/></td>
            </tr>
            <tr>
              <td>Clothing</td>
              <td><Counter debrisInfo={this.props.debrisData} type="clothing" key="4"/></td>
            </tr>
            <tr>
              <td>Miscellaneous items</td>
              <td><Counter debrisInfo={this.props.debrisData} type="misc" key="5"/></td>
            </tr>
          </tbody>
        </table>
        <input className = 'submit-button' type = 'submit' value = 'Submit' onClick = {this._handleFormSubmit}></input>
      </form>
    )
  }
})
