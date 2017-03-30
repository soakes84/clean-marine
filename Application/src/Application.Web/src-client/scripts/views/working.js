import $ from 'jquery';
import React from 'react';
import {Navbar} from '../components/component-navbar.js';
import {STORE} from '../store.js';
import {DebrisModel} from '../models/model-debris.js';

export const UserView = React.createClass({
  render: function(){
    return (
      <div>
        <h1>Personally Collected Debris</h1>
        <hr/>
        <ListOfDebris someDebris={this.props.theDebris}/>
      </div>
    )
  }
})
const ListOfDebris = React.createClass({

  _createDebrisJSX: function(arrayOfData){

      let debrisDataView = new DebrisModel()
      debrisDataView.fetch().then(function(serverRes){
      let userArray = serverRes
      let jsxArray = userArray.map(function(stringOfDebris) {
  render: function(arrayOfData){



  console.log(stringOfDebris.type);
      return (
        <div className = 'container'>
          <h3>UserName:{stringOfDebris.userName}</h3>
           <ul>
             <li>Type:{stringOfDebris.type}</li>
             <li>quantity:{stringOfDebris.quantity}</li>
             <li>latitude: {stringOfDebris.latitude}</li>
             <li>longitude: {stringOfDebris.longitude}</li>
           </ul>
        </div>
      )
    })
  }
})
