import React, { Component } from "react";
import AppContext from "../../AppContext";
import config from "../../config";

export default class Note extends Component {
  static contextType = AppContext;

  handleNote = (noteId) => {
    fetch(`${config.API_ENDPOINT}/notes/${noteId}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    }).then(() => {
      this.context.handleDelete(noteId);
      this.props.history.push("/");
    });
  };

  render() {
    // console.log(this.props);
    const noteId = this.props.match.params.noteId;
    const notes = this.context.notes.filter((note) => note.id === noteId);
    //this.handleDeleteNote = this.context.handleDelete;
    return (
      <>
        <div
          className="note"
          style={{
            backgroundColor: '#102541',
            gridArea: 'main',
            height: 'calc(100vh - 120px)',
            overflow: 'auto',
            color:'whitesmoke'
          }}
        >
          <ul>
            {notes
              ? notes.map((note) => (
                  <li key={note.id}>
                    {note.name}
                    <p>{note.modified}</p>
                    <p>{note.content}</p>
                  </li>
                ))
              : null}

            <button onClick={() => this.handleNote(noteId)}>remove</button>
          </ul>
        </div>
      </>
    );
  }
}
