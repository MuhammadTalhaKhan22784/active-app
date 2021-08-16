import React from "react";
import "./App.css";
import DesktopRoutes from "./DesktopRoutes/Routes";
import AppRoute from "./Mobile View/Routes/Routes";

function App() {
  return (
    <>
      <div>
        <div className="d-none d-md-block">
          <DesktopRoutes />
        </div>
        <div className="d-block d-md-none">
          <AppRoute />
        </div>
      </div>
    </>
  );
}

export default App;
