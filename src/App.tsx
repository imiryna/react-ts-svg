import React from "react";
import logo from "./logo.svg";
// import { ReactComponent as Logo } from "./logo.svg";
import { Btn, Icon } from "./App.styled";
import "./App.css";

function App() {
  const handleClick = () => {
    alert("Hello word!");
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <Btn type="button" onClick={handleClick}>
          <p> Learn React</p>
          <Icon />
        </Btn>
      </header>
    </div>
  );
}

export default App;
