import React from 'react';
import {ACTIONS} from '../actions.js';

export const Navbar = React.createClass({
  _getMenuOptions: function(currentUserOnStore){

    let routeList
    if (typeof currentUserOnStore._id === 'undefined'){
      routeList = [
        {appRouteName: 'HOME', displayText: 'HOME', hashRoute: ''},
        {appRouteName: 'USER', displayText: 'User', hashRoute: 'user-info'},
        {appRouteName: 'ALL', displayText: 'Debris Totals', hashRoute: 'all'},
        {appRouteName: 'ABOUT', displayText: 'About', hashRoute: 'about'},
        {appRouteName: 'ADOPT', displayText: 'Adopt', hashRoute: 'adopt'},
        {appRouteName: 'DEBRIS', displayText: 'Report Debris', hashRoute: 'debris'},
        {appRouteName: 'REGISTER', displayText: 'Register', hashRoute: 'register'},
        {appRouteName: 'LOGIN', displayText: 'Log-in', hashRoute: 'login'}
      ]
    } else {
      routeList = [
        {appRouteName: 'HOME', displayText: 'HOME', hashRoute: ''},
        {appRouteName: 'LOGOUT', displayText: 'Log-out', hashRoute: 'logout'},
        {appRouteName: 'ADOPT', displayText: 'Adopt', hashRoute: 'adopt'},
        {appRouteName: 'REGISTER', displayText: 'Register', hashRoute: 'register'},
        {appRouteName: 'USER', displayText: 'User', hashRoute: 'user-info'},
        {appRouteName: 'ALL', displayText: 'All', hashRoute: 'all'},
        {appRouteName: 'ABOUT', displayText: 'About', hashRoute: 'about'},
        {appRouteName: 'DEBRIS', displayText: 'Debris', hashRoute: 'debris'}
      ]
    }

    return routeList
  },

  _showNavOptionsJSX: function(currentNavRoute, currentUser){


    let theMenuRoutes = this._getMenuOptions(currentUser)

    let componentsList = theMenuRoutes.map(function(routeObj, i){
      return <RouteOption {...routeObj} key={i} _currentNavRoute = {currentNavRoute}/>
    })

    return componentsList
  },

    render: function(){

      return (
        <nav>
          {this._showNavOptionsJSX(this.props.currentNavRoute, this.props.currentUser)}
        </nav>
      )
    }
  })

  const RouteOption = React.createClass({
    _handleNavClick: function(evt){
console.log('something happened');
      ACTIONS.changeCurrentNav(this.props.appRouteName, this.props.hashRoute)
    },

    render: function(){
      let navOptionClassName = 'nav-option'

      if(this.props.appRouteName === this.props._currentNavRoute){
        navOptionClassName = 'nav-option nav-option--active'
      }

      return (
        <div onClick = {this._handleNavClick} className = {navOptionClassName}>
          {this.props.displayText}

        </div>
      )
    }
  })
