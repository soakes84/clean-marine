import React from 'react';
import {ACTIONS} from '../actions.js';


export const Counter = React.createClass ({


 incrementDebris: function(evt){

     ACTIONS.incrementDebris(this.props.debrisInfo.debrisCounter, this.props.type)
 },

 decrementDebris: function(evt){
   ACTIONS.decrementDebris(this.props.debrisInfo.debrisCounter, this.props.type)
 },

  render: function() {
    let counterNumber = this.props.debrisInfo.debrisCounter[this.props.type]

    return (
      <div>
        <button className='counter-action decrement red' onClick={this.decrementDebris}> - </button>
        <div className='debrisTotal'>{counterNumber}</div>
        <button className='counter-action increment green' onClick={this.incrementDebris}> + </button>
      </div>
    )
  }
})
