import React from "react";
import { NavLink } from 'react-router-dom';

export default function FolderMain(props) {
  const folderId = props.match.params.folderId;
  // console.log(folderId)
  const notes = props.notes.filter((note) => note.folderId === folderId);
  // console.log(notes);
  return (
    <>
      <div>
        <ul>
          {notes
            ? notes.map((note) => (
                <li key={note.id}>
                  <NavLink to={`/note/${note.id}`} style={{textDecoration:'none'}}>{note.name}</NavLink>{' '}
                  <button style={{fontSize:'10px'}}>remove</button>
                </li>
              ))
            : null}
        </ul>
      </div>
    </>
  );
}
