import Backbone from 'backbone';
import ReactDOM from 'react-dom'
import React from 'react'
import {Gmaps, Marker, InfoWindow, Circle} from 'react-gmaps';


const SomeComponent = React.createClass({
	render: function(){
		return (
			<div>
				<h1>Hallooooo</h1>
				<p><small>
					you make my hair so soft and i know you will never make me cry.
				</small></p>
			</div>
		)
	}
})


const coords = {
  lat: 51.5258541,
  lng: -0.08040660000006028
};

const params = {v: '3.exp', key: 'YOUR_API_KEY'};

const App = React.createClass({

  onMapCreated(map) {
    map.setOptions({
      disableDefaultUI: true
    });
  },

  onDragEnd(e) {
    console.log('onDragEnd', e);
  },

  onCloseClick() {
    console.log('onCloseClick');
  },

  onClick(e) {
    console.log('onClick', e);
  },

  render() {
    return (
      <Gmaps
        width={'800px'}
        height={'600px'}
        lat={coords.lat}
        lng={coords.lng}
        zoom={12}
        loadingMessage={'Be happy'}
        params={params}
        onMapCreated={this.onMapCreated}>
        <Marker
          lat={coords.lat}
          lng={coords.lng}
          draggable={true}
          onDragEnd={this.onDragEnd} />
        <InfoWindow
          lat={coords.lat}
          lng={coords.lng}
          content={'Hello, React :)'}
          onCloseClick={this.onCloseClick} />
        <Circle
          lat={coords.lat}
          lng={coords.lng}
          radius={500}
          onClick={this.onClick} />
      </Gmaps>
    );
  }

});

ReactDOM.render(<App />, document.getElementById('gmaps'));

ReactDOM.render(<SomeComponent/>, document.querySelector('#app-container'))
