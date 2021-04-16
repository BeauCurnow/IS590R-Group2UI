import { useState, useEffect } from "react";
import Button from "../components/button"
import { Link } from "react-router-dom";
import Subtitle from '../components/subtitle';
import Title from '../components/title'

function Home(props : any) {
  const [user, setUser] = useState<User>();

  useEffect(() => {
    setUser(props.location.state)
  },[])

  return (
    <>
      {user ? 
      <>
      <Title>Welcome {user.name}</Title> 
      <div style={{backgroundColor: "white", padding: "20px", marginRight: "30vw", marginLeft: "30vw"}}>
      <div style={{border: "3px solid"}}>
          <Link to={{pathname: "/entries", state: user}}><Subtitle>View Your Journal Entries</Subtitle></Link>
        <div>
          <Link
            to={{
              pathname: "/journal",
              state: {
                  title: "New Journal",
                  journal: "",
                  user: user
              },
            }}
          >
            <Subtitle>Create a New Journal</Subtitle>
          </Link>
        </div>
        <br/>
      </div>
      </div>
      </> : (
        <>
        <br/>
        <div style={{backgroundColor: "white", padding: "20px", marginRight: "30vw", marginLeft: "30vw"}}>
        <div style={{border: "3px solid"}}>
        <Title>Welcome!</Title>
        <Link to="/login"><Button>Login to create a journal</Button></Link>
        </div>
        </div>
        </>
      )}
    </>
  );
}

export default Home;

type User = {
  id: string,
  name: string,
  email: string
}