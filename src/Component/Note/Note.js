import React, { Component } from "react";
import AppContext from "../../AppContext";
import { NavLink } from "react-router-dom";
import config from "../../config";

export default class Note extends Component {
  static contextType = AppContext;

  handleNote = (noteId) => {
    console.log({noteId})
    fetch(`${config.API_ENDPOINT}/notes/${noteId}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    }).then(() => {
      this.context.handleDelete(noteId);
      // this.props.history.push("/");
    });
  };

  render() {
    const {modified, name, id, content} = this.props
    // console.log(this.props);
    // const noteId = this.props.match.params.noteId;
    // const note = this.context.notes.filter((note) => {
    //   // console.log(note.id, noteId)
    //   return note.id === parseInt(id)   //fix
    // });
    //this.handleDeleteNote = this.context.handleDelete;
    // console.log(note)
    return (
      <>
        <div
          className="note"
          style={{
            // backgroundColor: '#102541',
            // gridArea: 'main',
            // height: 'calc(100vh - 120px)',
            // overflow: 'auto',
            // color:'whitesmoke'
          }}
        >
            {/* <NavLink className='notelink' to={`/note/${id}`}>{name}</NavLink> */}
            { !content ?
              <NavLink to={`/note/${id}`}>{name}</NavLink>
              :
              <NavLink to={`#`}>{name}</NavLink>
            }
            
            <p>{modified}</p>
            {content &&
              <p>{content}</p>
            }
            <button
              style={{ fontSize: "10px" }}
              onClick={() => this.handleNote(id)}
            >
              Main remove
            </button>
        </div>
      </>
    );
  }
}

