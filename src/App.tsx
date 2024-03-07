import React from "react";
import logo from "./logo.svg";
import { Btn } from "./App.styled";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <Btn type="button">
          <p> Learn React</p>
          {/* <img src={<Icon />} alt="svg" /> */}
          {/* <Icon /> */}
        </Btn>
      </header>
    </div>
  );
}

export default App;
