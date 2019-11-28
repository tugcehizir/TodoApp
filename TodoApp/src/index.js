import React, { Component } from "react";
import ReactDOM from "react-dom";
import TodoList from "./todoList";
import "./styles.css";

class App extends Component {
  render() {
    return (
      <div>
        <TodoList />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
