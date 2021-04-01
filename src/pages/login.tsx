import React from "react";

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
        <div>
          <input
            type="text"
            value={username}
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <input
            type="text"
            value={password}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <button>Login</button>
        </div>
      </form>
    </div>
  );
}

export default Login;
