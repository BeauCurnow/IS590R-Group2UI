import React from "react";
import Journal from "./journal";
import { Link, BrowserRouter as Router } from "react-router-dom";
import Subtitle from '../components/subtitle';

function Home() {
  

  const [entries, setEntries] = React.useState([
    {title: 'Test1', journal: 'This is a bunch of markdown!'},
    {title: 'Test2', journal: 'This is a bunch of markdown!'},
  ]);

   

  return (
    <Router>
      <div>
        <div>
          <Link to="/entries"><Subtitle>View Your Journal Entries</Subtitle></Link>
        </div>
        <div>
          <Link to={{
            pathname: "/journal" ,
            state:{
              entry : {
                title: 'New Journal',
                journal: ''
              }
            }
            }}><Subtitle>Create a New Journal</Subtitle></Link>
        </div>
      </div>
    </Router>
  );
}

export default Home;
