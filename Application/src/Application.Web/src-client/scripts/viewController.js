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

    let componentToRender

    switch(this.state.currentNavRoute){
      case 'HOME':
        componentToRender = <HomeView {...this.state}/>
        break;
      case 'REGISTER':
        componentToRender = <RegisterView {...this.state}/>
        break;
      case 'LOGIN':
        componentToRender = <LoginView {...this.state}/>
        break;
      case 'USER':
        componentToRender = <UserView {...this.state}/>
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
