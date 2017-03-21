import GoogleMapReact from 'google-map-react';
import ReactDOM from 'react-dom';

import React, {Component} from 'react';

// const GoogleMap = ({ text }) => <div>{text}</div>;

const AnyReactComponent = React.createClass({
   render: function(){
      let theColor = 'red'
      if(this.props.text.length <= 3){ theColor= "blue" }

      console.log('????')
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
      <div style={{height: '400px'}}>
       <GoogleMapReact
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}
      >
        <AnyReactComponent
          lat={32.55}
          lng={-79.22}
          text={'Abandoned Ship'}
        />
       <AnyReactComponent
          lat={59.98545433}
          lng={30.324844}
          text={'Plastic garbage'}
        />
      </GoogleMapReact>
      </div>
    );
  }

}

// ReactDOM.render(
//   <div style={{width: '100%', height: '400px'}}>
//     <SimpleMap/>
//   </div>,
//   document.getElementById('main')
// )

// ReactDOM.render(<SimpleMap/>, document.querySelector('#app-container'))
