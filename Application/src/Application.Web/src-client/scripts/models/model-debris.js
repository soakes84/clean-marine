import Backbone from 'backbone';

export const DebrisModel = Backbone.Model.extend({
  urlRoot: '/api/debris/all',
  idAttribute: 'id'
})

export const DebrisCollection = Backbone.Collection.extend({
  model: DebrisModel,
  url: '/api/debris/all'
})
