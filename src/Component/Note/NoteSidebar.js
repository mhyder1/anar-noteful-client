import React, { Component } from "react";
import AppContext from "../../AppContext";
import './notesidebar.css'

export default class NoteSidebar extends Component {
  static contextType = AppContext;

  handleClick = (folderId) => {
    this.props.history.push(`/folder/${folderId}`);
  };

  render() {
    const { noteId } = this.props.match.params;
    console.log(this.context.notes)
    const note = this.context.notes.find((note) => {
      console.log(note.id, noteId)
      return note.id === parseInt(noteId) // fix
    });
    console.log({note})
    const folder = note
      ? this.context.folders.find((folder) => {
        // console.log(folder.id, note.folder_id)
        return folder.id === note.folder_id
      })
      : null;
    console.log({folder})
    return (
      <>
        <div
          className = "NoteSidebar"
          // style={{
          //   backgroundColor: "#D1f7C9",
          //   width: "30%",
          //   height: "40",
          //   justifyContent: "center",
          //   alignItems: "center",
          // }}
        >
          {folder && <h2>{folder.name}</h2>}
          <button className='NoteSidebar_backbutton' onClick={() => this.handleClick(folder.id)} type="submit">
            back
          </button>
        </div>{" "}
      </>
    );
  }
}
