import React, { Component } from "react";
import { Link } from "react-router-dom";
import './nav.css'

export default class NavMenu extends Component {
  state = {
    open: false
  }

  toggle = () => {
    this.setState({
      open: !this.state.open
    })
  }

  render() {
    const { open } = this.state
    return (
      <nav className="navigation">
      <button className="hamburger" onClick={this.toggle}>|||</button>
      {
        <div className={open ? 'navbar show': 'navbar toggle'}>
          <Link className='links' to={"/arts-crafts"}>Arts & Crafts</Link>
          <Link className='links' to={"/music-dance"}>Music & Dance</Link>
          <Link className='links' to={"/outdoor-activities"}>Outdoor activities</Link>
          <Link className='links' to={'/sports-fitness'}>Sport & Fitnesss</Link>
          <Link className='links' to={"/books-films"}>Books & Films</Link>
          <Link className='links' to={"/tutoring"}>Tutoring</Link>
          <Link className='my-events-link' to={"/my-events"}>📅</Link>
        </div>
      }
      </nav>
    )
  }
}
