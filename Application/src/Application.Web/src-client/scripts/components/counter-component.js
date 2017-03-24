import React from 'react'

export const Counter = React.createClass ({
  getInitialState: function(amount){
    return {
      amount: 0
    }
  },

 incrementDebris: function(evt){
   this.setState({
     amount: (this.state.amount + 1)
  })
 },

 decrementDebris: function(evt){
   if (this.state.amount === 0) {
     this.state.amount = 0
   } else {
     this.setState({
       amount: (this.state.amount - 1)
     })
   }
 },
  render: function() {
    return (
      <div>
        <button className='counter-action decrement red' onClick={this.decrementDebris}> - </button>
        <div className='debrisTotal'> {this.state.amount}</div>
        <button className='counter-action increment green' onClick={this.incrementDebris}> + </button>
      </div>
  )

  }

})
