import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import AppContext from "../../AppContext";
import Note from '../Note/Note'
import './FolderMain.css'

export default class FolderMain extends Component {
  static contextType = AppContext;

  render() {
    const folderId = this.props.match.params.folderId;

    const notes = this.context.notes.filter((note) => {
      // console.log(note.folderId, folderId)
      return note.folder_id === folderId
    });
    // console.log(this.context.notes)
    return (
      <>
        <div className="FolderMain">
          <ul>
            {notes
              ? notes.map((note) => (
                <Note
                    key={note.id}
                    id={note.id}
                    modified={note.modified}
                    name={note.name}
                  />
                  // <li key={note.id}>
                  //   <NavLink 
                  //     to={`/note/${note.id}`}
                  //     style={{ textDecoration: "none", color:"white", lineHeight:'2rem' }}
                  //   >
                  //     {note.name}
                  //   </NavLink> {''}
                  //   <button
                  //     onClick={() => this.context.handleDelete(note.id)}
                  //     style={{ fontSize: "10px" }}
                  //   >
                  //     filter remove
                  //   </button>
                  // </li>
                ))
              : null}
          </ul>
        </div>
        <button>
          <Link to={"/add-note"}>Add note</Link>
        </button>
      </>
    );
  }
}
