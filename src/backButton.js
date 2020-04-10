import React, { Children } from "react";
import { Link } from "react-router-dom";
// import AppContext from './AppContext';

export default function backButton(props) {
  

  return (
    //   <AppContext.Consumer>
    //       <>
    //    {({folders})=> (
    //        {folders.find((folder) => folder.id === folderId )}
    //    )}
    //    </>
    // </AppContext.Consumer>
    <button onClick={()=>props.history.push('/') }>Back</button>
  );
}
