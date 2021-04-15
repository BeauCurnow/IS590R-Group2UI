import { useState, useEffect } from "react";
import Button from "../components/button"
import { Link } from "react-router-dom";

function Home(props : any) {
  const [user, setUser] = useState<User>();

  useEffect(() => {
    setUser(props.location.state)
  },[])

  return (
    <>
      {user ? 
      <>
      <h2>Welcome {user.name}</h2> 
      <div>
          <Link to={{pathname: "/entries", state: user}}>View Your Journal Entries</Link>
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
            Create a New Journal
          </Link>
        </div>
        <br/>
      </div>
      </> : (
        <>
        <h2>Welcome!</h2>
        <Link to="/login"><Button>Login to create a journal</Button></Link>
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