import React from 'react';
import ReactDOM from 'react-dom';
import GoogleMapReact from 'google-map-react';
import {CollectedDebrisTable} from '../components/component-collectedDebrisTable.js';

export const DropPinComponent = React.createClass({

	render: function(){
		return (

			<div className='map'>
        <NotSimpleMap  center={{lat: 32.78, lng: -79.93}} debrisData = {this.props} />
			</div>

		)
	}
})

const NotSimpleMap = React.createClass({
	getInitialState: function(){
		return {
			locationsData :{},
		}
	},


	// ADDING PINS TO THE MAP
	_createMapPins: function(locationObj){

			return <MapPin debrisData = {this.props.debrisData} lat={locationObj.lt} lng={locationObj.ln} />

	},

	_handleMapClick: function(evt){
		console.log(evt)
		let locationsCopy = [...this.state.locationsData]
		let mapLocationObject = {lt: evt.lat, ln: evt.lng }
		locationsCopy.push(mapLocationObject)
		this.setState({
			locationsData : mapLocationObject,
			xPosition : evt.x,
			lat : evt.lat,
			lng : evt.lng
		})
	},

	render: function(){
		let mapCenter = {lat: 32.78, lng: -79.93}

		if (typeof this.state.xPosition  === 'undefined') {
		return (

			<div style={{height: '600px'}}>
				<GoogleMapReact
					debrisData = {this.props}
					center = {mapCenter}
					defaultZoom = {10}
					onClick = {this._handleMapClick}>
					{this._createMapPins(this.state.locationsData)}
				</GoogleMapReact>
			</div>
		)

	} else {
		return  (
			<div style={{height: '800px'}}>
				<GoogleMapReact
					options={{disableDoubleClickZoom: true}}
					debrisData = {this.props}
					center = {mapCenter}
					defaultZoom = {10}>
					{this._createMapPins(this.state.locationsData)}
				</GoogleMapReact>
				<CollectedDebrisTable debrisData = {this.props.debrisData} coordinates = {this.state.locationsData}/>

			</div>
		)
	}
	}
})

const MapPin = React.createClass({
	render: function(){

		return (
			<div style={{fontSize: '45px', color: '#D35400', transform: 'translate(-50%, -50%)'}}>
				<i className="ion-ios-flag"></i>
			</div>
		)
	}
})
