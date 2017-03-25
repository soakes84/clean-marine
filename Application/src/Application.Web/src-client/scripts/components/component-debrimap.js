import GoogleMapReact from 'google-map-react';
import ReactDOM from 'react-dom';

import React, {Component} from 'react';

export default class SimpleMap extends Component {

  render() {
    console.log(this.props, 'okk')
    return (
      <div className='map' style={{height: '800px'}}>
       <GoogleMapReact
         onClick =  {this._handleMapClick}
         defaultCenter={this.props.center}
         defaultZoom={this.props.zoom}
      >

      </GoogleMapReact>
      </div>
    );
  }


}
