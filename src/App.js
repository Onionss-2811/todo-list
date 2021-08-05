import LogIn from "./components/LogIn";
import { BrowserRouter as Router, Route } from "react-router-dom";
import React, { Component } from "react";
import ToDoList from "./components/ToDoList";
class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/" component={LogIn} />
        <Route path="/ToDoList" component={ToDoList} />
      </Router>
    );
  }
}

export default App;
