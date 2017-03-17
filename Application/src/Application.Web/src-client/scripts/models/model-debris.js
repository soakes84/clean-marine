import Backbone from 'backbone';

export const DebrisModel = Backbone.Model.extend({
  urlRoot: '/api/debris',
  idAttribute: 'id'
})

export const DebrisCollection = Backbone.Collection.extend({
  model: DebrisModel,
  url: '/api/debris'
})
