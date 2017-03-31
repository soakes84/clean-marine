import Backbone from 'backbone';
import {STORE} from './store.js';
const $ = require('jquery');
import {DebrisModel, DebrisCollection} from './models/model-debris.js';
import {UserModel} from './models/model-user.js';


export const ACTIONS = {
  saveNewDebris: function(userFormEntry){
    let newDebrisInstance = new DebrisModel()
    newDebrisInstance.set(userFormEntry)
    newDebrisInstance.save().then(function(serverRes){

      ACTIONS.fetchAllDebris()
    })
  },

  incrementDebris: function(debrisCounterObj, debrisType){
    let updatedCounter = debrisCounterObj
    debrisCounterObj[debrisType] += 1
    STORE.setStore('debrisCounter', updatedCounter)
  },

  decrementDebris: function(debrisCounterObj, debrisType){
    let updatedDecCounter = debrisCounterObj
    console.log(debrisCounterObj);
    if ( debrisCounterObj[debrisType] === 0) {
       debrisCounterObj[debrisType] = 0
    } else {
      debrisCounterObj[debrisType] -= 1
      STORE.setStore('debrisCounter', updatedDecCounter)
      }
    },

  saveAllDebris: function(ary){
    $.post(ary)
  },

  fetchAllDebris: function(){

    let debrisCollectionInstance = new DebrisCollection()
    debrisCollectionInstance.fetch().then(function(serverRes){
      STORE.setStore('debrisList', serverRes)
      console.log(serverRes);
    })
  },

  changeCurrentNav: function(selectedAppRoute, urlRoute){
    STORE.setStore('currentNavRoute', selectedAppRoute)
  },

  routeTo: function(path){
    window.location.hash = path
  },

  registerNewUser: function(newUserInfoObj){
    UserModel.register(newUserInfoObj).then(function(serverRes){

      ACTIONS.routeTo('login')

    })
  },

  loginUser: function(email, password){
    UserModel.logIn(email, password).then(function(serverRes){
      console.log('login-info', serverRes);
      STORE.setStore('currentUser', serverRes)

      ACTIONS.routeTo( 'debris')
    })
  },

  fetchCurrentUser: function(){
    UserModel.getCurrentUser().then(function(serverRes){
      if(serverRes.user !== null){
        STORE.setStore('currentUser', serverRes.user)
      }
    })
  },

  logOutUser: function(){
    UserModel.logOut()
    ACTIONS.routeTo('')

  }
}
