import React, {Component} from  "react";
import AuthApiService from '../../services/auth-api-service'

export default class Signup extends Component {
  state = {
    error: null,
    fullname: '',
    username: '',
    password: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = ev => {
    ev.preventDefault()
    const { fullname, username, password } = this.state

    this.setState({ error: null })
    AuthApiService.postUser({
      username,
      password,
      fullname
    })
      .then(user => {
        this.setState({
          fullname: '',
          username: '',
          password: ''
        })
        this.props.history.push('/login')
      })
      .catch(res => {
        this.setState({ error: res.error })
      })
  }

  render() {
    const { error } = this.state
    return (
      <>
        <h3>Sign up</h3>
        <form onSubmit={this.handleSubmit}>
        <div role='alert'>
          {error && <p style={{color:'red'}}>{error}</p>}
        </div>
        <label>Fullname </label>{' '}
          <input
            type="text"
            name="fullname"
            placeholder="John Doe"
            value={this.state.fullname}
            required
            onChange={this.handleChange}
          />
          <br/>
          <label>Username </label>{' '}
          <input
            type="text"
            name="username"
            placeholder="zelda12"
            value={this.state.username}
            required
            onChange={this.handleChange}
          />
          <br/>
          <label>Password </label>{' '}
          <input 
            type="text" 
            name="password" 
            value={this.state.password} 
            required 
            onChange={this.handleChange}
          />
          <br/>
          <input type="submit" value="Sign up" />
        </form>
      </>
    );
  }
}
