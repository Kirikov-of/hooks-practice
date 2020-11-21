import React from "react";
import { Route } from "react-router-dom";
import Tasks from "./Pages/Tasks";
import Timer from "./Pages/Timer";

import "./Pages/index.css";

function App() {
  return (
    <>
      <Route path="/" exact component={Timer} />
      <Route path="/tasks" exact component={Tasks} />
    </>
  );
}

export default App;
