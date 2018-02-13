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

  render() {
    console.log('state from LoginForm: ', this.state)
    return (
      <div className="LoginForm">
        <Form>
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
