import React from "react";
import ReactDom from "react-dom";
//mount function to start up the app
import App from "./App";

const mount = (el) => {
  ReactDom.render(<App />, el);
};
// if we are in development and in isolation,
// call mount immediately
if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#_marketing-dev-root");

  if (devRoot) {
    mount(devRoot);
  }
}
// we are running throught container
// ann we should export the mount fucntion

export { mount };
