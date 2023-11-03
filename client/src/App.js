import React from "react";
import { Fragment } from "react";
import "./App.css";

import InputTodo from "./components/InputTodo";

function App() {
  return (
    <div className="App">
      <Fragment>
        <div className="container">
          <InputTodo />
        </div>
      </Fragment>
    </div>
  );
}

export default App;
