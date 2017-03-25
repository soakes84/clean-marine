import React from 'react';
import {Navbar} from '../components/component-navbar.js';
import {ACTIONS} from '../actions.js';
import {STORE} from '../store.js';
import {DebrisListComponent} from '../components/component-debris_list.js';
import SimpleMap from '../components/component-debrimap.js'
import {DebrisModel} from '../models/model-debris.js'

const API_KEY = 'AIzaSyCVsRPLuLQW5TRej4APIZAtgIEAhILiQ2U';
export const HomeView = React.createClass({

  render: function(){
    let debrisDataView = new DebrisModel()
    debrisDataView.fetch().then(function(serverRes){
      console.log(serverRes);
    })

    let side = <h3>Home Page</h3>
    let allUserData =
    <div className='collectorPage'>
      <h2>Top Five Collectors</h2>
      <p>UserName Date Location Amount</p>
      <hr/>
      <p>Jennifer 3/21/2017 Wando River 20 items</p>
      <hr/>
      <p>Jennifer 3/21/2017 Wando River 20 items</p>
      <hr/>
      <p>Jennifer 3/21/2017 Wando River 20 items</p>
      <hr/>
      <p>Jennifer 3/21/2017 Wando River 20 items</p>
      <hr/>
      <p>Jennifer 3/21/2017 Wando River 20 items</p>
    </div>


  return (
      // <img src = />
      <div className='map'>
        <SimpleMap center={{lat: 32.78, lng: -79.93}} zoom={11} bootstrapURLKeys={{
    key: API_KEY,
    language: 'en'
  }}/>
    {allUserData}
      </div>
    )
  }
})
