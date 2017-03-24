import Backbone from 'backbone';
import {STORE} from './store.js';
const $ = require('jquery');
import {DebrisModel, DebrisCollection} from './models/model-debris.js'


export const ACTIONS = {
  saveNewDebris: function(userFormEntry){
    let newDebrisInstance = new DebrisModel()
    newDebrisInstance.set(userFormEntry)
    newDebrisInstance.save().then(function(serverRes){

      ACTIONS.fetchAllDebris()
    })
  },

  saveAllDebris: function(ary){
    $.post()
  },

  fetchAllDebris: function(){

    let debrisCollectionInstance = new DebrisCollection()
    debrisCollectionInstance.fetch().then(function(serverRes){
      STORE.setStore('debrisList', serverRes)
    })
  },

  changeCurrentNav: function(selectedAppRoute, urlRoute){
    STORE.setStore('currentNavRoute', selectedAppRoute)
    window.location.hash = urlRoute
  },

  registerNewUser: function(newUserInfoObj){
    UserModel.register(newUserInfoObj).then(function(serverRes){
      ACTIONS.changeCurrentNav('DEBRIS', 'user-info')
    })
  },

  loginUser: function(userName, password){
    UserModel.logIn(userName, password).then(function(serverRes){
      STORE.setStore('currentUser', serverRes)
      ACTIONS.changeCurrentNav('DEBRIS', 'user-info')
    })
  },

  fetchCurrentUser: function(){
    UserModel.getCurrentUser().then(function(serverRes){
      if(serverRes.user !== null){
        STORE.setStore('currentUser', serverRes.user)
      }
    })
  }
}
