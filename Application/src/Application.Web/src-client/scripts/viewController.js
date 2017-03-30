import React from 'react';
import {Navbar} from './components/component-navbar.js';
import {STORE} from './store.js';
import {ACTIONS} from './actions.js';

import {HomeView} from './views/view-home.js';
import {LoginView} from './views/view-login.js';
import {RegisterView} from './views/view-register.js';
import {UserView} from './views/view-user.js';
import {AllView} from './views/view-all.js';
import {AboutView} from './views/view-about.js';
import {DebrisView} from './views/view-reportDebris.js';
import {RecapView} from './views/view-recap.js';

export const ViewController = React.createClass({

  getInitialState: function(){

    let storeObject = STORE.getStoreData()

    return storeObject
  },

  componentDidMount: function(){
    let component = this

    STORE.onStoreChange(function(){
      let newStoreObj = STORE.getStoreData()
      component.setState(newStoreObj)
    })


  },

  render: function(){
    let bestPlaces = [
    	{lt: 32.79, ln: -65.82, name: "Sullivan's Island"},
    	{lt: 32.78, ln: -70.80, name: "Sullivan's Island"},
    	{lt: 32.65603362232004, ln:
    -79.94162886624117, name: "Folly Beach"},
      {lt: 32.66, ln: -65.90, name: "Folly Beach"},
      {lt: 32.68, ln: -79.93, name: "Folly Beach"},
      {lt: 32.88, ln: -79.69, name: "Dewees Island"},
      {lt:
    32.6110747332734, ln: -80.05784361843844, name: "Kiawah Island"},
      {lt: 32.66, ln: -80.17, name: "Kiawah Island"},
      {lt: 32.60, ln: -80.10, name: "Seabrook Island"},
      {lt: 32.60, ln: -80.15, name: "Seabrook Island"},
      {lt: 32.60, ln: -80.12, name: "Seabrook Island"}
    ]

    let componentToRender

    switch(this.state.currentNavRoute){
      case 'HOME':
        componentToRender = <HomeView {...this.state} locationsData={bestPlaces}/>
        break;
      case 'REGISTER':
        componentToRender = <RegisterView {...this.state}/>
        break;
      case 'LOGIN':
        componentToRender = <LoginView {...this.state}/>
        break;
      case 'USER':
        componentToRender = <UserView/>

        break;
      case 'ALL':
        componentToRender = <AllView {...this.state}/>
        break;
      case 'DEBRIS':
        componentToRender = <DebrisView {...this.state}/>
        break;
      case 'ABOUT':
        componentToRender = <AboutView {...this.state}/>
        break;
      case 'RECAP':
        componentToRender = <RecapView {...this.state}/>
        break;
        default:
    }

    return (
      <div>
        <Navbar {...this.state}/>
        {componentToRender}
      </div>
    )
  }
})
