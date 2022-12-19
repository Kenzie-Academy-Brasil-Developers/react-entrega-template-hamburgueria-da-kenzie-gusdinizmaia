import React from "react";
import { Home } from "./pages/Home";
import { RouteMain } from "./routes";
import { GlobalStyles } from "./styles/globalStyle";
import { ResetStyles } from "./styles/reset";

function App() {
  return (
    <React.Fragment>
      <GlobalStyles />
      <ResetStyles />
      <RouteMain />
    </React.Fragment>
  );
}

export default App;
