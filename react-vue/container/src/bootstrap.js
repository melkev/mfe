import React from "react";
import ReactDom from "react-dom";
//mount function to start up the app
import App from "./App";

ReactDom.render(<App />, document.querySelector("#root"));
// if we are in development and in isolation,
// call mount immediately

// we are running throught container
// ann we should export the mount fucntion
