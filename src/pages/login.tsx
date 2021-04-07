import React from "react";
import Button from '../components/button'
import Input from '../components/input'

function Login() {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  function handleLogin() {
    // Put Post Request Here
    console.log({ username, password });
    fetch("localhost:8080/api/v1/user", {
      method: "POST",
      body: JSON.stringify({ username: username, password: password }),
    });
  }

  return (
    <div>
      <h1>Please Login</h1>
      <form onSubmit={handleLogin}>
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
          <Button>Login</Button>
        </div>
      </form>
    </div>
  );
}

export default Login;
