import React from 'react';
import {Navbar} from '../components/component-navbar.js';
import {ACTIONS} from '../actions.js';
import {STORE} from '../store.js';
import {DebrisListComponent} from '../components/component-debris_list.js';
import GoogleMapReact from 'google-map-react';
import {DebrisModel} from '../models/model-debris.js'

const API_KEY = 'AIzaSyCVsRPLuLQW5TRej4APIZAtgIEAhILiQ2U';
export const HomeView = React.createClass({

  render: function(){
    let debrisDataView = new DebrisModel()
    debrisDataView.fetch().then(function(serverRes){

    })

    let side = <h3>Home Page</h3>
    let allUserData =
    <div className="table-title">
      <h3>Top Five Users</h3>

      <table className="table-fill">
      <thead>
      <tr>
      <th className="text-left">Date</th>
      <th className="text-left">Area</th>
      <th className="text-left">Item Type</th>
      <th className="text-left"># Items</th>
      <th className="text-left">Further Detail</th>
      </tr>
      </thead>
      <tbody className="table-hover">
      <tr>
      <td className="text-left">January</td>
      <td className="text-left">Folly Beach</td>
      <td className="text-left">Cigarettes</td>
      <td className="text-left">13</td>
      <td className="text-left">Recap</td>
      </tr>


      </tbody>
      </table>
    </div>


  return (

      <div className='map'>
        <h1>Clean Marine</h1>

        <SimpleMap locationsData={this.props.locationsData} center={{lat: 32.78, lng: -79.93}} zoom={11} bootstrapURLKeys={{
    key: API_KEY,
    language: 'en'
  }}/>
 {side}
 {allUserData}
      </div>
    )
  }
 })

 const SimpleMap = React.createClass({
     _createMapPins: function(placesArray){
         let mapPinComponents = placesArray.map(function(placeObj, i){
             return <MapPin key={Date.now()+i} lat={placeObj.lt} lng={placeObj.ln} place={placeObj.name} />
         })

         return mapPinComponents
     },

     render: function(){
         let mapCenter = {lat: 32.78, lng: -79.93}

         return (
             <div style={{height: '500px'}}>
                 <GoogleMapReact defaultCenter={mapCenter} defaultZoom={10}>
                     {this._createMapPins(this.props.locationsData)}
                 </GoogleMapReact>>
             </div>
         )
     }
 })

 const MapPin = React.createClass({
     render: function(){
         return (
             <div style={{fontSize: '32px', color: '#D35400 ', textAlign: 'center'}}>
                 <i className="ion-location"></i>
                 {/* <span style={{background: '#fff', fontSize: '16px', padding: '5px'}}>{this.props.name}</span> */}
             </div>
         )
     }
 })
