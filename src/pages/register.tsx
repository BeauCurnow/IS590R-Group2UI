import React from "react";
import Button from "../components/button";
import Input from "../components/input";
import { useHistory } from "react-router-dom";
import Title from "../components/title";

function Register() {
  const [name, setName] = React.useState("");
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [registering, setRegistering] = React.useState(false);
  const [error, setError] = React.useState(false);

  let history = useHistory();

  async function handleRegister() {
    if (!username) {
      document.getElementById("usernameError")!.innerHTML = "Username required";
    }
    if (!password) {
      document.getElementById("passwordError")!.innerHTML = "Password required";
    }
    if (confirmPassword !== password) {
      document.getElementById("confirmPasswordError")!.innerHTML =
        "Passwords must match";
    }
    if (!email) {
      document.getElementById("emailError")!.innerHTML = "Email required";
    }
    if (username && password && email && confirmPassword === password) {
      setRegistering(true);
      let response = await fetch(
        "http://ec2-34-215-202-19.us-west-2.compute.amazonaws.com:8080/api/v1/user",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: name,
            username: username,
            password: password,
          }),
        }
      );
      if (response.ok) {
        let data = response.json();
        history.push("/", data);
        setRegistering(false);
      } else {
        setError(true);
        setRegistering(false)
      }
    }
  }

  return (
    <div>
      <br />
      <div
        style={{
          backgroundColor: "white",
          padding: 20,
          marginRight: "30vw",
          marginLeft: "30vw",
        }}
      >
        <div style={{ border: "3px solid" }}>
          <Title>Please Sign Up Below</Title>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Input
              value={name}
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
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
              value={username}
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <span style={{ color: "red" }} id="usernameError"></span>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Input
              value={password}
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <span style={{ color: "red" }} id="passwordError"></span>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Input
              value={confirmPassword}
              type="password"
              placeholder="Confirm Password"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <span style={{ color: "red" }} id="confirmPasswordError"></span>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Input
              value={email}
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <span style={{ color: "red" }} id="emailError"></span>
          {error && (
              <span style={{ color: "red" }}>
                There was an error registering you...<br />Please try again later
              </span>
            )}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {registering ? (
              <p>Registering...</p>
            ) : (
              <Button type="button" onClick={() => handleRegister()}>
                Register
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
