import Backbone from 'backbone'
import ReactDOM from 'react-dom'
import React from 'react'
import {DebrisModel} from './models/model-debris.js'
import {ViewController} from './viewController.js'
import {ACTIONS} from './actions.js';

const AppRouter = Backbone.Router.extend({
  initialize: function(){
    Backbone.history.start();
  },

  routes: {

  'register' : 'registrationPage',
  'login' : 'loginPage',
  'user-info' : 'singleUserPage',
  'adopt' : 'adoptABeach',
  'debris' : 'recordDebris',
  'all' : 'displayAll',
  'about' : 'about',
  '' : 'homePage'
  },

  homePage: function(){
    ACTIONS.changeCurrentNav("HOME", window.location.hash)

    ReactDOM.render(<ViewController />, document.querySelector('#app-container'))
  },

  recordDebris: function(){
    ACTIONS.changeCurrentNav("DEBRIS", window.location.hash)

    ReactDOM.render(<ViewController />, document.querySelector('#app-container'))
  },

  registrationPage: function(){
    ACTIONS.changeCurrentNav("REGISTER", window.location.hash)

    ReactDOM.render(<ViewController/>, document.querySelector('#app-container'))
  },

  loginPage: function(){
    ACTIONS.changeCurrentNav("LOGIN", window.location.hash)

    ReactDOM.render(<ViewController/>, document.querySelector('#app-container'))
  },

  adoptABeach: function(){
    ACTIONS.changeCurrentNav("ADOPT", window.location.hash)
    ReactDOM.render(<ViewController/>, document.querySelector('#app-container'))
  },

  singleUserPage: function(){
    ACTIONS.changeCurrentNav("USER", window.location.hash)
    ReactDOM.render(<ViewController/>, document.querySelector('#app-container'))
  },

  displayAll: function(){
    ACTIONS.changeCurrentNav("ALL", window.location.hash)
    ReactDOM.render(<ViewController/>, document.querySelector('#app-container'))
  },

  about: function(){
    ACTIONS.changeCurrentNav("ABOUT", window.location.hash)

    ReactDOM.render(<ViewController/>, document.querySelector('#app-container'))
  },

})



new AppRouter()
