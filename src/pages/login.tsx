import React from "react";
import Button from "../components/button";
import Input from "../components/input";
import { useHistory } from "react-router-dom";
import Title from "../components/title";
import { FaUser } from "react-icons/fa";
import { FaKey } from "react-icons/fa";

function Login() {
  let history = useHistory();
  const [username, setUsername] = React.useState("logan");
  const [password, setPassword] = React.useState("password");

  function handleLogin() {
    // fetch("localhost:8080/api/v1/user", {
    //   method: "POST",
    //   body: JSON.stringify({ username: username, password: password }),
    // });
    if (!username) {
      document.getElementById("usernameError")!.innerHTML = "Username required";
    } 
    if (!password) {
      document.getElementById("passwordError")!.innerHTML = "Password required";
    }
    if (username && password) {
      fetch(
        "http://ec2-34-215-202-19.us-west-2.compute.amazonaws.com:8080/api/v1/user/e9065b24-8b01-4d0c-81e3-fb794a83e952"
      )
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          history.push("/", data);
        });
    }
  }

  return (
    <div>
      <br />
      <div
        style={{
          backgroundColor: "white",
          padding: "20px",
          marginRight: "30vw",
          marginLeft: "30vw",
        }}
      >
        <div style={{ border: "3px solid" }}>
          <Title>Please Login</Title>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <FaUser />
            &nbsp;
            <Input
              type="text"
              value={username}
              placeholder="Username"
              onChange={(e: any) => setUsername(e.target.value)}
            /><br />
          </div>
          <span style={{ color: "red" }} id="usernameError"></span>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <FaKey />
            &nbsp;
            <Input
              type="text"
              value={password}
              placeholder="Password"
              onChange={(e: any) => setPassword(e.target.value)}
            />
          </div>
          <span style={{ color: "red" }} id="passwordError"></span>
          <div>
            <Button onClick={() => handleLogin()}>Login</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
