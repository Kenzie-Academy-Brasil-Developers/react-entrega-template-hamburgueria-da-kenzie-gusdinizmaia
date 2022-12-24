import React from "react";
import { RouteMain } from "./routes";
import { GlobalStyles } from "./styles/globalStyle";
import { ResetStyles } from "./styles/reset";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <React.Fragment>
      <GlobalStyles />
      <ResetStyles />
      <RouteMain />
      <ToastContainer />
    </React.Fragment>
  );
}

export default App;
