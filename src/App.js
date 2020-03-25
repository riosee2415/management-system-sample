import React from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="gray-background">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Let's develop management system</h1>
      </div>
    );
  }
}

export default App;
