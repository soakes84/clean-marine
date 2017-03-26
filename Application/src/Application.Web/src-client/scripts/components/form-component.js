import React from 'react';
import {ACTIONS} from '../actions.js';

export const RegisterComponent = React.createClass({
  getInitialState: function(){
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

  _handleFormSubmit: function(evt){
      evt.preventDefault();
      let formEl = evt.target
      let dataToBeSaved = {
        type: formEl.type.value,
        amount: this.state.amount,
        owner: 'TestUser',
        latitude: 32.78,
        longitude: -79.73,
        timeStamp: 10
      }

      }
      render: function(){
        return (
          <div>
            <form onSubmit = {this._handleFormSubmit}>
            <div className='formview'>
              <table>
                <thead>
                  <tr>
                    <th>Debris Type</th>
                    <th>Quantity</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Aluminum cans</td>
                    <td><button className='counter-action decrement red' onClick={this.decrementDebris}> - </button>
                        <div className='debrisTotal'> {this.state.amount}</div>
                        <button className='counter-action increment green' onClick={this.incrementDebris}> + </button>
                        <button className='submitItem' onClick
                    </td>
                  </tr>
                  <tr>
                    <td data-p='plastic bags'>Plastic bags</td>
                    <td><button className='counter-action decrement red' onClick={this.decrementDebris}> - </button>
                        <div className='debrisTotal'> {this.state.amount}</div>
                        <button className='counter-action increment green' onClick={this.incrementDebris}> + </button></td>
                  </tr>
                  <tr>
                    <td data-c='cigarette butts'>Cigarette butts</td>
                    <td><button className='counter-action decrement red' onClick={this.decrementDebris}> - </button>
                        <div className='debrisTotal'> {this.state.amount}</div>
                        <button className='counter-action increment green' onClick={this.incrementDebris}> + </button>
                    </td>
                  </tr>
                  <tr>
                    <td data-g='glass bottles'>Glass bottles</td>
                    <td><button className='counter-action decrement red' onClick={this.decrementDebris}> - </button>
                        <div className='debrisTotal'> {this.state.amount}</div>
                        <button className='counter-action increment green' onClick={this.incrementDebris}> + </button>
                    </td>
                  </tr>
                  <tr>
                    <td data-d='clothing'>Clothing</td>
                    <td><button className='counter-action decrement red' onClick={this.decrementDebris}> - </button>
                        <div className='debrisTotal'> {this.state.amount}</div>
                        <button className='counter-action increment green' onClick={this.incrementDebris}> + </button>
                    </td>
                  </tr>
                  <tr>
                    <td data-m='miscellaneous'>Miscellaneous items</td>
                    <td><button className='counter-action decrement red' onClick={this.decrementDebris}> - </button>
                        <div className='debrisTotal'> {this.state.amount}</div>
                        <button className='counter-action increment green' onClick={this.incrementDebris}> + </button>
                    </td>
                  </tr>
                </tbody>
              </table>
              <input className = 'submit-button' type = 'submit' value = 'Submit'></input>
            </div>

            </form>
            </div>
          )
      },
      //
      // let dataToBeSaved = {
      //   type: dataset.a.value,
      //   amount: this.state.amount,
      //   owner: 'TestUser',
      //   latitude: 32.78,
      //   longitude: -79.73,
      //   timeStamp: 10
      // }

      ACTIONS.saveNewDebris(dataToBeSaved)


    },
