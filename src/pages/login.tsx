import React from "react";
import Button from "../components/button";
import Input from "../components/input";
import { useHistory } from "react-router-dom";
import Title from '../components/title'

function Login() {
  let history = useHistory();
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  function handleLogin() {
    // fetch("localhost:8080/api/v1/user", {
    //   method: "POST",
    //   body: JSON.stringify({ username: username, password: password }),
    // });
    fetch("http://localhost:8080/api/v1/user/e9065b24-8b01-4d0c-81e3-fb794a83e952")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      history.push("/", data)
    });
  }

  return (
    <div>
      <br/>
      <form style={{backgroundColor: "white", padding: "20px", marginRight: "30vw", marginLeft: "30vw"}} onSubmit={handleLogin}>
      <div style={{border: "3px solid"}}>
      <Title>Please Login</Title>
        <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}><Input
            type="text"
            value={username}
            placeholder="Username"
            onChange={(e : any) => setUsername(e.target.value)}
          /></div>
        <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
          <Input
            type="text"
            value={password}
            placeholder="Password"
            onChange={(e : any) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <Button onClick={() => handleLogin()}>Login</Button>
        </div>
        </div>
      </form>
    </div>
  );
}

export default Login;
