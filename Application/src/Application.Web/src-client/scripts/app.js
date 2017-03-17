import Backbone from 'backbone'
import ReactDOM from 'react-dom'
import React from 'react'
import {DebrisModel} from './models/model-debris.js'
// import {Gmaps, Marker, InfoWindow, Circle} from 'react-gmaps';
import {ViewController} from './viewController.js'


const AppRouter = Backbone.Router.extend({
  initialize: function(){
    Backbone.history.start();
  },

  routes: {

  'register' : 'registrationPage',
  'login' : 'loginPage',
  'user-info' : 'singleUserPage',
  'adopt' : 'adoptABeach',
  'debris' : 'recordDebris',
  'all' : 'displayAll',
  'about' : 'about',
  '' : 'homePage'
  },

  homePage: function(){
    let debrisDataView = new DebrisModel()
    debrisDataView.fetch()
    console.log(debrisDataView.props);

    ReactDOM.render(<ViewController from route = {'HOME'}/>, document.querySelector('#app-container'))
  },

  recordDebris: function(){
    ReactDOM.render(<ViewController fromRoute = {'DEBRIS'}/>, document.querySelector('#app-container'))
  },

  registrationPage: function(){
    ReactDOM.render(<ViewController fromRoute = {'REGISTRATION'}/>, document.querySelector('#app-container'))
  },

  loginPage: function(){
    ReactDOM.render(<ViewController fromRoute = {'LOGIN'}/>, document.querySelector('#app-container'))
  },

  adoptABeach: function(){
    ReactDOM.render(<ViewController fromRoute = {'ADOPT'}/>, document.querySelector('#app-container'))
  },

  singleUserPage: function(){
    ReactDOM.render(<ViewController fromRoute = {'USER'}/>, document.querySelector('#app-container'))
  },

  displayAll: function(){
    ReactDOM.render(<ViewController fromRoute = {'ALL'}/>, document.querySelector('#app-container'))
  },

  about: function(){
    ReactDOM.render(<ViewController fromRoute = {'ABOUT'}/>, document.querySelector('#app-container'))
  },

})

// const coords = {
//   lat: 51.5258541,
//   lng: -0.08040660000006028
// };
//
// const params = {v: '3.exp', key: 'YOUR_API_KEY'};
//
// const App = React.createClass({
//
//   onMapCreated(map) {
//     map.setOptions({
//       disableDefaultUI: true
//     });
//   },
//
//   onDragEnd(e) {
//     console.log('onDragEnd', e);
//   },
//
//   onCloseClick() {
//     console.log('onCloseClick');
//   },
//
//   onClick(e) {
//     console.log('onClick', e);
//   },
//
//   render() {
//     return (
//       <Gmaps
//         width={'800px'}
//         height={'600px'}
//         lat={coords.lat}
//         lng={coords.lng}
//         zoom={12}
//         loadingMessage={'Be happy'}
//         params={params}
//         onMapCreated={this.onMapCreated}>
//         <Marker
//           lat={coords.lat}
//           lng={coords.lng}
//           draggable={true}
//           onDragEnd={this.onDragEnd} />
//         <InfoWindow
//           lat={coords.lat}
//           lng={coords.lng}
//           content={'Hello, React :)'}
//           onCloseClick={this.onCloseClick} />
//         <Circle
//           lat={coords.lat}
//           lng={coords.lng}
//           radius={500}
//           onClick={this.onClick} />
//       </Gmaps>
//     );
//   }
//
// });

// ReactDOM.render(<App />, document.getElementById('gmaps'));

new AppRouter ()
