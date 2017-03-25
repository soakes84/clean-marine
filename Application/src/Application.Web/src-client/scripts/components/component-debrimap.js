import GoogleMapReact from 'google-map-react';
import ReactDOM from 'react-dom';

import React, {Component} from 'react';

// const GoogleMap = ({ text }) => <div>{text}</div>;

const AnyReactComponent = React.createClass({
   render: function(){
      let theColor = 'red'
      if(this.props.text.length <= 3){ theColor= "blue" }


      return <div style={{
        position: 'relative', color: 'white', background: theColor,
        height: 40, width: 60, top: -20, left: -30,
      }}>
          {this.props.text}
     </div>
   }
});

export default class SimpleMap extends Component {


  render() {
    console.log(this.props, 'okk')
    return (
      <div style={{height: '500px'}}>
       <GoogleMapReact
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}
      >
      </GoogleMapReact>
      </div>
    );
  }

}

// ReactDOM.render(<SimpleMap/>, document.querySelector('#app-container'))
