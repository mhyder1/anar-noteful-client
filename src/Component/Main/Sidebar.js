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
          style={{
            backgroundColor: "#D1f7C9",
            width: "30%",
            height: "40",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ul>
            {{ folders }
              ? folders.map((folder) => (
                  <li key={folder.id}>
                    <Link to={`/folder/${folder.id}`}>{folder.name}</Link>
                  </li>
                ))
              : null}
          </ul>

          <button>
            <Link style={{ textDecoration: "none" }} to={"/add-folder"}>
              + folder
            </Link>
          </button>
        </div>
      )}
    </AppContext.Consumer>
  );
}
