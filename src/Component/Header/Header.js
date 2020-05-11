import React, { Component } from "react";
import {Link} from 'react-router-dom';
import TokenService from '../../services/token-service'
import IdleService from '../../services/idle-service'

export default class Header extends Component {
  handleLogoutClick = () => {
    TokenService.clearAuthToken()
    /* when logging out, clear the callbacks to the refresh api and idle auto logout */
    TokenService.clearCallbackBeforeExpiry()
    IdleService.unRegisterIdleResets()
  }

  renderLogoutLink() {
    return (
      <div>
        <Link
          onClick={this.handleLogoutClick}
          to='/'>
          Logout
        </Link>
      </div>
    )
  }

  renderLoginLink() {
    return (
      <div>
        <Link
          to='/signup'>
          Sign up
        </Link>
        {' - '}
        <Link
          to='/login'>
          Log in
        </Link>
      </div>
    )
  }

  render() {
    return (
      <>
        <nav>
            <Link to='/' 
              style={{textDecoration:'none', borderBottom:'1px dashed purple'}}>
              PARENT 
              <span style={{fontSize: '40px', lineHeight: '.2', position: 'relative', margin:'0 5px', top: '5px'}}>&#8734;</span> 
              CONNECT
            </Link>
          {' '}
          <span style={{float:'right', marginRight:'50px'}}>
          {TokenService.hasAuthToken()
            ? this.renderLogoutLink()
            : this.renderLoginLink()}
          </span>
        </nav>
      </>
    )

  }
}

//css example
// span {
//   content: "\26AC";
// }