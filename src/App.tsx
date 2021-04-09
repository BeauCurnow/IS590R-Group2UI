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
import Nav from './components/nav';
import Login from './pages/login';
import Register from './pages/register';
import Home from './pages/home';
import Journal from './pages/journal';
import Entries from './pages/entries';
function App() {
  return (
    <div className="App">
      <Router>
        <Nav/>
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/login" exact component={Login}></Route>
          <Route path="/register" exact component={Register}></Route>
          <Route path="/journal" exact component={Journal}></Route>
          <Route path="/entries" exact component={() => <Entries entries={Entries}/>}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
