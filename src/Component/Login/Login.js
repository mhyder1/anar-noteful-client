import React, { Component } from "react";
import { Link } from "react-router-dom";
import AuthApiService from '../../services/auth-api-service'

export default class Login extends Component {
    state = {
        username: '',
        password: '',
        error: null
    }

    handleChange = (e) => {
        this.setState({
          [e.target.name]: e.target.value  
        })
    }

    handleLoginSuccess = () => {
        const { location, history } = this.props
        const destination = (location.state || {}).from || '/'
        history.push(destination)
    }

    handleSubmitJwtAuth = ev => {
        ev.preventDefault()
        this.setState({ error: null })
        const { username, password } = this.state
        console.log({username})
        AuthApiService.postLogin({
          username,
          password
        })
          .then(res => {
            this.setState({
                username: '',
                password: ''
            })
            this.handleLoginSuccess()
          })
          .catch(res => {
            this.setState({ error: res.error })
          })
      }

    render(){
        const{ error } = this.state
        console.log(error)
        return(
            <>
            <h3>Log in</h3>
            <form onSubmit={this.handleSubmitJwtAuth}>
                <div role='alert'>
                {error && <p style={{color: 'red'}}>{error}</p>}
                </div>
                <label>Username: </label>
                <input
                    onChange={this.handleChange}
                    type="text"
                    name="username"
                    placeholder="username"
                    value={this.state.username}
                    required
                />
              <br />
              <label>Password: </label>
            <input 
                onChange={this.handleChange} 
                type="password" 
                name="password"
                placeholder="username" 
                value={this.state.password}
                required 
            />
              <br />
              <input type="submit" value="login" />{" "}
              <button>
                <Link
                  style={{ textDecoration: "none", color: "black" }}
                  to="/signup"
                >
                  create account
                </Link>
              </button>
            </form>
        </>
        )
    }

}