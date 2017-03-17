import React from 'react';

export const DebrisListComponent = React.createClass({

  _makeDebrisComponents: function(debrisList){

    let arrayOfDebrisComponents = debrisList.map(function(smod, i){

      return (
        <DebrisItem debrisData = {smod} key = {i}/>
      )
    })

      return arrayOfDebrisComponents
  },
  render: function(){
    let self = this
    
    let allTheDebris = this.props.debrisList
    return (
      <div>
      {this._makeDebrisComponents(allTheDebris)}
      </div>
    )
  }
})

export const DebrisItem = React.createClass({
  render: function(){
    return (
      <div>
      {this.props.debrisData.type}
      </div>
    )
  }
})
