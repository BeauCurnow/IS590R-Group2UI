import React from "react";

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
      <form onSubmit={(e) => handleRegister}>
        <div>
          <input
            placeholder={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <input
            placeholder={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <input placeholder="Confirm Password" />
        </div>
        <div>
          <input
            placeholder={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <button type="button" onClick={() => handleRegister()}>Login</button>
        </div>
      </form>
    </div>
  );
}

export default Register;
