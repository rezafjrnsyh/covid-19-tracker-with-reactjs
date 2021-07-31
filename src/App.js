import React from "react";

import "./App.css";
import Home from "./Components/Header/Home"
import {Route, Redirect} from "react-router-dom";

function App() {
  return (
    <div className="App">
          <Redirect exact from="/c-19" to="/c-19/daily" />
          <Route path="/c-19/:page?" render={props => <Home {...props} />} />
    </div>
  );
}

export default App;
