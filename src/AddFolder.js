import React, { Component } from "react";
import AppContext from "./AppContext";
import config from "./config";

export default class AddFolder extends Component {
  static contextType = AppContext;

  state = {
    folderName: "",
  };

  handleChange = (e) => {
    this.setState({
      folderName: e.currentTarget.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    fetch(`${config.API_ENDPOINT}/folders`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        'name': this.state.folderName
      }),
    })
      .then((res) => {
        if (!res.ok) return res.json().then((e) => Promise.reject(e));
        return res.json;
      })

      .then((folder) => {
        // console.log(folder)
        this.context.addFolder(folder);
        this.props.history.push(`/folder/${folder.id}`);
      })
      .catch((error) => {
        console.error({ error });
      });
  };

  render() {
    return (
      <>
        <h2>Create a folder</h2>
        <form onSubmit={this.handleSubmit}>
          <label>Name</label> <br />
          <input
            onChange={this.handleChange}
            type="text"
            value={this.state.folderName}
            required
          />
          <br />
          <input type="submit" value="Add Folder" />
        </form>
      </>
    );
  }
}
