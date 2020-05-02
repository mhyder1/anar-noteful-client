import React, { Component } from "react";
import AppContext from "../../AppContext";
import { NavLink } from "react-router-dom";
import Note from "./Note"
import config from "../../config";

export default class NoteDetails extends Component {
  static contextType = AppContext;

  render() {
    const id = this.props.match.params.noteId;
    console.log(id)
    const note = this.context.notes.find((note) => {
      return note.id === parseInt(id)   //fix
    });
    //this.handleDeleteNote = this.context.handleDelete;
    console.log(note)
    return (
      <>
        <div
          className="note-details"
          style={{
            // backgroundColor: '#102541',
            // gridArea: 'main',
            // height: 'calc(100vh - 120px)',
            // overflow: 'auto',
            // color:'whitesmoke'
          }}
        >
            <h1>Note Details</h1>
            { note &&
                <Note 
                    name={note.name}
                    modified={note.modified}
                    content={note.content}
                />
            }
            {/* <NavLink className='notelink'to={`/note/${id}`}>{name}</NavLink>
            <p>{modified}</p>
            <button
              style={{ fontSize: "10px" }}
              onClick={() => this.handleNote(id)}
            >
              Main remove
            </button> */}
         
        </div>
      </>
    );
  }
}

