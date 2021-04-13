import React from "react";
import Button from "../components/button";
import Input from "../components/input";
import { useHistory } from "react-router-dom";

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
      <h1>Please Login</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Input
          type="text"
          value={username}
          placeholder="Username"
          onChange={(e: any) => setUsername(e.target.value)}
        />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Input
          type="text"
          value={password}
          placeholder="Password"
          onChange={(e: any) => setPassword(e.target.value)}
        />
      </div>
      <div>
        <Button onClick={() => handleLogin()}>Login</Button>
      </div>
    </div>
  );
}

export default Login;
