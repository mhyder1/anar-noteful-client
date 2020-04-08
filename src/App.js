import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Main from "./Component/Main/Main";
import Note from "./Component/Note/Note";
// import dummyStore from "./dummy-store";
import Header from "./Component/Header";
import FolderMain from "./Component/Folder/FolderMain";
import Sidebar from "./Component/Main/Sidebar";
import NoteSidebar from "./Component/Note/NoteSidebar";
import config from "./config.js";
import AppContext from './AppContext'

export default class App extends Component {
  static contextType = AppContext

  state = {
    folders: [],
    notes: [],
  };

  componentDidMount() {
    Promise.all([
      fetch(`${config.API_ENDPOINT}/notes`),
      fetch(`${config.API_ENDPOINT}/folders`),
    ])
      .then(([notesRes, foldersRes]) => {
        if (!notesRes.ok) return notesRes.json().then((e) => Promise.reject(e));
        if (!foldersRes.ok)
          return foldersRes.json().then((e) => Promise.reject(e));
        return Promise.all([notesRes.json(), foldersRes.json()]);
      })
      .then(([notes, folders]) => {
        this.setState({ notes, folders });
      })
      .catch((error) => {
        console.log({ error });
      });
  }

  render() {
    console.log(this.context)
    const value= {
      notes : this.state.notes,
      folders : this.state.folders
    }

    return (
      <AppContext.Provider value={value}>
      <>
        <div className="App"></div>
        <Switch>
          <Route path="/" component={Header} />
        </Switch>
        <Switch>
          <Route
            exact
            path="/" component ={Sidebar}
            // render={(props) => (
            //   <Sidebar
            //     {...props}
            //     folders={this.state.folders}
            //     notes={this.state.notes}
            //   />
            // )}
          />
        </Switch>
        <Switch>
          <Route
            exact
            path="/" component={Main}
          //   render={(props) => (
          //     <Main
          //       {...props}
          //       folders={this.state.folders}
          //       notes={this.state.notes}
          //     />
          //   )}
          />
        </Switch>
        <Route
          path="/folder/:folderId"
          render={(props) => (
            <Sidebar {...props} folders={this.state.folders} />
          )}
        />

        <Route
          exact
          path="/folder/:folderId"
          render={(props) => (
            <FolderMain
              {...props}
              //folders={this.state.folders}
              notes={this.state.notes}
            />
          )}
        />

        <Route
          exact
          path="/note/:noteId"
          render={(props) => (
            <NoteSidebar
              {...props}
              folders={this.state.folders}
              notes={this.state.notes}
            />
          )}
        />

        <Route
          exact
          path="/note/:noteId"
          render={(props) => <Note {...props} notes={this.state.notes} />}
        />
      </>
      </AppContext.Provider>
    );
  }
}
