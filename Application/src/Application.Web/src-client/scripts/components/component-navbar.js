import React from 'react';
import {ACTIONS} from '../actions.js';
import {STORE} from '../store.js';

export const Navbar = React.createClass({
  _getMenuOptions: function(currentUserOnStore){

    STORE.getStoreData
    let user = this.props.currentUser.name

    let routeList
    if (this.props.currentNavRoute === 'HOME' && typeof user !== 'undefined'){

      routeList = [
        {appRouteName: 'HOME', displayText: 'Home', hashRoute: ''},
        {appRouteName: 'USER', displayText: 'User', hashRoute: 'user-info'},
        {appRouteName: 'DEBRIS', displayText: 'Report Debris', hashRoute: 'debris'},
        {appRouteName: 'ALL', displayText: 'All Debris', hashRoute: 'all'},
        {appRouteName: 'LOGOUT', displayText: 'Log-out', hashRoute: 'logout'}

      ]
    } else if (this.props.currentNavRoute === 'DEBRIS'){

      routeList = [
        {appRouteName: 'HOME', displayText: 'Home', hashRoute: ''},
        {appRouteName: 'USER', displayText: 'User', hashRoute: 'user-info'},
        {appRouteName: 'DEBRIS', displayText: 'Report Debris', hashRoute: 'debris'},
        {appRouteName: 'ALL', displayText: 'All Debris', hashRoute: 'all'},
        {appRouteName: 'LOGOUT', displayText: 'Log-out', hashRoute: 'logout'}
      ]

    }  else if (this.props.currentNavRoute === 'ALL' && typeof user !== 'undefined'){

      routeList = [
        {appRouteName: 'HOME', displayText: 'Home', hashRoute: ''},
        {appRouteName: 'USER', displayText: 'User', hashRoute: 'user-info'},
        {appRouteName: 'DEBRIS', displayText: 'Report Debris', hashRoute: 'debris'},
        {appRouteName: 'ALL', displayText: 'All Debris', hashRoute: 'all'},
        {appRouteName: 'LOGOUT', displayText: 'Log-out', hashRoute: 'logout'}

      ]

    }  else if (this.props.currentNavRoute === 'USER'){

      routeList = [
        {appRouteName: 'HOME', displayText: 'Home', hashRoute: ''},
        {appRouteName: 'USER', displayText: 'User', hashRoute: 'user-info'},
        {appRouteName: 'DEBRIS', displayText: 'Report Debris', hashRoute: 'debris'},
        {appRouteName: 'ALL', displayText: 'All Debris', hashRoute: 'all'},
        {appRouteName: 'LOGOUT', displayText: 'Log-out', hashRoute: 'logout'}

      ]

    }  else if (this.props.currentNavRoute === 'ALL' && typeof user !== 'undefined') {

      routeList = [
        {appRouteName: 'HOME', displayText: 'Home', hashRoute: ''},
        {appRouteName: 'ALL', displayText: 'All Debris', hashRoute: 'all'},
        {appRouteName: 'REGISTER', displayText: 'Register', hashRoute: 'register'},
        {appRouteName: 'LOGOUT', displayText: 'Log-out', hashRoute: 'logout'}

      ]

    }  else if (this.props.currentNavRoute === 'LOGOUT'){

      routeList = [
        {appRouteName: 'HOME', displayText: 'Home', hashRoute: ''},
        {appRouteName: 'ALL', displayText: 'All', hashRoute: 'all'},
        {appRouteName: 'REGISTER', displayText: 'Register', hashRoute: 'register'},
        {appRouteName: 'LOGIN', displayText: 'Log-in', hashRoute: 'login'}

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
    console.log(currentNavRoute, currentUser);

    let componentsList = theMenuRoutes.map(function(routeObj, i){
      return <RouteOption {...routeObj} key={i} _currentNavRoute = {currentNavRoute} _currentUser = {currentUser}/>
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
