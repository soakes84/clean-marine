export const STORE = {
  _data: {
    debrisList: [],
    amount: '',
    latitude: '',
    longitude: '',
    currentNavRoute: '',
    currentUser: {}
  },

  getStoreData: function(){
    return this._data
  },

  setStore: function(debrisProp, payload){
    this._data[debrisProp] = payload

  },

  onStoreChange: function(cbFunc){
    this._callMeLaterPls = cbFunc
  }
}
