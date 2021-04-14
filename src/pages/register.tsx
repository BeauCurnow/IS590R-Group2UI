import React from 'react';
import Input from '../components/input'
import Button from '../components/button'
import Title from '../components/title'

function Register() {
  const [username, setUsername] = React.useState("Username");

  const [password, setPassword] = React.useState("Password");

  const [email, setEmail] = React.useState("Email");

  async function handleRegister() {
    // Put Post Request Here
    console.log({ username, password, email });

    let res = await fetch("http://localhost:8080/api/v1/user", {
      method: "POST",
      body: JSON.stringify( { username: username, email: email } ),
    });
    console.log(res)
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
          <Button type="button" onClick={() => handleRegister()}>Login</Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Register;
