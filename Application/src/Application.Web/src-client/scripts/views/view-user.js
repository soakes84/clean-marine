import React from 'react';
import { Navbar } from '../components/component-navbar.js';
import { ACTIONS } from '../actions.js';
import { STORE } from '../store.js';
import { DebrisListComponent } from '../components/component-debris_list.js'
import SimpleMap from '../components/component-debrimap.js'
const API_KEY = 'AIzaSyCVsRPLuLQW5TRej4APIZAtgIEAhILiQ2U';
import { DebrisModel } from '../models/model-debris.js';




export const UserView = React.createClass({
  getInitialState: function (){
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
        <h1>Personally Collected Debris</h1>
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






//   render: function(){
//
//     let information =
//           <div>
//             <SimpleMap className = 'map' center={{lat: 32.78, lng: -79.93}} zoom={11} bootstrapURLKeys={{
//         key: API_KEY,
//         language: 'en'
//       }}/>
//           </div>
//
//     let loggedInUser =
//
//   <div class = "wrapper">
//   <div class="table-title">
//     <h3>User Data</h3>
//
//     <table class="table-fill">
//     <thead>
//     <tr>
//     <th class="text-left">Date</th>
//     <th class="text-left">Area</th>
//     <th class="text-left">Item Type</th>
//     <th class="text-left"># Items</th>
//     <th class="text-left">Details</th>
//     </tr>
//     </thead>
//     <tbody class="table-hover">
//       <tr>
//         <td class="text-left">May</td>
//         <td class="text-left">Myrtle Beach</td>
//         <td class="text-left">Plastic Bags</td>
//         <td class="text-left">8</td>
//         <td class="text-left">Recap</td>
//       </tr>
//     </tbody>
//     </table>
//   </div>
//
// </div>
//
//
//
//   return (
//       <div>
//       {loggedInUser}
//         {information}
//
//       </div>
//     )
//   }
// })
