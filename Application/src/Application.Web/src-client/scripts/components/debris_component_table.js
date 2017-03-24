
import React from 'react';
import {Navbar} from '../components/component-navbar.js';
import {ACTIONS} from '../actions.js';
import {STORE} from '../store.js';


import {DebrisModel} from '../models/model-debris.js'


export const AllOfTheDebris = React.createClass({

  render: function(){
    return (
      <div>
        <ListOfDebris someDebris = {this.props.theDebris}/>
      </div>

    )
  }
})

const ListOfDebris = React.createClass({

  getInitialState: function(){

    return STORE.getStoreData()
  },

  componentDidMount: function(){

    let component = this
    ACTIONS.fetchAllDebris()

  },

  render: function(serverRes){
  console.log('is something happening');
  let jsxArray = serverRes.map(function(stringOfDebris, i){
  console.log(jsxArray);
    return (

      <DebrisItem debrisData = {stringOfDebris} key = {i}/>

    )
  })
    return jsxArray

  },

  render: function(){
    let self = this
    console.log(this.props)
    let allTheDebris = this.props.debrisList

    return (
      <div>
        <p data-type = '{stringOfDebris}'>{stringOfDebris.type}
          <button className='counter-action decrement red' onClick = {this.decrementDebris}> - </button>
          <div className='debrisTotal'> {this.state.amount}</div>
          <button className='counter-action increment green' onClick = {this.incrementDebris}> + </button>
        </p>
      </div>
)
}
})


  //   ;let debrisList = this.props.someDebris
  //
  //   return (
  //     <p>
  //
  //     </p>
  //   )
  // },
  //
  //     getInitialState: function(){
  //       return {
  //         amount: 0
  //       }
  //     },
  //
  //     incrementDebris: function(evt){
  //      this.setState({
  //        amount: (this.state.amount + 1)
  //     })
  //     },
  //
  //     decrementDebris: function(evt){
  //      if (this.state.amount === 0) {
  //        this.state.amount = 0
  //      } else {
  //        this.setState({
  //          amount: (this.state.amount - 1)
  //        })
  //      }
  //     }



//   const DebrisListComponent = React.createClass({
//   getInitialState: function(props){
//     return {
//       imgPreviewLink: 'http://rednova8.com/wordpress/wp-content/uploads/2017/02/no-image-found.jpg'
//     }
//   },
//
//   _handleFormSubmit: function(evt){
//     evt.preventDefault();
//
//     let formEl = evt.target
// console.log('here is the event', evt.target);
//
//     let dataToBeSaved = {
//       type: dataset.a.value,
//       amount: this.state.amount,
//       owner: 'TestUser',
//       latitude: 32.78,
//       longitude: -79.73,
//       timeStamp: 10
//     }
//
//     ACTIONS.saveNewDebris(dataToBeSaved)
// console.log('here is the data', dataToBeSaved);
//
//   },
//
//   render: function(amount){
//     return (
//       <div>
//         <form onSubmit = {this._handleFormSubmit}>
//         <div className='formview'>
//           <table>
//             <thead>
//               <tr>
//                 <th>Debris Type</th>
//                 <th>Quantity</th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr>
//                 <td data-a='aluminum cans'>Aluminum cans</td>
//                 <td><button className='counter-action decrement red' onClick={this.decrementDebris}> - </button>
//                     <div className='debrisTotal'> {this.state.amount}</div>
//                     <button className='counter-action increment green' onClick={this.incrementDebris}> + </button>
//                 </td>
//               </tr>
//               <tr>
//                 <td data-p='plastic bags'>Plastic bags</td>
//                 <td><button className='counter-action decrement red' onClick={this.decrementDebris}> - </button>
//                     <div className='debrisTotal'> {this.state.amount}</div>
//                     <button className='counter-action increment green' onClick={this.incrementDebris}> + </button></td>
//               </tr>
//               <tr>
//                 <td data-c='cigarette butts'>Cigarette butts</td>
//                 <td><button className='counter-action decrement red' onClick={this.decrementDebris}> - </button>
//                     <div className='debrisTotal'> {this.state.amount}</div>
//                     <button className='counter-action increment green' onClick={this.incrementDebris}> + </button>
//                 </td>
//               </tr>
//               <tr>
//                 <td data-g='glass bottles'>Glass bottles</td>
//                 <td><button className='counter-action decrement red' onClick={this.decrementDebris}> - </button>
//                     <div className='debrisTotal'> {this.state.amount}</div>
//                     <button className='counter-action increment green' onClick={this.incrementDebris}> + </button>
//                 </td>
//               </tr>
//               <tr>
//                 <td data-d='clothing'>Clothing</td>
//                 <td><button className='counter-action decrement red' onClick={this.decrementDebris}> - </button>
//                     <div className='debrisTotal'> {this.state.amount}</div>
//                     <button className='counter-action increment green' onClick={this.incrementDebris}> + </button>
//                 </td>
//               </tr>
//               <tr>
//                 <td data-m='miscellaneous'>Miscellaneous items</td>
//                 <td><button className='counter-action decrement red' onClick={this.decrementDebris}> - </button>
//                     <div className='debrisTotal'> {this.state.amount}</div>
//                     <button className='counter-action increment green' onClick={this.incrementDebris}> + </button>
//                 </td>
//               </tr>
//             </tbody>
//           </table>
//           <input className = 'submit-button' type = 'submit' value = 'Submit'></input>
//         </div>
//
//         </form>
//         </div>
//       )
//   },
//
