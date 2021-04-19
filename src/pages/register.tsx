import React from "react";
import Button from "../components/button";
import Input from "../components/input";
import { useHistory } from "react-router-dom";
import Title from '../components/title'

function Register() {
  const [username, setUsername] = React.useState("Username");
  const [password, setPassword] = React.useState("Password");
  const [email, setEmail] = React.useState("Email");

  let history = useHistory();

  function handleRegister() {
    fetch("http://ec2-34-215-202-19.us-west-2.compute.amazonaws.com:8080/api/v1/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: username, email: email }),
    }).then((response) => {
      return response.json();
    })
    .then((data) => {
      history.push("/", data)
    });
  }

  return (
    <div>
        <br/>
      <form style={{backgroundColor: "white", padding: 20, marginRight: "30vw", marginLeft: "30vw"}} onSubmit={(e) => handleRegister}>
        <div style={{border: "3px solid"}}>
        <Title>Please Sign Up Below</Title>
        <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
          <Input
            placeholder={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
          <Input
            placeholder={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
          <Input placeholder="Confirm Password" />
        </div>
        <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
          <Input
            placeholder={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
          <Button type="button" onClick={() => handleRegister()}>Register</Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Register;
