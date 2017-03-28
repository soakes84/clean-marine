import Backbone from 'backbone';
import $ from 'jquery';

export const DebrisModel = Backbone.Model.extend({
  urlRoot: '/api/debris',
  idAttribute: 'id'
})

export const DebrisCollection = Backbone.Collection.extend({
  model: DebrisModel,
  url: '/api/debris',
  saveAll: function(){
    console.log( 'saving to server:', JSON.stringify(this.toJSON()) )
      return $.ajax({
        url: this.url,
        method: 'POST',
        headers: {
          'Content-Type' : 'application/json'
        },
        data: JSON.stringify(this.toJSON())
      })
  }
})
