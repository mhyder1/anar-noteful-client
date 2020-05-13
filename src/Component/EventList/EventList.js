import React, { Component } from "react";
import AppContext from "../Context/AppContext";
import {Link} from 'react-router-dom'
import { NiceDate } from '../Utils/Utils'
import TokenService from '../../services/token-service'
import config from '../../config'
import "./eventList.css";

export default class EventList extends Component {
  static contextType = AppContext;

  removeAttend = (attend_id) => {
    fetch(`${config.API_ENDPOINT}/attend/${attend_id}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json'
      },
  })
  .then(() => {
    this.context.removeAttend(attend_id)
  })
  }

  render() {
    const type = this.props.match.url.split('/')[1]
    const token = TokenService.hasAuthToken() ? TokenService.readJwtToken() : {user_id:''}
    const { events, attend } = this.context
    const eventList = events.filter(event => event.type === type)
    // console.log(eventList)
    // console.log(attend)
    // let result = []

    for (let event of eventList) {
      event.joined = false
        for (let att of attend) {
            if(att.guest === token.user_id && att.event === event.id) {
                // result.push({...att,...event})
                event.joined = true;
                event.attend_id = att.id
            }
        }
    }
    console.log(eventList)
    // hide join button if user has already joined: attend guest id and event id match 
    return (
      <>
        <button style={{backgroundColor:'green', color:'white'}}><Link style={{textDecoration:'none', color:'white'}} to='/add-events'>Create your event</Link></button>
        <h3>Current events</h3>
        <ul className="event-list">
          {eventList.map((event, id) => (
            <li key={id}>
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
              {(event.author !== token.user_id && !event.joined) &&
                <button>
                  <Link 
                    style={{textDecoration:'none', color:'black'}} 
                    to={{
                      pathname: '/join-event',
                      state: {event}
                    }}
                  >
                    Join
                  </Link>
                </button>
              }
              {(event.author !== token.user_id && event.joined) &&
                <button 
                  onClick={() => this.removeAttend(event.attend_id)}
                  style={{cursor:'pointer'}}
                  >Un join</button>
              }
              {(event.author === token.user_id ) &&
                <button>
                  <Link 
                    style={{textDecoration:'none', color:'black'}} 
                    to={{
                      pathname: '/update-events',
                      state: {event}
                    }}
                  >
                    Update
                  </Link>
                </button>
              }
              <hr />
              <br/>
            </li>
          ))}
        </ul>
      </>
    );
  }
}
