import Backbone from 'backbone';
import {STORE} from './store.js';
import {DebrisModel, DebrisCollection} from './models/model-debris.js'


export const ACTIONS = {
  saveNewDebris: function(userFormEntry){
    let newDebrisInstance = new DebrisModel()
    newDebrisInstance.set(userFormEntry)
    newDebrisInstance.save().then(function(serverRes){

      ACTIONS.fetchAllDebris()
    })
  },

  fetchAllDebris: function(){

    let debrisCollectionInstance = new DebrisCollection()
    debrisCollectionInstance.fetch().then(function(serverRes){
      STORE.setStore('debrisList', serverRes)
      console.log('where the data', serverRes);
    })
  },

  changeCurrentNav: function(selectedAppRoute, urlRoute){
    console.log(selectedAppRoute);
    STORE.setStore('currentNavRoute', selectedAppRoute)
    window.location.hash = urlRoute
  }
  }
