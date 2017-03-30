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
  'recap' : 'recapPage',
  'register' : 'registrationPage',
  'login' : 'loginPage',
  'logout' : 'logOutPage',
  'user-info' : 'singleUserPage',
  'adopt' : 'adoptABeach',
  'debris' : 'recordDebris',
  'all' : 'displayAll',
  'about' : 'about',
  '' : 'homePage'
  },

  homePage: function(){
    ACTIONS.changeCurrentNav("HOME")},

  recordDebris: function(){
    ACTIONS.changeCurrentNav("DEBRIS")},

  registrationPage: function(){
    ACTIONS.changeCurrentNav("REGISTER")},

  loginPage: function(){
    ACTIONS.changeCurrentNav("LOGIN")},


  singleUserPage: function(){
    ACTIONS.changeCurrentNav("USER")  },

  displayAll: function(){
    ACTIONS.changeCurrentNav("ALL")  },

  about: function(){
    ACTIONS.changeCurrentNav("ABOUT") },

  recapPage: function(){
    ACTIONS.changeCurrentNav("RECAP")  },

  logOutPage: function(){
    ACTIONS.changeCurrentNav("LOGOUT")  },



})



new AppRouter()
ReactDOM.render(<ViewController/>, document.querySelector('#app-container'))
