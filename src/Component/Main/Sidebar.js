import React from "react";
import { Link } from "react-router-dom";
import AppContext from '../../AppContext'

export default function Sidebar(props) {
  return (
    <AppContext.Consumer >
      {({folders}) => (
        <div
      className="main-folderbox"
      style={{
        backgroundColor: "#D1f7C9",
        width: "30%",
        height: "40",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ul>
        {{folders}
          ? folders.map((folder) => (
              <li key={folder.id}>
                <Link to={`/folder/${folder.id}`}>{folder.name}</Link>
              </li>
            ))
          : null}
      </ul>
    </div>
      ) }
    
    </AppContext.Consumer>
  );
}
