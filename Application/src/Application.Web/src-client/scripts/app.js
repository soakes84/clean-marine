import Backbone from 'backbone'
import ReactDOM from 'react-dom'
import React from 'react'
import {DebrisModel} from './models/model-debris.js'
import {ViewController} from './viewController.js'


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
    let debrisDataView = new DebrisModel()
    debrisDataView.fetch()
    console.log('get the props')
    console.log(this.props);


    ReactDOM.render(<ViewController from route = {'HOME'}/>, document.querySelector('#app-container'))
  },

  recordDebris: function(){
    ReactDOM.render(<ViewController fromRoute = {'DEBRIS'}/>, document.querySelector('#app-container'))
  },

  registrationPage: function(){
    ReactDOM.render(<ViewController fromRoute = {'REGISTRATION'}/>, document.querySelector('#app-container'))
  },

  loginPage: function(){
    ReactDOM.render(<ViewController fromRoute = {'LOGIN'}/>, document.querySelector('#app-container'))
  },

  adoptABeach: function(){
    ReactDOM.render(<ViewController fromRoute = {'ADOPT'}/>, document.querySelector('#app-container'))
  },

  singleUserPage: function(){
    ReactDOM.render(<ViewController fromRoute = {'USER'}/>, document.querySelector('#app-container'))
  },

  displayAll: function(){
    ReactDOM.render(<ViewController fromRoute = {'ALL'}/>, document.querySelector('#app-container'))
  },

  about: function(){
    ReactDOM.render(<ViewController fromRoute = {'ABOUT'}/>, document.querySelector('#app-container'))
  },

})


new AppRouter ()
