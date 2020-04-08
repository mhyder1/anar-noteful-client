import React from "react";

export default function NoteSidebar(props) {
  const { noteId } = props.match.params;
  const note = props.notes.find((note) => note.id === noteId);
  const folder = props.folders.find((folder) => folder.id === note.folderId);
  //console.log(folder ? folder.name : "");

  return (
    <>
      {folder && <h2>{folder.name}</h2>}
      <button type="submit">back</button>
    </>
  );
}

