import React from "react";
import { Link } from "react-router-dom";
import AppContext from "../../AppContext";
//import Addfolder from "../../AddFolder";

export default function Sidebar() {
  return (
    <AppContext.Consumer>
      {({ folders }) => (
        <div
          className="main-folderbox"
        >
          <ul>
            {{ folders }
              ? folders.map((folder) => (
                  <li key={folder.id}>
                    <Link style={{color:'#fff'}} to={`/folder/${folder.id}`}>{folder.name}</Link>
                  </li>
                ))
              : null}
          </ul>

          <button>
            <Link style={{ textDecoration: "none",color:'black' }} to={"/add-folder"}>
              + folder
            </Link>
          </button>
        </div>
      )}
    </AppContext.Consumer>
  );
}
