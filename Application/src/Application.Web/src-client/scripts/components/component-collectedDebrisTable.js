import React from 'react';

export const CollectedDebrisTable = React.createClass({
  render: function(amount){
  return (
      <form className='formview' type= 'submit'>
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
              <td><Counter debrisData={this.props.debrisCounter} type="aluminum" key="0"/></td>
            </tr>
            <tr>
              <td>Plastic bags</td>
              <td><Counter debrisData={this.props.debrisCounter} type="plasticBags" key="1"/></td>
            </tr>
            <tr>
              <td>Cigarette butts</td>
              <td><Counter debrisData={this.props.debrisCounter} type="cigButts" key="2"/></td>
            </tr>
            <tr>
              <td>Clothing</td>
              <td><Counter debrisData={this.props.debrisCounter} type="clothing" key="3"/></td>
            </tr>
            <tr>
              <td>Miscellaneous items</td>
              <td><Counter debrisData={this.props.debrisCounter} type="misc" key="4"/></td>
            </tr>
          </tbody>
        </table>
        <input className = 'submit-button' type = 'submit' value = 'Submit' onSubmit = {this._handleFormSubmit}></input>
      </form>
    )
  }
})
