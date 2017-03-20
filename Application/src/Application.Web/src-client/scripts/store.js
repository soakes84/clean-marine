export const STORE = {
  _data: {
    debrisList: [],
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
