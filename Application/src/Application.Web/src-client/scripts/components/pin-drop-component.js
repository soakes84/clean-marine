import React from 'react';
import ReactDOM from 'react-dom';
import GoogleMapReact from 'google-map-react'

export const DropPinComponent = React.createClass({

	render: function(){
		return (

			<div className='map'>
        <NotSimpleMap  center={{lat: 32.78, lng: -79.93}} />
			</div>

		)
	}
})

const NotSimpleMap = React.createClass({
	getInitialState: function(){
		return {
			locationsData :{}
		}
	},


	// ADDING PINS TO THE MAP
	_createMapPins: function(locationObj){
			return <MapPin lat={locationObj.lt} lng={locationObj.ln} />

	},

	_handleMapClick: function(evt){
		console.log(evt)
		let locationsCopy = [...this.state.locationsData]
		let mapLocationObject = {lt: evt.lat, ln: evt.lng }
		locationsCopy.push(mapLocationObject)
		this.setState({
			locationsData : mapLocationObject
		})
	},

	render: function(){
		let mapCenter = {lat: 32.78, lng: -79.93}
		console.log(this.props, 'PROOPPS')
		console.log(this.state, "STATTEE")
		return (
			<div style={{height: '500px'}}>
				<GoogleMapReact
					defaultCenter = {this.props.center}
					defaultZoom = {10}
					onClick = {this._handleMapClick}>
					{this._createMapPins(this.state.locationsData)}
				</GoogleMapReact>

			</div>
		)
	}
})

const MapPin = React.createClass({
	render: function(){
		return (
			<div style={{fontSize: '45px', color: '#D35400', transform: 'translate(-50%, -50%)'}}>
				<i className="ion-ios-flag">+</i>
			</div>
		)
	}
})


/* global google */
// import _ from "lodash";
//
// import {
//   default as React,
//   Component,
// } from "react";
//
// import Helmet from "react-helmet";
//
// import {
//   withGoogleMap,
//   GoogleMap,
//   Marker,
// } from "../../lib";
//
// /*
//  * This is the modify version of:
//  * https://developers.google.com/maps/documentation/javascript/examples/event-arguments
//  *
//  * Add <script src="https://maps.googleapis.com/maps/api/js"></script> to your HTML to provide google.maps reference
//  */
// const GettingStartedGoogleMap = withGoogleMap(props => (
//   <GoogleMap
//     ref={props.onMapLoad}
//     defaultZoom={3}
//     defaultCenter={{ lat: -25.363882, lng: 131.044922 }}
//     onClick={props.onMapClick}
//   >
//     {props.markers.map(marker => (
//       <Marker
//         {...marker}
//         onRightClick={() => props.onMarkerRightClick(marker)}
//       />
//     ))}
//   </GoogleMap>
// ));
//
// export default class GettingStartedExample extends Component {
//
//  state = {
//     markers: [{
//       position: {
//         lat: 32.78,
//         lng: -79.93,
//       },
//       key: `Charleston`,
//       defaultAnimation: 2,
//     }],
//   };
//
//   handleMapLoad = this.handleMapLoad.bind(this);
//   handleMapClick = this.handleMapClick.bind(this);
//   handleMarkerRightClick = this.handleMarkerRightClick.bind(this);
//
//   handleMapLoad(map) {
//     this._mapComponent = map;
//     if (map) {
//       console.log(map.getZoom());
//     }
//   }
//
//   /*
//    * This is called when you click on the map.
//    * Go and try click now.
//    */
//   handleMapClick(event) {
//     const nextMarkers = [
//       ...this.state.markers,
//       {
//         position: event.latLng,
//         defaultAnimation: 2,
//         key: Date.now(), // Add a key property for: http://fb.me/react-warning-keys
//       },
//     ];
//     this.setState({
//       markers: nextMarkers,
//     });
//
//     if (nextMarkers.length === 3) {
//       this.props.toast(
//         `Right click on the marker to remove it`,
//         `Also check the code!`
//       );
//     }
//   }
//
//   handleMarkerRightClick(targetMarker) {
//     /*
//      * All you modify is data, and the view is driven by data.
//      * This is so called data-driven-development. (And yes, it's now in
//      * web front end and even with google maps API.)
//      */
//     const nextMarkers = this.state.markers.filter(marker => marker !== targetMarker);
//     this.setState({
//       markers: nextMarkers,
//     });
//   }
//
//   render() {
//     return (
//       <div style={{height: `100%`}}>
//         <Helmet
//           title="Getting Started"
//         />
//         <GettingStartedGoogleMap
//           containerElement={
//             <div style={{ height: `100%` }} />
//           }
//           mapElement={
//             <div style={{ height: `100%` }} />
//           }
//           onMapLoad={this.handleMapLoad}
//           onMapClick={this.handleMapClick}
//           markers={this.state.markers}
//           onMarkerRightClick={this.handleMarkerRightClick}
//         />
//       </div>
//     );
//   }
// }
