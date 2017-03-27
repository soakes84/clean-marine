import GoogleMapReact from 'google-map-react';
import ReactDOM from 'react-dom';

import React, {Component} from 'react';

const RegistrationForm = React.createClass({
   render: function(){
       let side = <h3>Please Register Here</h3>
       let regForm = <form onSubmit> username:<br/> <input type="text" name="username"/> <br/> email:<br/> <input type="text" name="email"/> </form>


     return (
         <div>
           {side}
           {regForm}
         </div>
       )
     }

});
