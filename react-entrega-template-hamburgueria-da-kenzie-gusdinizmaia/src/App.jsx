import React from "react";
import { Home } from "./pages/Home";
import { GlobalStyles } from "./styles/globalStyle";
import { ResetStyles } from "./styles/reset";

function App() {
  return (
    <React.Fragment>
      <GlobalStyles />
      <ResetStyles />
      <Home />
    </React.Fragment>
  );
}

export default App;
