import React from 'react';
import {Navbar} from '../components/component-navbar.js';
import {ACTIONS} from '../actions.js';
import {STORE} from '../store.js';
import {DebrisListComponent} from '../components/component-debris_list.js';
import GoogleMapReact from 'google-map-react';
import {DebrisModel} from '../models/model-debris.js'

const API_KEY = 'AIzaSyCVsRPLuLQW5TRej4APIZAtgIEAhILiQ2U';
export const RecapView = React.createClass({

  render: function(){
    let debrisDataView = new DebrisModel()
    debrisDataView.fetch().then(function(serverRes){

    })


    let allUserData =


      <table id="homedatatable">
      <thead>
      <tr>
      <th class="text-left">Date</th>
      <th class="text-left">Area</th>
      <th class="text-left"># Items</th>
      <th class="text-left">Details</th>
      </tr>
      </thead>
      <tbody class="table-hover">
      <tr>
      <td class="text-left">January</td>
      <td class="text-left">Folly Beach</td>
      <td class="text-left">13</td>
      <td class="text-left"><a href="#">Recap</a></td>
      </tr>
      <tr>
      <td class="text-left">February</td>
      <td class="text-left">Folly Beach</td>
      <td class="text-left">2</td>
      <td class="text-left"><a href="#">Recap</a></td>
      </tr>
      <tr>
      <td class="text-left">March</td>
      <td class="text-left">Folly Beach</td>
      <td class="text-left">6</td>
      <td class="text-left"><a href="#">Recap</a></td>
      </tr>
      <tr>
      <td class="text-left">April</td>
      <td class="text-left">Folly Beach</td>
      <td class="text-left">24</td>
      <td class="text-left"><a href="#">Recap</a></td>
      </tr>
      <tr>
      <td class="text-left">May</td>
      <td class="text-left">Myrtle Beach</td>
      <td class="text-left">8</td>
      <td class="text-left"><a href="#">Recap</a></td>


      </tr>
      </tbody>
      </table>



  return (
  <div>

      <div className='home-map'>
        <SimpleMap locationsData={this.props.locationsData} center={{lat: 32.78, lng: -79.93}} zoom={11} bootstrapURLKeys={{
    key: API_KEY,
    language: 'en'
  }}/>

      </div>
    <div>
      {allUserData}
    </div>
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
			<div style={{fontSize: '32px', color: '#D35400', textAlign: 'center'}}>
				<i className="ion-location"></i>
				{/* <span style={{background: '#fff', fontSize: '16px', padding: '5px'}}>{this.props.name}</span> */}
			</div>
		)
	}
})
