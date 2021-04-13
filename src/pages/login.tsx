import React from "react";
import Button from "../components/button";
import Input from "../components/input";
import { useHistory } from "react-router-dom";

function Login() {
  let history = useHistory();
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  function handleLogin() {
    console.log({ username, password });
    // fetch("localhost:8080/api/v1/user", {
    //   method: "POST",
    //   body: JSON.stringify({ username: username, password: password }),
    // });
    const fakeResponse = {id: "FOAIENO23OICNM92J", username: "test name", email:"test@test.com", status:200}
    if (fakeResponse.status === 200) {
      //store session in cookie
      //store response in context?
      history.push("/")
    } else {
      console.error(fakeResponse)
    }
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
