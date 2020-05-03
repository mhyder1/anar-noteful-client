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
        <button>
          <Link to={"/add-note"}>Add note</Link>
        </button>
          <ul>
            {notes
              ? notes.map((note) => (
                <Note
                    key={note.id}
                    id={note.id}
                    modified={note.modified}
                    name={note.name}
                  />
                ))
              : null}
          </ul>
        </div>
      </>
    );
  }
}
