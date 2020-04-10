import React, { Component } from "react";
import AppContext from "./AppContext";
import config from "./config";

export default class AddNote extends Component {
  static contextType = AppContext;
  state = {
    noteName: "",
    contName: "",
    folderId: ""
  };

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    fetch(`${config.API_ENDPOINT}/notes`, {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({
        "noteName": this.state.noteName,
        "contName": this.state.contName,
        "folderId": this.state.folderId,
        "modified": new Date()
      })
    })
      .then((res) => {
        if (!res.ok) return res.json().then((e) => Promise.reject(e));
        return res.json();
      })
      .then((note) => {
        this.context.addNote(note);
        this.props.history.push(`/note/${note.id}`);
      })
      .catch((error) => {
        console.log({ error });
      });
  };

  render() {
    // console.log(this.context.folders)
    return (
      <>
        <div>Create a note</div>
        <form onSubmit={this.handleSubmit}>
          <label>Name</label> <br />
          <input
            onChange={(e) => this.handleInputChange(e)}
            type="text"
            name="noteName"
            value={this.state.noteName}
            required
          />
          <br />
          <label>Content</label>
          <br />
          <textarea
            onChange={(e) => this.handleInputChange(e)}
            value={this.state.contName}
            name="contName"
            required
          />
          <br />
          <label>
            Folder
            <br />
            <select onChange={(e) => this.handleInputChange(e)} name="folderId" value={this.state.folderId}>
              <option>--</option>
              {this.context.folders.map((folder) => (
                <option value={folder.id}>
                  {folder.name}
                </option>
              ))}
            </select>
            <br />
          </label>
          <br />
          <input type="submit" value="submit" />
        </form>
      </>
    );
  }
}
