import React from 'react';
import {ACTIONS} from '../actions.js';

export const Navbar = React.createClass({
  _getMenuOptions: function(currentUserOnStore){

    let routeList
    if (this.props.currentNavRoute === 'HOME'){
      console.log(this.props.currentNavRoute);
      routeList = [
        {appRouteName: 'HOME', displayText: 'Home', hashRoute: ''},

        {appRouteName: 'ALL', displayText: 'Debris Totals', hashRoute: 'all'},


        {appRouteName: 'REGISTER', displayText: 'Register', hashRoute: 'register'},
        {appRouteName: 'LOGIN', displayText: 'Log-in', hashRoute: 'login'}

      ]
    } else if (this.props.currentNavRoute === 'DEBRIS'){

      routeList = [
        {appRouteName: 'HOME', displayText: 'Home', hashRoute: ''},
        {appRouteName: 'LOGOUT', displayText: 'Log-out', hashRoute: 'logout'},

        {appRouteName: 'USER', displayText: 'User', hashRoute: 'user-info'},
        {appRouteName: 'ALL', displayText: 'All', hashRoute: 'all'},

        {appRouteName: 'DEBRIS', displayText: 'Report Debris', hashRoute: 'debris'},

      ]

    }  else if (this.props.currentNavRoute === 'ALL' && this.props.currentUser !== 'undefined'){

      routeList = [
        {appRouteName: 'HOME', displayText: 'Home', hashRoute: ''},
        {appRouteName: 'LOGOUT', displayText: 'Log-out', hashRoute: 'logout'},

        {appRouteName: 'USER', displayText: 'User', hashRoute: 'user-info'},
        {appRouteName: 'ALL', displayText: 'All', hashRoute: 'all'},

        {appRouteName: 'DEBRIS', displayText: 'Report Debris', hashRoute: 'debris'},

      ]

    } else {

      routeList = [
        {appRouteName: 'HOME', displayText: 'Home', hashRoute: ''},

        {appRouteName: 'ALL', displayText: 'Debris Totals', hashRoute: 'all'},


        {appRouteName: 'REGISTER', displayText: 'Register', hashRoute: 'register'},
        {appRouteName: 'LOGIN', displayText: 'Log-in', hashRoute: 'login'}

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
