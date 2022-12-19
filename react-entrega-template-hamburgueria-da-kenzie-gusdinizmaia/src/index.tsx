import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import { UserProvider } from "./contexts/UserContext";
import { HomeProvider } from "./contexts/HomeContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.Suspense>
    <BrowserRouter>
      <UserProvider>
        <HomeProvider>
          <App />
        </HomeProvider>
      </UserProvider>
    </BrowserRouter>
  </React.Suspense>
);
