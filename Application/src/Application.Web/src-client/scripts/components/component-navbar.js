import React from 'react';
import {ACTIONS} from '../actions.js';

export const Navbar = React.createClass({
  _getMenuOptions: function(currentUserOnStore){

    let routeList
    if (typeof currentUser !== 'undefined'){
      console.log(currentUserOnStore);
      routeList = [
        {appRouteName: 'HOME', displayText: 'HOME', hashRoute: ''},

        {appRouteName: 'ALL', displayText: 'Debris Totals', hashRoute: 'all'},


        {appRouteName: 'REGISTER', displayText: 'Register', hashRoute: 'register'},
        {appRouteName: 'LOGIN', displayText: 'Log-in', hashRoute: 'login'}

      ]
    } else {
      routeList = [
        {appRouteName: 'HOME', displayText: 'Home', hashRoute: ''},
        {appRouteName: 'LOGOUT', displayText: 'Log-out', hashRoute: 'logout'},

        {appRouteName: 'USER', displayText: 'User', hashRoute: 'user-info'},
        {appRouteName: 'ALL', displayText: 'All', hashRoute: 'all'},

        {appRouteName: 'DEBRIS', displayText: 'Report Debris', hashRoute: 'debris'},

      ]
    }

    return routeList
  },

  _showNavOptionsJSX: function(currentNavRoute, currentUser){

    let theMenuRoutes = this._getMenuOptions(currentUser)
    console.log(currentNavRoute);

    let componentsList = theMenuRoutes.map(function(routeObj, i){
      return <RouteOption {...routeObj} key={i} _currentNavRoute = {currentNavRoute}/>
    })

    return componentsList
  },

    render: function(){

      return (

        <nav className='navbar'>

    


          {this._showNavOptionsJSX(this.props.currentNavRoute, this.props.currentUser)}
        </nav>
      )
    }
  })

  const RouteOption = React.createClass({
    _handleNavClick: function(evt){

      ACTIONS.routeTo(this.props.hashRoute)
    },

    render: function(){
      let navOptionClassName = 'nav-option button small'

      if(this.props.appRouteName === this.props._currentNavRoute){
        navOptionClassName = 'nav-option nav-option--active button small'
      }

      return (
        <div onClick = {this._handleNavClick} className = {navOptionClassName}>
            <a>{this.props.displayText}</a>

        </div>
      )
    }
  })
