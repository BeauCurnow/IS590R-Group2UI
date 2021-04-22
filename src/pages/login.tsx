import React from "react";
import Button from "../components/button";
import Input from "../components/input";
import { useHistory } from "react-router-dom";
import Title from "../components/title";
import { FaUser } from "react-icons/fa";
import { FaKey } from "react-icons/fa";

function Login() {
  let history = useHistory();
  const [username, setUsername] = React.useState("testUN");
  const [password, setPassword] = React.useState("password");
  const [loginFailed, setLoginFailed] = React.useState(false);

  async function handleLogin() {
    if (!username) {
      document.getElementById("usernameError")!.innerHTML = "Username required";
    }
    if (!password) {
      document.getElementById("passwordError")!.innerHTML = "Password required";
    }
    if (username && password) {
      let loginResponse = await fetch(
        "http://ec2-34-215-202-19.us-west-2.compute.amazonaws.com:8080/login",
        {
          method: "POST",
          body: JSON.stringify({ username: username, password: password }),
        }
      );
      if (loginResponse.ok) {
        setLoginFailed(false)

        let userResponse = await fetch(
          "http://ec2-34-215-202-19.us-west-2.compute.amazonaws.com:8080/api/v1/user/",
          {
            method: "POST",
            body: JSON.stringify({ username: username, password: password }),
          }
        );

        let data = userResponse.json()
        history.push("/", data);
      } else {
        setLoginFailed(true)
      }
      // .then((response) => {
      //   if(response.ok) {
      //     return response.json();
      //   } else {
      //     setLoginFailed(true)
      //   }
      // })
      // .then((data) => {
      //   history.push("/", data);
      // });
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
            />
            <br />
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
          {loginFailed && (
            <span style={{ color: "red" }}>
              Incorrect Username or Password{" "}
            </span>
          )}
          <div>
            <Button onClick={() => handleLogin()}>Login</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
