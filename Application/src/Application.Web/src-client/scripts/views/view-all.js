import React from 'react';
import {Navbar} from '../components/component-navbar.js';
import {ACTIONS} from '../actions.js';
import {STORE} from '../store.js';
import {DebrisListComponent} from '../components/component-debris_list.js';

export const AllView = React.createClass({
  getInitialState: function(){
    return STORE.getStoreData()
  },

  componentDidMount: function(){
    let component = this

    ACTIONS.fetchAllDebris

  },

  render: function(){

  let side = <h3>Recent Reports</h3>
  let allUserData =
  <table class="table-fill">
  <thead>
  <tr>
  <th class="text-left">Date</th>
  <th class="text-left">Username</th>
  <th class="text-left">Area</th>
  <th class="text-left">Item Type</th>
  <th class="text-left"># Items</th>

  </tr>
  </thead>
  <tbody class="table-hover">
  <tr>
  <td class="text-left">January</td>
  <td class="text-left">Treehugger123</td>
  <td class="text-left">Folly Beach</td>
  <td class="text-left">Cigarettes</td>
  <td class="text-left">13</td>

  </tr>
  <tr>
  <td class="text-left">February</td>
  <td class="text-left">Fishlover4</td>
  <td class="text-left">Folly Beach</td>
  <td class="text-left">Abandoned Ships</td>
  <td class="text-left">2</td>

  </tr>
  <tr>
  <td class="text-left">March</td>
  <td class="text-left">ronjontom</td>
  <td class="text-left">Folly Beach</td>
  <td class="text-left">Beer Cans</td>
  <td class="text-left">6</td>

  </tr>
  <tr>
  <td class="text-left">April</td>
  <td class="text-left">donnieyen79</td>
  <td class="text-left">Folly Beach</td>
  <td class="text-left">Trust Funds</td>
  <td class="text-left">24</td>

  </tr>
  <tr>
  <td class="text-left">May</td>
  <td class="text-left">tHubbard</td>
  <td class="text-left">Myrtle Beach</td>
  <td class="text-left">Plastic Bags</td>
  <td class="text-left">8</td>




  </tr>
  <tr>
  <td class="text-left">January</td>
  <td class="text-left">Treehugger123</td>
  <td class="text-left">Folly Beach</td>
  <td class="text-left">Cigarettes</td>
  <td class="text-left">13</td>

  </tr>
  <tr>
  <td class="text-left">January</td>
  <td class="text-left">Treehugger123</td>
  <td class="text-left">Folly Beach</td>
  <td class="text-left">Cigarettes</td>
  <td class="text-left">13</td>

  </tr>
  <tr>
  <td class="text-left">January</td>
  <td class="text-left">Treehugger123</td>
  <td class="text-left">Folly Beach</td>
  <td class="text-left">Cigarettes</td>
  <td class="text-left">13</td>

  </tr>
  <tr>
  <td class="text-left">January</td>
  <td class="text-left">Treehugger123</td>
  <td class="text-left">Folly Beach</td>
  <td class="text-left">Cigarettes</td>
  <td class="text-left">13</td>

  </tr>
  <tr>
  <td class="text-left">January</td>
  <td class="text-left">Treehugger123</td>
  <td class="text-left">Folly Beach</td>
  <td class="text-left">Cigarettes</td>
  <td class="text-left">13</td>

  </tr>
  <tr>
  <td class="text-left">January</td>
  <td class="text-left">Treehugger123</td>
  <td class="text-left">Folly Beach</td>
  <td class="text-left">Cigarettes</td>
  <td class="text-left">13</td>

  </tr>
  <tr>
  <td class="text-left">February</td>
  <td class="text-left">Fishlover4</td>
  <td class="text-left">Folly Beach</td>
  <td class="text-left">Abandoned Ships</td>
  <td class="text-left">2</td>

  </tr>
  <tr>
  <td class="text-left">March</td>
  <td class="text-left">ronjontom</td>
  <td class="text-left">Folly Beach</td>
  <td class="text-left">Beer Cans</td>
  <td class="text-left">6</td>

  </tr>
  <tr>
  <td class="text-left">April</td>
  <td class="text-left">donnieyen79</td>
  <td class="text-left">Folly Beach</td>
  <td class="text-left">Trust Funds</td>
  <td class="text-left">24</td>

  </tr>
  <tr>
  <td class="text-left">May</td>
  <td class="text-left">tHubbard</td>
  <td class="text-left">Myrtle Beach</td>
  <td class="text-left">Plastic Bags</td>
  <td class="text-left">8</td>




  </tr>
  <tr>
  <td class="text-left">January</td>
  <td class="text-left">Treehugger123</td>
  <td class="text-left">Folly Beach</td>
  <td class="text-left">Cigarettes</td>
  <td class="text-left">13</td>

  </tr>
  <tr>
  <td class="text-left">January</td>
  <td class="text-left">Treehugger123</td>
  <td class="text-left">Folly Beach</td>
  <td class="text-left">Cigarettes</td>
  <td class="text-left">13</td>

  </tr>
  <tr>
  <td class="text-left">January</td>
  <td class="text-left">Treehugger123</td>
  <td class="text-left">Folly Beach</td>
  <td class="text-left">Cigarettes</td>
  <td class="text-left">13</td>

  </tr>
  <tr>
  <td class="text-left">January</td>
  <td class="text-left">Treehugger123</td>
  <td class="text-left">Folly Beach</td>
  <td class="text-left">Cigarettes</td>
  <td class="text-left">13</td>

  </tr>
  <tr>
  <td class="text-left">January</td>
  <td class="text-left">Treehugger123</td>
  <td class="text-left">Folly Beach</td>
  <td class="text-left">Cigarettes</td>
  <td class="text-left">13</td>

  </tr>
  <tr>
  <td class="text-left">January</td>
  <td class="text-left">Treehugger123</td>
  <td class="text-left">Folly Beach</td>
  <td class="text-left">Cigarettes</td>
  <td class="text-left">13</td>

  </tr>
  <tr>
  <td class="text-left">February</td>
  <td class="text-left">Fishlover4</td>
  <td class="text-left">Folly Beach</td>
  <td class="text-left">Abandoned Ships</td>
  <td class="text-left">2</td>

  </tr>
  <tr>
  <td class="text-left">March</td>
  <td class="text-left">ronjontom</td>
  <td class="text-left">Folly Beach</td>
  <td class="text-left">Beer Cans</td>
  <td class="text-left">6</td>

  </tr>
  <tr>
  <td class="text-left">April</td>
  <td class="text-left">donnieyen79</td>
  <td class="text-left">Folly Beach</td>
  <td class="text-left">Trust Funds</td>
  <td class="text-left">24</td>

  </tr>
  <tr>
  <td class="text-left">May</td>
  <td class="text-left">tHubbard</td>
  <td class="text-left">Myrtle Beach</td>
  <td class="text-left">Plastic Bags</td>
  <td class="text-left">8</td>




  </tr>
  <tr>
  <td class="text-left">January</td>
  <td class="text-left">Treehugger123</td>
  <td class="text-left">Folly Beach</td>
  <td class="text-left">Cigarettes</td>
  <td class="text-left">13</td>

  </tr>
  <tr>
  <td class="text-left">January</td>
  <td class="text-left">Treehugger123</td>
  <td class="text-left">Folly Beach</td>
  <td class="text-left">Cigarettes</td>
  <td class="text-left">13</td>

  </tr>
  <tr>
  <td class="text-left">January</td>
  <td class="text-left">Treehugger123</td>
  <td class="text-left">Folly Beach</td>
  <td class="text-left">Cigarettes</td>
  <td class="text-left">13</td>

  </tr>
  <tr>
  <td class="text-left">January</td>
  <td class="text-left">Treehugger123</td>
  <td class="text-left">Folly Beach</td>
  <td class="text-left">Cigarettes</td>
  <td class="text-left">13</td>

  </tr>
  <tr>
  <td class="text-left">January</td>
  <td class="text-left">Treehugger123</td>
  <td class="text-left">Folly Beach</td>
  <td class="text-left">Cigarettes</td>
  <td class="text-left">13</td>

  </tr>
  <tr>
  <td class="text-left">January</td>
  <td class="text-left">Treehugger123</td>
  <td class="text-left">Folly Beach</td>
  <td class="text-left">Cigarettes</td>
  <td class="text-left">13</td>

  </tr>
  <tr>
  <td class="text-left">February</td>
  <td class="text-left">Fishlover4</td>
  <td class="text-left">Folly Beach</td>
  <td class="text-left">Abandoned Ships</td>
  <td class="text-left">2</td>

  </tr>
  <tr>
  <td class="text-left">March</td>
  <td class="text-left">ronjontom</td>
  <td class="text-left">Folly Beach</td>
  <td class="text-left">Beer Cans</td>
  <td class="text-left">6</td>

  </tr>
  <tr>
  <td class="text-left">April</td>
  <td class="text-left">donnieyen79</td>
  <td class="text-left">Folly Beach</td>
  <td class="text-left">Trust Funds</td>
  <td class="text-left">24</td>

  </tr>
  <tr>
  <td class="text-left">May</td>
  <td class="text-left">tHubbard</td>
  <td class="text-left">Myrtle Beach</td>
  <td class="text-left">Plastic Bags</td>
  <td class="text-left">8</td>




  </tr>
  <tr>
  <td class="text-left">January</td>
  <td class="text-left">Treehugger123</td>
  <td class="text-left">Folly Beach</td>
  <td class="text-left">Cigarettes</td>
  <td class="text-left">13</td>

  </tr>
  <tr>
  <td class="text-left">January</td>
  <td class="text-left">Treehugger123</td>
  <td class="text-left">Folly Beach</td>
  <td class="text-left">Cigarettes</td>
  <td class="text-left">13</td>

  </tr>
  <tr>
  <td class="text-left">January</td>
  <td class="text-left">Treehugger123</td>
  <td class="text-left">Folly Beach</td>
  <td class="text-left">Cigarettes</td>
  <td class="text-left">13</td>

  </tr>
  <tr>
  <td class="text-left">January</td>
  <td class="text-left">Treehugger123</td>
  <td class="text-left">Folly Beach</td>
  <td class="text-left">Cigarettes</td>
  <td class="text-left">13</td>

  </tr>
  <tr>
  <td class="text-left">January</td>
  <td class="text-left">Treehugger123</td>
  <td class="text-left">Folly Beach</td>
  <td class="text-left">Cigarettes</td>
  <td class="text-left">13</td>

  </tr>
  <tr>
  <td class="text-left">January</td>
  <td class="text-left">Treehugger123</td>
  <td class="text-left">Folly Beach</td>
  <td class="text-left">Cigarettes</td>
  <td class="text-left">13</td>

  </tr>
  <tr>
  <td class="text-left">February</td>
  <td class="text-left">Fishlover4</td>
  <td class="text-left">Folly Beach</td>
  <td class="text-left">Abandoned Ships</td>
  <td class="text-left">2</td>

  </tr>
  <tr>
  <td class="text-left">March</td>
  <td class="text-left">ronjontom</td>
  <td class="text-left">Folly Beach</td>
  <td class="text-left">Beer Cans</td>
  <td class="text-left">6</td>

  </tr>
  <tr>
  <td class="text-left">April</td>
  <td class="text-left">donnieyen79</td>
  <td class="text-left">Folly Beach</td>
  <td class="text-left">Trust Funds</td>
  <td class="text-left">24</td>

  </tr>
  <tr>
  <td class="text-left">May</td>
  <td class="text-left">tHubbard</td>
  <td class="text-left">Myrtle Beach</td>
  <td class="text-left">Plastic Bags</td>
  <td class="text-left">8</td>




  </tr>
  <tr>
  <td class="text-left">January</td>
  <td class="text-left">Treehugger123</td>
  <td class="text-left">Folly Beach</td>
  <td class="text-left">Cigarettes</td>
  <td class="text-left">13</td>

  </tr>
  <tr>
  <td class="text-left">January</td>
  <td class="text-left">Treehugger123</td>
  <td class="text-left">Folly Beach</td>
  <td class="text-left">Cigarettes</td>
  <td class="text-left">13</td>

  </tr>
  <tr>
  <td class="text-left">January</td>
  <td class="text-left">Treehugger123</td>
  <td class="text-left">Folly Beach</td>
  <td class="text-left">Cigarettes</td>
  <td class="text-left">13</td>

  </tr>
  <tr>
  <td class="text-left">January</td>
  <td class="text-left">Treehugger123</td>
  <td class="text-left">Folly Beach</td>
  <td class="text-left">Cigarettes</td>
  <td class="text-left">13</td>

  </tr>
  <tr>
  <td class="text-left">January</td>
  <td class="text-left">Treehugger123</td>
  <td class="text-left">Folly Beach</td>
  <td class="text-left">Cigarettes</td>
  <td class="text-left">13</td>

  </tr>
  </tbody>
  </table>


return (
    <div>
        <h1>Clean Marine</h1>
      {side}
      {allUserData}
    </div>
  )
}
})
