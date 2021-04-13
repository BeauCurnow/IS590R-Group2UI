import React from "react";
import Button from "../components/button";
import Input from "../components/input";
import { useHistory } from "react-router-dom";

function Register() {
  const [username, setUsername] = React.useState("Username");
  const [password, setPassword] = React.useState("Password");
  const [email, setEmail] = React.useState("Email");

  let history = useHistory();

  async function handleRegister() {
    await fetch("http://localhost:8080/api/v1/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: username, email: email }),
    });
    history.push("/");
  }

  return (
    <>
    <h1>Register</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Input
          placeholder={username}
          onChange={(e) => setUsername(e.target.value)}
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
          placeholder={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Input placeholder="Confirm Password" />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Input placeholder={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div>
        <Button type="button" onClick={() => handleRegister()}>
          Login
        </Button>
      </div>
    </>
  );
}

export default Register;
