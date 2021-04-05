import React from "react";
import Journal from "./journal";
import { Link, BrowserRouter as Router } from "react-router-dom";

function Home() {
  return (
    <Router>
      <div>
        <div>
          <Link to="/entries">View Your Journal Entries</Link>
        </div>
        <div>
          <Link to="/journal">Create a New Journal</Link>
        </div>
      </div>
    </Router>
  );
}

export default Home;
