import React from "react";
import "./Main.css";
import AppContext from '../../AppContext'
// import { findByLabelText } from "@testing-library/react";

export default class Main extends React.Component {
 static contextType = AppContext

  render() {
    //console.log(this.props.folders);
    return (
      <>
        <div
          className="conTainer"
          style={{ display: "flex", flex: "1", flexDirection: "row" }}
        >
          <div
            className="main-notebox"
            style={{
              backgroundColor: "orange",
              width: "50%",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <ul>
              {this.props.notes
                ? this.props.notes.map((note) => (
                    <li
                      className="main-note-list"
                      key={note.id}
                      style={{ fontSize: "12px", listStyle: "none" }}
                    >
                      {note.name}
                      <p>{note.modified}</p>
                      <button>remove</button>
                    </li>
                  ))
                : null}
            </ul>
          </div>
          
        </div>
      </>
    );
  }
}
