import React from 'react';
import { Navbar } from '../components/component-navbar.js';
import { ACTIONS } from '../actions.js';
import { STORE } from '../store.js';
import { DebrisListComponent } from '../components/component-debris_list.js'
import GoogleMapReact from 'google-map-react';

const API_KEY = 'AIzaSyCVsRPLuLQW5TRej4APIZAtgIEAhILiQ2U';
import { DebrisModel } from '../models/model-debris.js';


export const UserView = React.createClass({

  getInitialState: function (){
    ACTIONS.fetchCurrentUser
    return {
      debris : []
    }
  },


  componentWillMount: function() {
    let component = this
    let debrisDataView = new DebrisModel()
    debrisDataView.fetch().then(function(debris) {
      // console.log(debris);
      component.setState({ debris: debris })


})
  },

    _debrisCall: function(debrisArray){
      console.log(this.props);
      let finalJSX = debrisArray.map(function(debris, i){
        return (<ListOfDebris key={i} data={debris} />)
      })
      return finalJSX
    },

  render: function () {
    let debrisArray = this.state.debris


    return (
      <div className='background-field-all'>
        <p className='all-debris'>Debris Collected by {this.props.currentUser.name}</p>
        <hr />
        <SimpleMap locationsData={this.props.locationsData} center={{lat: 32.78, lng: -79.93}} zoom={11} bootstrapURLKeys={{
          key: API_KEY,
          language: 'en'
        }}/>
        {this._debrisCall(debrisArray)}
      </div>
    )
  }
  })


const ListOfDebris = React.createClass({

  render: function(){

     return (
       <div className='data-fields-all'>
        <p className='user-field-all'>{this.props.data.userName}</p>
        <p className='all-users'>Type: {this.props.data.type}</p>
        <p className='all-users'>latitude: {this.props.data.latitude}</p>
        <p className='all-users'>longitude: {this.props.data.longitude}</p>
       </div>
     )
  }
})

const SimpleMap = React.createClass({

  _createMapPins: function(){

      return <MapPin lat={32.77} lng={-79.91} />

  },

  render: function(){
    let mapCenter = {lat: 32.78, lng: -79.93}

    return (
      <div className = 'map-for-all' style={{height: '500px', width: '800px'}}>
        <GoogleMapReact defaultCenter={mapCenter} defaultZoom={10}>
          {this._createMapPins()}
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
      </div>
    )
  }
})
