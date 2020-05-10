import React, { Component } from "react";
//import { Link } from "react-router-dom";
import AppContext from "../../Component/Context/AppContext";
import { NiceDate } from '../Utils/Utils'

export default class Intro extends Component {
  static contextType = AppContext

  render() {
    const { events } = this.context
    console.log(events)
    return (
      <section>
        <h2>Welcome parents!</h2>
        <p>
          The Parent connect app is built to help single parents connect and
          support each other. Assist with day to day activities by seamlessly
          toggling between schedules. Our community of helpers provide practica
          support such as babysitting, transporting, and dogwalking and plenty
          more. Sign up and join a virtual village like no other!
        </p>
        <h3>Current events</h3>
        <ul style={{display:'flex', flexWrap:'wrap', padding: '0',justifyContent: 'space-around'}}>
          {events.map((event, id) => (
            <li key={id} style={{width:"40%", border:'1px solid', borderRadius:'10px', marginBottom:'20px'}}>
              <p className="bold">{event.parent_name}</p>
              <p className="bold">{event.title}</p>
              {/* <p>{event.time_of_event}</p> */}
              <NiceDate
                date={new Date(event.time_of_event)}
              />
              <p className="bold">Description</p>
              <p>{event.description}</p>
              <p className="bold">Address</p>
              <p>{event.address}</p>
            </li>
          ))}
        </ul>
        </section>
    );
  }
}
