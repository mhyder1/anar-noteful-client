import React from "react";


export default function Note(props) {
  const noteId = props.match.params.noteId;
  //console.log(noteId)
  const notes = props.notes.filter((note) => note.id === noteId);

  return (
    <>

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
          <button>remove</button>
      </ul>

      {/* The main section should display the currently selected notes name, modified date and content
The sidebar should display the folder of the currently selected note as well as a "back" button. */}

 
    </>
  );
}
