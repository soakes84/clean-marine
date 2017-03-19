var React = require('react')

var AccountFields = React.createClass({
  render: function() {
    return ( <div>
      <label>username</label>
      <input type="text"
             ref="name"
             defaultValue={ this.props.fieldValues.name } />

      <label>email</label>
      <input type="email"
             ref="email"
             defaultValue={ this.props.fieldValues.email } />

      <label>password</label>
      <input type="password"
             ref="password"
             defaultValue={ this.props.fieldValues.password } />

      <label>re-enter password</label>
      <input type="re-enter password"
             ref="re-enter password"
             defaultValue={ this.props.fieldValues.retypepassword } />

      <button onClick={ this.saveAndContinue }>Save and Continue</button></div>
    )
  },

  saveAndContinue: function(e) {
    e.preventDefault()

    // Get values via this.refs
    var data = {
      name     : this.refs.name.getDOMNode().value,
      email    : this.refs.email.getDOMNode().value,
      password : this.refs.password.getDOMNode().value,
      re-enter password : this.refs.re-enterpassword.getDOMNode().value,
    }

    this.props.saveValues(data)
    this.props.nextStep()
  }
})

module.exports = AccountFields
