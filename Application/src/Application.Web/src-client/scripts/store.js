export const STORE = {
  _data: {
    debrisList: [],
    amount: '',
    latitude: '',
    longitude: '',
    currentNavRoute: '',
    currentUser: {},
    debrisCounter: {
      aluminum: 0,
      plasticBags: 0,
      clothing: 0,
      misc: 0,
      cigButts: 0
    }
  },

  getStoreData: function(){
    return this._data
  },

  setStore: function(debrisProp, payload){
    this._data[debrisProp] = payload
    if(typeof this._callMeLaterPls === "function"){
      this._callMeLaterPls()
    }
  },

  onStoreChange: function(cbFunc){
    this._callMeLaterPls = cbFunc
  }
}
