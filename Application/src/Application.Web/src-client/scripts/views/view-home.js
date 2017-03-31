import React from 'react';
import {Navbar} from '../components/component-navbar.js';
import {ACTIONS} from '../actions.js';
import {STORE} from '../store.js';
import {DebrisListComponent} from '../components/component-debris_list.js';
import GoogleMapReact from 'google-map-react';
import {DebrisModelAll} from '../models/model-debris.js'

const API_KEY = 'AIzaSyCVsRPLuLQW5TRej4APIZAtgIEAhILiQ2U';
export const HomeView = React.createClass({


  render: function(){
    let debrisDataView = new DebrisModelAll()
    debrisDataView.fetch().then(function(serverRes){
console.log(serverRes);
    })


    let allUserData =
    <div className="table-title">
      <h3 className = 'clean'>Upcoming Group Cleanups</h3>

            <table id="homedatatable">
            <thead>
            <tr>
            <th class="text-left">Date</th>
            <th class="text-left">Area</th>
            </tr>
            </thead>
            <tbody class="table-hover">
            <tr>
            <td class="text-left">April 25th</td>
            <td class="text-left">Seabrook Island</td>
            </tr>
            <tr>
            <td class="text-left">April 26th</td>
            <td class="text-left">Dewees Island</td>
            </tr>
            <tr>
            <td class="text-left">May 20th</td>
            <td class="text-left">Folly Beach</td>
            </tr>
            </tbody>
            </table>
    </div>


  return (

      <div className='home-map'>

        <img className='homeLogo' src='/images/logo.png'></img>

        <SimpleMap locationsData={this.props.locationsData} center={{lat: 32.78, lng: -79.93}} zoom={11} bootstrapURLKeys={{
    key: API_KEY,
    language: 'en'
  }}/>

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
				</GoogleMapReact>
			</div>
		)
	}
})

const MapPin = React.createClass({
	render: function(){
		return (
			<div style={{fontSize: '32px', color: '#D35400', textAlign: 'center'}}>
				<i className="ion-location"></i>
				{/* <span style={{background: '#fff', fontSize: '16px', padding: '5px'}}>{this.props.name}</span> */}
			</div>
		)
	}
})
