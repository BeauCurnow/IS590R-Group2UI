import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link,
  RouteComponentProps,
  Switch
} from "react-router-dom";
import Nav from './components/nav'

function App() {
  return (
    <div className="App">
      <Router>
        <Nav/>
        <Switch>
          <Route path="/"></Route>
          <Route path="login"></Route>
          <Route path="register"></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
