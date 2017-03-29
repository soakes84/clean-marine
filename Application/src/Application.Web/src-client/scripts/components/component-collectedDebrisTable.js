import React from 'react';
import {Counter} from '../components/counter-component.js';
import {STORE} from '../store.js';
import {DebrisModel, DebrisCollection} from '../models/model-debris.js';

export const CollectedDebrisTable = React.createClass({

  _handleFormSubmit: function(evt){

    evt.preventDefault()
    let formEl = evt.target

  let debrisItemsObj = this.props.debrisData.debrisCounter

  let arrayOfData = Object.keys(debrisItemsObj).map((keyString)=>{
    return {
      type: keyString,
      quantity: debrisItemsObj[keyString],
      latitude: this.props.coordinates.lat,
      longitude: this.props.coordinates.lng
    }
  })

// SAVE ALL METHOD Created by Travis Hubbard
    let newDebrisCollection = new DebrisCollection()
    let newDebrisModel = new DebrisModel()
    newDebrisCollection.add(arrayOfData)
    console.log(newDebrisCollection.url);

    let viewInstance = this
    newDebrisCollection.saveAll().then(function(serverRes){
      console.log('serverres',serverRes);

      window.location.hash = 'user-info'
    })
  },

  render: function(){

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
