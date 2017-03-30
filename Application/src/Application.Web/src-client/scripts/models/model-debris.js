import Backbone from 'backbone';
import $ from 'jquery';

export const DebrisModel = Backbone.Model.extend({
  urlRoot: '/api/debris/all',
  idAttribute: 'id'
})

export const DebrisCollection = Backbone.Collection.extend({
  model: DebrisModel,
  url: '/api/debris/all',
  saveAll: function(){
    console.log(this)
    console.log(this.toJSON())
    console.log( 'saving to server:', JSON.stringify() )
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
