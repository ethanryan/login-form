import React, { Component } from 'react';

import { Button, Form } from 'semantic-ui-react'

class LoginForm extends Component {
  constructor(props) {
    super(props)
    this.state =
    {
      username: '',
      password: ''
    }
    this.handleUsernameChange = this.handleUsernameChange.bind(this)
    this.handlePasswordChange = this.handlePasswordChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleUsernameChange(event) {
    this.setState({
      username: event.target.value
    })
  }

  handlePasswordChange(event) {
    this.setState({
      password: event.target.value
    })
  }

  handleSubmit(event) {
    alert('username and password submitted: ' + this.state.username + ' ' + this.state.password)
    event.preventDefault()
  }


//   handleLogin(params) {
//   // if (window.confirm(`Are you sure you want to login??? params are: name: ${params.name}, password: ${params.password}`))
//     this.setState({nameOrPasswordError: false}) //resetting the state
//     api.logIn(params) //calling logIn function in api/index.js
//     .then(response => {
//       if(response.user == null && response.error != null) { //if user doesn't exist, or if there is an error...
//       this.setState({nameOrPasswordError: true}) //need to pass this down to LoginForm
//       console.log("response error")
//       return
//     }
//     localStorage.setItem("jwt", response.token)
//     this.setState({
//       user: response.user //this needs to be in StoryContainer
//     })
//     this.props.history.push('/')
//   })
// }

  render() {
    console.log('state from LoginForm: ', this.state)
    return (
      <div className="LoginForm">
        <Form onSubmit={this.handleSubmit}>
          <Form.Field>
            <label>Username</label>
            <input placeholder='Username' onChange={this.handleUsernameChange}/>
          </Form.Field>
          <Form.Field>
            <label>Password</label>
            <input placeholder='Password' onChange={this.handlePasswordChange}/>
          </Form.Field>
          <Button type='submit'>Submit</Button>
        </Form>
      </div>
    );
  }
}

export default LoginForm;
