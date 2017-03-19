import Backbone from 'backbone';
import ReactDOM from 'react-dom'
import React from 'react'
import GoogleMapReact from 'google-map-react';
import GoogleMap from 'google-map-react';
// import MyGreatPlace from './my_great_place.jsx';
import Registration from './registration-form.js'

// const GoogleMap = ({ text }) => <div>{text}</div>;
//
// class SimpleMap extends Component {
//   static defaultProps = {
//     center: {lat: 59.95, lng: 30.33},
//     zoom: 11
//   };
//
//   render() {
//     return (
//       <GoogleMapReact
//         defaultCenter={this.props.center}
//         defaultZoom={this.props.zoom}
//       >
//         <AnyReactComponent
//           lat={59.955413}
//           lng={30.337844}
//           text={'Kreyser Avrora'}
//         />
//       </GoogleMapReact>
//     );
//   }
// }
// export default class SimpleMapPage extends Component {
//   static propTypes = {
//     center: PropTypes.array,
//     zoom: PropTypes.number,
//     greatPlaceCoords: PropTypes.any
//   };
//
//   static defaultProps = {
//     center: [59.938043, 30.337157],
//     zoom: 9,
//     greatPlaceCoords: {lat: 59.724465, lng: 30.080121}
//   };
//
//   shouldComponentUpdate = shouldPureComponentUpdate;
//
//   constructor(props) {
//     super(props);
//   }
//
//   render() {
//     return (
//        <GoogleMap
//         // apiKey={YOUR_GOOGLE_MAP_API_KEY} // set if you need stats etc ...
//         center={this.props.center}
//         zoom={this.props.zoom}>
//         <MyGreatPlace lat={59.955413} lng={30.337844} text={'A'} /* Kreyser Avrora */ />
//         <MyGreatPlace {...this.props.greatPlaceCoords} text={'B'} /* road circle */ />
//       </GoogleMap>
//     );
//   }
// }

// ReactDOM.render(<GoogleMap/>, document.querySelector('#app-container'))
//
// ReactDOM.render(<SomeComponent/>, document.querySelector('#app-container'))
