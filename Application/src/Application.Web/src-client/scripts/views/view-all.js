import React from 'react';
import {Navbar} from '../components/component-navbar.js';
import {ACTIONS} from '../actions.js';
import {STORE} from '../store.js';
import {DebrisListComponent} from '../components/component-debris_list.js';
import {DebrisModel, DebrisCollection, DebrisModelAll} from '../models/model-debris.js';

export const AllView = React.createClass({

  getInitialState: function (){
      return {
        debris : []
      }
    },


    componentWillMount: function() {
      let component = this
      let debrisDataView = new DebrisModelAll()
      debrisDataView.fetch().then(function(debris) {
        // console.log(debris);
        component.setState({ debris: debris })

      })
    },

      _debrisCall: function(debrisArray){
        console.log(debrisArray);
        let finalJSX = debrisArray.map(function(debris, i){
          return (<ListOfDebris key={i} data={debris} />)
        })
        return finalJSX
      },

    render: function () {
      let debrisArray = this.state.debris

      return (
        <div>
          <h1>Accumulated Collected Debris</h1>
          <hr />
          {this._debrisCall(debrisArray)}
        </div>
      )
    }
  })

  const ListOfDebris = React.createClass({

    render: function(){
      console.log('ummm ok?');
       return (
         <div className='container'>

           <h3>UserName:{this.props.data.userName}</h3>
           <ul>
             <li>Type:{this.props.data.type}</li>
             <li>quantity:{this.props.data.quantity}</li>
             <li>latitude: {this.props.data.latitude}</li>
             <li>longitude: {this.props.data.longitude}</li>
           </ul>
         </div>
       )
    }
  })
