import React, { Component } from "react";
import AppContext from '../../AppContext';

export default class NoteSidebar extends Component {
    static contextType = AppContext

    handleClick =(folderId)=> {
        this.props.history.push(`/folder/${folderId}`)

    }

    render() {
         const { noteId } = this.props.match.params;
         const note = this.context.notes.find((note) => note.id === noteId);
        const folder = note ? this.context.folders.find((folder) => folder.id === note.folderId) :null ;
            
    return (
      <>
        {folder && <h2>{folder.name}</h2>}
        <button onClick={()=>this.handleClick(folder.id)} type="submit">back</button>
      </>
    );
    }
 
  //console.log(folder ? folder.name : "");
}

