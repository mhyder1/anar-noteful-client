import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import AppContext from "../../AppContext";

export default class FolderMain extends Component {
  static contextType = AppContext;

  render() {
    const folderId = this.props.match.params.folderId;
    // console.log(folderId)
    const notes = this.context.notes.filter(
      (note) => note.folderId === folderId
    );
    return (
      <>
        <div
          className="FolderMain"
          style={{
            backgroundColor: "orange",
            width: "50%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <ul>
            {notes
              ? notes.map((note) => (
                  <li key={note.id}>
                    <NavLink
                      to={`/note/${note.id}`}
                      style={{ textDecoration: "none" }}
                    >
                      {note.name}
                    </NavLink>{" "}
                    <button
                      onClick={() => this.context.handleDelete(note.id)}
                      style={{ fontSize: "10px" }}
                    >
                      remove
                    </button>
                  </li>
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
